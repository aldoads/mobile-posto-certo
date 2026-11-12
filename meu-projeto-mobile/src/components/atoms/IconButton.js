import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

// Área de toque para ícones (voltar, limpar, remover). Mantém o ícone no tamanho do Figma
// e amplia só a região clicável.
export default function IconButton({ onPress, label, children, style }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={10}
      style={({ pressed }) => [styles.base, style, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
});
