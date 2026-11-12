import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

// Seletor segmentado (Posto | Combustível). A opção selecionada vira uma "pílula" verde
// que ocupa ~57% da largura, como no Figma, sem posicionamento absoluto.
export default function SegmentedControl({ opcoes, valor, onChange }) {
  return (
    <View style={styles.trilho}>
      {opcoes.map((opcao) => {
        const selecionada = opcao.valor === valor;
        return (
          <Pressable
            key={opcao.valor}
            onPress={() => onChange(opcao.valor)}
            accessibilityRole="button"
            accessibilityState={{ selected: selecionada }}
            style={[styles.opcao, selecionada && styles.selecionada]}
          >
            <Text style={[styles.rotulo, selecionada ? styles.rotuloSelecionado : styles.rotuloNormal]}>
              {opcao.rotulo}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  trilho: {
    flexDirection: 'row',
    height: 39,
    borderRadius: 20,
    backgroundColor: colors.cinzaTrilho,
  },
  opcao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  selecionada: {
    flex: 1.32,
    backgroundColor: colors.verde,
  },
  rotulo: {
    fontSize: 16,
    fontWeight: '700',
  },
  rotuloSelecionado: {
    color: colors.branco,
  },
  rotuloNormal: {
    color: colors.cinzaTexto,
  },
});
