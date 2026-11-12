import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import SearchTemplate from '../components/templates/SearchTemplate';
import Seletor from '../components/molecules/Seletor';
import EmptyState from '../components/molecules/EmptyState';
import CardComparacao from '../components/organisms/CardComparacao';
import ListaModal from '../components/organisms/ListaModal';
import MapaPostos from '../components/organisms/MapaPostos';
import { colors } from '../theme/colors';
import { PADDING_HORIZONTAL, useLarguraApp } from '../theme/layout';
import { formatarPreco } from '../utils/busca';
import { combustiveis, postosComparaveis, rotuloCombustivel } from '../data/comparacao';

const MAX_POSTOS = 2;
const LETRAS = ['A', 'B'];
const ESPACO_CARDS = 17;
const PROPORCAO_MAPA = 282 / 362;
const ORDENS = [
  { id: 'localizacao', rotulo: 'Localização' },
  { id: 'preco', rotulo: 'Preço' },
];

// COMPARAR: escolhe combustível e até 2 postos; o mais barato ganha destaque verde e a faixa.
export default function CompararScreen() {
  const router = useRouter();
  const largura = useLarguraApp() - PADDING_HORIZONTAL * 2;
  const larguraCard = (largura - ESPACO_CARDS) / 2;

  // Estado inicial igual ao protótipo: Posto A x Posto B, Gasolina Comum.
  const [selecionados, setSelecionados] = useState(['posto-a', 'posto-b']);
  const [combustivel, setCombustivel] = useState(combustiveis[0]);
  const [ordem, setOrdem] = useState(ORDENS[0].id);
  const [lista, setLista] = useState(null); // 'postos' | 'combustivel' | 'ordem' | null

  const precoDe = (posto) => posto.combustiveis[combustivel];

  const postosOrdenados = useMemo(() => {
    const comPreco = (p) => p.combustiveis[combustivel] ?? Infinity;
    return [...postosComparaveis].sort((a, b) =>
      ordem === 'preco' ? comPreco(a) - comPreco(b) : a.distanciaKm - b.distanciaKm
    );
  }, [combustivel, ordem]);

  const comparados = selecionados.map((id) => postosComparaveis.find((p) => p.id === id));
  const precos = comparados.map(precoDe).filter((p) => p !== undefined);
  const menorPreco = precos.length ? Math.min(...precos) : undefined;

  const alternarPosto = (id) =>
    setSelecionados((atual) =>
      atual.includes(id) ? atual.filter((i) => i !== id) : [...atual, id].slice(0, MAX_POSTOS)
    );

  const voltar = () => (router.canGoBack() ? router.back() : router.replace('/home'));

  const listas = {
    postos: {
      titulo: 'Adicionar posto à comparação',
      aviso: `Selecione até ${MAX_POSTOS} postos.`,
      itens: postosOrdenados.map((p) => {
        const selecionado = selecionados.includes(p.id);
        const preco = p.combustiveis[combustivel];
        return {
          id: p.id,
          rotulo: p.nome,
          detalhe: `${preco === undefined ? 'Sem preço' : formatarPreco(preco)} · ${p.tempo} (${p.distancia})`,
          selecionado,
          desabilitado: !selecionado && selecionados.length >= MAX_POSTOS,
        };
      }),
      onSelecionar: alternarPosto,
    },
    combustivel: {
      titulo: 'Combustível',
      itens: combustiveis.map((c) => ({ id: c, rotulo: rotuloCombustivel(c), selecionado: c === combustivel })),
      onSelecionar: (c) => {
        setCombustivel(c);
        setLista(null);
      },
    },
    ordem: {
      titulo: 'Ordenar postos por',
      itens: ORDENS.map((o) => ({ ...o, selecionado: o.id === ordem })),
      onSelecionar: (o) => {
        setOrdem(o);
        setLista(null);
      },
    },
  };
  const listaAberta = lista ? listas[lista] : null;

  return (
    <SearchTemplate titulo="Comparar" ativo="comparar" onVoltar={voltar}>
      <View style={styles.linha}>
        <Seletor
          valor={ORDENS.find((o) => o.id === ordem).rotulo}
          onPress={() => setLista('ordem')}
          style={{ width: larguraCard }}
        />
        <Seletor
          valor={rotuloCombustivel(combustivel)}
          onPress={() => setLista('combustivel')}
          style={{ width: larguraCard }}
        />
      </View>

      <Pressable
        onPress={() => setLista('postos')}
        accessibilityRole="button"
        style={({ pressed }) => [styles.botao, pressed && styles.pressionado]}
      >
        <Text style={styles.botaoTexto}>Adicionar posto à comparação</Text>
      </Pressable>

      {comparados.length > 0 ? (
        <>
          <View style={styles.linha}>
            {comparados.map((posto) => (
              <CardComparacao
                key={posto.id}
                posto={posto}
                combustivel={rotuloCombustivel(combustivel)}
                preco={precoDe(posto)}
                melhor={precoDe(posto) !== undefined && precoDe(posto) === menorPreco}
                largura={larguraCard}
              />
            ))}
          </View>

          <MapaPostos
            marcadores={comparados.map((p, i) => ({
              id: p.id,
              tipo: 'letra',
              letra: LETRAS[i],
              coordenada: p.coordenada,
            }))}
            imagemWeb={require('../../assets/comparar/mapa.png')}
            style={[styles.mapa, { width: largura, height: largura * PROPORCAO_MAPA }]}
          />
        </>
      ) : (
        <EmptyState mensagem="Adicione postos para comparar." />
      )}

      <ListaModal
        visivel={!!listaAberta}
        titulo={listaAberta?.titulo}
        aviso={listaAberta?.aviso}
        itens={listaAberta?.itens ?? []}
        onSelecionar={listaAberta?.onSelecionar ?? (() => {})}
        onFechar={() => setLista(null)}
      />
    </SearchTemplate>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  botao: {
    alignSelf: 'center',
    width: 220,
    height: 45,
    marginBottom: 23,
    borderRadius: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.verde,
  },
  botaoTexto: {
    fontSize: 13.4,
    fontWeight: '500',
    color: colors.branco,
  },
  pressionado: {
    opacity: 0.8,
  },
  mapa: {
    marginTop: 3,
  },
});
