import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

// Caixa de seleção (dropdown) do COMPARAR: mostra o valor atual e abre uma lista ao tocar.
export default function Seletor({ valor, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Selecionar: ${valor}`}
      style={({ pressed }) => [styles.caixa, style, pressed && styles.pressionado]}
    >
      <Text style={styles.texto} numberOfLines={1}>
        {valor}
      </Text>
      <Ionicons name="chevron-down" size={14} color={colors.cinzaSeta} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  caixa: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    paddingLeft: 13,
    paddingRight: 12,
    borderRadius: 4,
    backgroundColor: colors.branco,
    boxShadow: '0 0 4px 2px rgba(0,0,0,0.25)',
  },
  texto: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: colors.preto,
  },
  pressionado: {
    opacity: 0.7,
  },
});
