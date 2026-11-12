import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import MenuShortcutCard from '../molecules/MenuShortcutCard';
import { colors } from '../../theme/colors';
import { APP_MAX_WIDTH } from '../../theme/layout';

const ATALHOS = [
  { icon: 'chatbubble-ellipses', label: 'Ajuda e suporte' },
  { icon: 'card', label: 'Dados Cadastrais' },
  { icon: 'location', label: 'Meus endereços' },
  { icon: 'cash', label: 'Criar alerta de preços' },
  { icon: 'ribbon', label: 'Minhas Avaliações' },
];

export default function MenuShortcutCarousel() {
  const scrollRef = useRef(null);
  const offset = useRef(0);
  const { width } = useWindowDimensions();
  const larguraApp = Math.min(width, APP_MAX_WIDTH);
  const larguraScroll = Math.min(280, Math.max(0, larguraApp - 24 - 36));
  const larguraAtalho = larguraScroll / 4;

  const navegarCarrossel = (direcao) => {
    const proximoOffset = Math.max(0, offset.current + direcao * larguraAtalho);
    scrollRef.current?.scrollTo({ x: proximoOffset, animated: true });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navegarCarrossel(-1)}
        accessibilityRole="button"
        accessibilityLabel="Ver atalhos anteriores"
        hitSlop={8}
        style={styles.arrow}
      >
        <Ionicons name="chevron-back" size={17} color={colors.cinzaTexto} />
      </Pressable>
      <ScrollView
        ref={scrollRef}
        style={[styles.scroll, { width: larguraScroll }]}
        horizontal
        onScroll={(event) => {
          offset.current = event.nativeEvent.contentOffset.x;
        }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      >
        {ATALHOS.map((atalho) => (
          <MenuShortcutCard
            key={atalho.label}
            icon={atalho.icon}
            label={atalho.label}
            width={larguraAtalho - 6}
          />
        ))}
      </ScrollView>
      <Pressable
        onPress={() => navegarCarrossel(1)}
        accessibilityRole="button"
        accessibilityLabel="Ver mais atalhos"
        hitSlop={8}
        style={styles.arrow}
      >
        <Ionicons name="chevron-forward" size={17} color={colors.cinzaTexto} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 87,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  scroll: {
    flexGrow: 0,
    flexShrink: 1,
  },
  arrow: {
    width: 18,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    alignItems: 'flex-start',
  },
});
