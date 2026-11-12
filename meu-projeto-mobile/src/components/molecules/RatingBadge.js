import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

const estrela = require('../../../assets/busca/estrela.png');

export default function RatingBadge({ nota }) {
  return (
    <View style={styles.linha} accessibilityLabel={`Avaliação ${nota.toFixed(1)}`}>
      <Image source={estrela} style={styles.estrela} />
      <Text style={styles.nota}>{nota.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  estrela: {
    width: 13,
    height: 13,
    marginRight: 1,
  },
  nota: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.amarelo,
  },
});
