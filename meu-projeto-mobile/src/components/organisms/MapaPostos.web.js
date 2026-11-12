import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// react-native-maps não roda no navegador: no Expo Web mostramos a imagem do mapa
// exportada do Figma, para a equipe continuar testando o layout no web.
export default function MapaPostos({ imagemWeb, style }) {
  return (
    <View style={[styles.moldura, style]}>
      <Image source={imagemWeb} style={StyleSheet.absoluteFill} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  moldura: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});
