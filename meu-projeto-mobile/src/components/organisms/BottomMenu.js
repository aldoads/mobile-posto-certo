import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';

// Cada asset do Figma já traz o ícone E o rótulo ("Início", "Busca"...), nos tamanhos originais.
// `rota`: preencher quando a tela existir. Itens sem rota ainda não navegam (telas da equipe).
const ITENS = [
  { id: 'inicio', rotulo: 'Início', imagem: require('../../../assets/busca/menu-inicio.png'), largura: 28, altura: 41, rota: null },
  { id: 'busca', rotulo: 'Busca', imagem: require('../../../assets/busca/menu-busca.png'), largura: 34, altura: 44, rota: '/busca' },
  { id: 'favoritos', rotulo: 'Favoritos', imagem: require('../../../assets/busca/menu-favoritos.png'), largura: 44, altura: 49, rota: null },
  { id: 'comparar', rotulo: 'Comparar', imagem: require('../../../assets/busca/menu-comparar.png'), largura: 52, altura: 47, rota: null },
  { id: 'menu', rotulo: 'Menu', imagem: require('../../../assets/busca/menu-menu.png'), largura: 41, altura: 45, rota: '/menu' },
];

export default function BottomMenu({ ativo }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const navegar = (item) => {
    if (!item.rota || item.id === ativo) return;
    router.navigate(item.rota);
  };

  return (
    <View style={[styles.menu, { paddingBottom: Math.max(insets.bottom, 30) }]}>
      {ITENS.map((item) => {
        const selecionado = item.id === ativo;
        return (
          <Pressable
            key={item.id}
            onPress={() => navegar(item)}
            accessibilityRole="button"
            accessibilityLabel={item.rotulo}
            accessibilityState={{ selected: selecionado }}
            style={styles.item}
          >
            <Image
              source={item.imagem}
              style={{
                width: item.largura,
                height: item.altura,
                tintColor: selecionado ? colors.amarelo : colors.cinzaTrilho,
              }}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 18,
    paddingHorizontal: 12,
    backgroundColor: colors.verde,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: 49,
  },
});
