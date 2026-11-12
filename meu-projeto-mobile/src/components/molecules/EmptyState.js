import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

// Estado vazio da busca, com as mesmas cores/tipografia secundárias do protótipo.
export default function EmptyState({ mensagem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 16,
  },
  texto: {
    fontSize: 14,
    color: colors.cinzaTexto,
    textAlign: 'center',
  },
});
