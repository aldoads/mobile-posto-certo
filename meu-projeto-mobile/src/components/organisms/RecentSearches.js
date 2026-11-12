import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HistoryItem from '../molecules/HistoryItem';
import { colors } from '../../theme/colors';

// Seção "Visualizados recentemente:". Some quando o histórico fica vazio.
export default function RecentSearches({ itens, onSelect, onRemove }) {
  if (itens.length === 0) return null;

  return (
    <View style={styles.secao}>
      <Text style={styles.titulo}>Visualizados recentemente:</Text>
      <View style={styles.lista}>
        {itens.map((texto) => (
          <HistoryItem
            key={texto}
            texto={texto}
            onPress={() => onSelect(texto)}
            onRemove={() => onRemove(texto)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  secao: {
    marginTop: 32,
  },
  titulo: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.verde,
  },
  lista: {
    marginTop: 6,
  },
});
