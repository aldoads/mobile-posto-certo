import React from 'react';
import { StyleSheet, View } from 'react-native';
import StationCard from './StationCard';
import { PADDING_HORIZONTAL } from '../../theme/layout';

const COLUNAS = 3;
const ESPACO = 20;

// Lista de resultados em grade de 3 colunas (como no Figma). A largura do card é calculada
// a partir da largura útil do app, então se adapta a diferentes celulares.
export default function StationResults({ itens, larguraApp, onPressItem }) {
  const larguraUtil = larguraApp - PADDING_HORIZONTAL * 2;
  const larguraCard = Math.floor((larguraUtil - ESPACO * (COLUNAS - 1)) / COLUNAS);

  return (
    <View style={styles.grade}>
      {itens.map((item) => (
        <StationCard
          key={item.posto.id}
          posto={item.posto}
          preco={item.preco}
          largura={larguraCard}
          onPress={() => onPressItem(item.posto)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: ESPACO,
    rowGap: 28,
  },
});
