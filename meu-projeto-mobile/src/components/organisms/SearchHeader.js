import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from '../atoms/IconButton';
import { colors } from '../../theme/colors';
import { PADDING_HORIZONTAL } from '../../theme/layout';

const voltar = require('../../../assets/busca/icone-voltar.png');

// Cabeçalho verde com seta de voltar e título centralizado.
// O topo respeita a área segura (a barra de status real do aparelho cobre o relógio/bateria).
export default function SearchHeader({ titulo, onVoltar }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.cabecalho, { paddingTop: insets.top }]}>
      <View style={styles.linha}>
        <View style={styles.lateral}>
          <IconButton onPress={onVoltar} label="Voltar">
            <Image source={voltar} style={styles.seta} />
          </IconButton>
        </View>
        <Text style={styles.titulo} accessibilityRole="header">
          {titulo}
        </Text>
        <View style={styles.lateral} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: colors.verde,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  lateral: {
    width: 40,
  },
  seta: {
    width: 13,
    height: 23,
  },
  titulo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: colors.branco,
  },
});
