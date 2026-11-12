import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';

const contorno = require('../../../assets/busca/tile-contorno.png');
const gota = require('../../../assets/busca/gota-amarela.png');

// Proporções dos assets do Figma em relação ao tile de 100 px.
const PROPORCAO_IMAGEM_CARTAO = 1.2; // logo-ale-cartao.png: 120 px com o cartão de 100 px + margem de sombra
const PROPORCAO_CONTORNO = 0.74; // tile-contorno.png: 74 px
const PROPORCAO_GOTA_LARGURA = 0.54; // gota-amarela.png: 54 x 67 px
const PROPORCAO_GOTA_ALTURA = 0.67;

// Tile do logotipo do posto. Três variações, todas vindas dos assets exportados:
// - cartao: a imagem já traz o cartão branco e a sombra (ALE)
// - logo: logotipo solto, que recebe o cartão branco em código (FAN)
// - gota: tile vermelho com contorno branco e gota amarela (Santa Terezinha)
export default function PostoLogo({ logo, tamanho }) {
  if (logo.tipo === 'cartao') {
    return (
      <View style={[styles.centro, { width: tamanho, height: tamanho }]}>
        <Image
          source={logo.imagem}
          style={{ width: tamanho * PROPORCAO_IMAGEM_CARTAO, height: tamanho * PROPORCAO_IMAGEM_CARTAO }}
          resizeMode="contain"
        />
      </View>
    );
  }

  const raio = tamanho * 0.1;

  if (logo.tipo === 'logo') {
    return (
      <View style={[styles.centro, styles.sombra, { width: tamanho, height: tamanho, borderRadius: raio, backgroundColor: colors.branco }]}>
        <Image source={logo.imagem} style={styles.logoSolto} resizeMode="contain" />
      </View>
    );
  }

  return (
    <View style={[styles.centro, styles.sombra, { width: tamanho, height: tamanho, borderRadius: raio, backgroundColor: colors.vermelhoTile }]}>
      <Image source={contorno} style={{ width: tamanho * PROPORCAO_CONTORNO, height: tamanho * PROPORCAO_CONTORNO }} />
      <View style={[StyleSheet.absoluteFill, styles.centro]}>
        <Image
          source={gota}
          style={{ width: tamanho * PROPORCAO_GOTA_LARGURA, height: tamanho * PROPORCAO_GOTA_ALTURA }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sombra: {
    boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
  },
  logoSolto: {
    width: '88%',
    aspectRatio: 89 / 41, // logo-fan.png: 89 x 41 px
  },
});
