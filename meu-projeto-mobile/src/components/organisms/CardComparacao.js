import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { formatarPreco } from '../../utils/busca';

const faixa = require('../../../assets/comparar/faixa-melhor.png');
const estrela = require('../../../assets/busca/estrela.png');

// Card de um posto na comparação. `melhor` = menor preço (verde + faixa); senão o preço fica vermelho.
// Linhas sem dado (cashback / nº de avaliações) não são exibidas.
export default function CardComparacao({ posto, combustivel, preco, melhor, largura }) {
  const corPreco = preco === undefined ? colors.cinzaTexto : melhor ? colors.verdePreco : colors.vermelho;
  // 35 px no card de 177 px do Figma; diminui junto com o card em telas menores.
  const tamanhoPreco = Math.min(35, largura * 0.19);

  return (
    <View style={[styles.card, { width: largura }]}>
      {melhor ? <Image source={faixa} style={styles.faixa} accessibilityLabel="Melhor preço" /> : null}

      <Text style={styles.nome} numberOfLines={1}>
        {posto.nome}
      </Text>
      <Text style={styles.combustivel} numberOfLines={1}>
        {combustivel}
      </Text>
      <Text
        style={[
          styles.preco,
          { color: corPreco, fontSize: tamanhoPreco, lineHeight: tamanhoPreco * 1.3 },
          preco === undefined && styles.semPreco,
        ]}
        numberOfLines={1}
      >
        {preco === undefined ? 'Sem preço' : formatarPreco(preco).replace('R$', 'R$ ')}
      </Text>

      <View style={styles.centro}>
        <View style={styles.avaliacao}>
          <Text style={styles.nota}>{posto.avaliacao.toFixed(1)}</Text>
          {[1, 2, 3, 4, 5].map((n) => (
            <Image
              key={n}
              source={estrela}
              style={[styles.estrela, n > Math.round(posto.avaliacao) && styles.estrelaVazia]}
            />
          ))}
        </View>
        {posto.totalAvaliacoes ? (
          <Text style={styles.totalAvaliacoes}>{posto.totalAvaliacoes} Avaliações</Text>
        ) : null}
      </View>

      <View style={styles.divisor} />

      <View style={styles.centro}>
        {posto.cashback ? (
          <View style={styles.info}>
            <Ionicons name="gift" size={12} color={colors.verde} style={styles.icone} />
            <Text style={styles.infoTexto}>{posto.cashback}% de cashback</Text>
          </View>
        ) : null}
        <View style={styles.info}>
          <Ionicons name="location-sharp" size={12} color={colors.verde} style={styles.icone} />
          <Text style={styles.infoTexto}>
            {posto.tempo} ({posto.distancia})
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 228,
    paddingTop: 30,
    paddingHorizontal: 12,
    paddingBottom: 14,
    borderRadius: 6,
    backgroundColor: colors.branco,
    boxShadow: '0 0 4px 2px rgba(0,0,0,0.25)',
  },
  faixa: {
    position: 'absolute',
    top: 1,
    left: 1,
    width: 45,
    height: 45,
  },
  nome: {
    paddingLeft: 8,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: colors.verde,
  },
  combustivel: {
    paddingLeft: 8,
    marginTop: 4,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.verde,
  },
  preco: {
    paddingLeft: 8,
    fontWeight: '700',
  },
  semPreco: {
    fontSize: 20,
  },
  centro: {
    alignItems: 'center',
  },
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  nota: {
    marginRight: 6,
    fontSize: 13.5,
    fontWeight: '700',
    color: colors.amarelo,
  },
  estrela: {
    width: 12,
    height: 12,
    marginHorizontal: 1,
  },
  estrelaVazia: {
    tintColor: colors.cinzaTrilho,
  },
  totalAvaliacoes: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '500',
    color: colors.cinzaTexto,
  },
  divisor: {
    height: 1,
    marginVertical: 8,
    backgroundColor: colors.cinzaTexto,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  icone: {
    marginRight: 5,
  },
  infoTexto: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.verde,
  },
});
