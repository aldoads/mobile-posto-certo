import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PostoLogo from '../atoms/PostoLogo';
import RatingBadge from '../molecules/RatingBadge';
import { colors } from '../../theme/colors';
import { formatarPreco } from '../../utils/busca';

// Proporções medidas no Figma (tela de 428 px): card de 110 px, tile de 102 px,
// com o tile sobrepondo ~metade do topo do card.
const PROPORCAO_TILE = 0.927;
const PROPORCAO_SOBREPOSICAO = 0.51;

// Card de posto. Sem `preco` (filtro Posto) mostra via/trajeto; com `preco` (filtro Combustível) mostra o valor.
export default function StationCard({ posto, preco, largura, onPress }) {
  const tile = largura * PROPORCAO_TILE;
  const sobreposicao = tile * PROPORCAO_SOBREPOSICAO;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={posto.nome}
      style={[styles.container, { width: largura }]}
    >
      <View style={styles.logo}>
        <PostoLogo logo={posto.logo} tamanho={tile} />
      </View>

      <View style={[styles.corpo, { marginTop: -sobreposicao, paddingTop: sobreposicao + 4 }]}>
        <View style={styles.info}>
          <View style={styles.nomeBloco}>
            <Text style={styles.nome} numberOfLines={2}>
              {posto.nome}
            </Text>
          </View>
          <Text style={styles.secundario}>
            {posto.tempo} ({posto.distancia})
          </Text>
          {preco !== undefined ? (
            <Text style={styles.preco}>{formatarPreco(preco)}</Text>
          ) : (
            <>
              {posto.via ? <Text style={styles.secundario}>{posto.via}</Text> : null}
              {posto.trajeto ? <Text style={styles.secundario}>{posto.trajeto}</Text> : null}
            </>
          )}
        </View>
        <RatingBadge nota={posto.avaliacao} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  logo: {
    alignItems: 'center',
    zIndex: 2, // o tile fica por cima da borda do card
    elevation: 2,
  },
  corpo: {
    minHeight: 159,
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: colors.cinzaTrilho,
    borderRadius: 8,
    backgroundColor: colors.branco,
  },
  info: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  nomeBloco: {
    height: 30,
    marginBottom: 5,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '700',
    color: colors.preto,
    textAlign: 'center',
  },
  secundario: {
    fontSize: 10,
    lineHeight: 14,
    color: colors.cinzaTexto,
    textAlign: 'center',
  },
  preco: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 16,
    color: colors.verde,
  },
});
