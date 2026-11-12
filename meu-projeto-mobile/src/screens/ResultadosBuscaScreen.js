import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import SearchTemplate from '../components/templates/SearchTemplate';
import SearchField from '../components/molecules/SearchField';
import SegmentedControl from '../components/molecules/SegmentedControl';
import EmptyState from '../components/molecules/EmptyState';
import StationResults from '../components/organisms/StationResults';
import { useHistorico } from '../context/HistoricoContext';
import { useLarguraApp } from '../theme/layout';
import {
  FILTRO_COMBUSTIVEL,
  FILTRO_POSTO,
  buscarCombustiveis,
  buscarPostos,
  filtroInicial,
} from '../utils/busca';

const OPCOES = [
  { valor: FILTRO_POSTO, rotulo: 'Posto' },
  { valor: FILTRO_COMBUSTIVEL, rotulo: 'Combustível' },
];

// Resultados (BUSCA 3.png e BUSCA 4.png): mesmo layout, muda o filtro selecionado.
export default function ResultadosBuscaScreen() {
  const router = useRouter();
  const larguraApp = useLarguraApp();
  const { adicionar } = useHistorico();
  const params = useLocalSearchParams();
  const termoParam = Array.isArray(params.termo) ? params.termo[0] : params.termo;

  const [termo, setTermo] = useState(termoParam ?? '');
  const [filtro, setFiltro] = useState(() => filtroInicial(termoParam ?? ''));

  const itens = useMemo(() => {
    if (filtro === FILTRO_POSTO) {
      return buscarPostos(termo).map((posto) => ({ posto }));
    }
    return buscarCombustiveis(termo).map(({ posto, preco }) => ({ posto, preco }));
  }, [termo, filtro]);

  const pesquisar = () => {
    const limpo = termo.trim();
    if (!limpo) return;
    adicionar(limpo);
    setFiltro(filtroInicial(limpo));
  };

  const voltar = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/busca');
  };

  const termoLimpo = termo.trim();
  const mensagemVazia = !termoLimpo
    ? 'Digite o nome de um posto ou de um combustível.'
    : filtro === FILTRO_POSTO
      ? `Nenhum posto encontrado para “${termoLimpo}”.`
      : `Nenhum combustível encontrado para “${termoLimpo}”.`;

  return (
    <SearchTemplate onVoltar={voltar}>
      <SearchField value={termo} onChangeText={setTermo} onSubmit={pesquisar} onClear={() => setTermo('')} />

      <View style={styles.filtro}>
        <SegmentedControl opcoes={OPCOES} valor={filtro} onChange={setFiltro} />
      </View>

      <View style={styles.resultados}>
        {itens.length > 0 ? (
          <StationResults
            itens={itens}
            larguraApp={larguraApp}
            onPressItem={(posto) => adicionar(posto.nomeCurto)}
          />
        ) : (
          <EmptyState mensagem={mensagemVazia} />
        )}
      </View>
    </SearchTemplate>
  );
}

const styles = StyleSheet.create({
  filtro: {
    marginTop: 41,
  },
  resultados: {
    marginTop: 43,
  },
});
