import React from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomMenu from '../components/organisms/BottomMenu';
import MenuProfileHeader from '../components/organisms/MenuProfileHeader';
import MenuSection from '../components/organisms/MenuSection';
import MenuShortcutCarousel from '../components/organisms/MenuShortcutCarousel';
import { styles } from './MenuUsuarioScreen.styles';

const PREFERENCIAS = [
  { icon: 'notifications', label: 'Notificações' },
  { icon: 'call', label: 'Mudar número' },
  { icon: 'lock-closed', label: 'Privacidade' },
];

const SOBRE = [
  { icon: 'business', label: 'Sugerir Posto' },
  { icon: 'star', label: 'Avalie o app', trailing: 'external' },
  { icon: 'share-social', label: 'Compartilhar app', trailing: 'external' },
  { icon: 'people', label: 'Seja um parceiro', trailing: 'external' },
  { icon: 'log-out', label: 'Sair do app', trailing: 'none', marginTop: 14 },
];

export default function MenuUsuarioScreen() {
  return (
    <View style={styles.page}>
      <StatusBar style="light" />
      <View style={styles.app}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <MenuProfileHeader />
          <MenuShortcutCarousel />
          <View style={styles.sections}>
            <MenuSection title="Configurações e preferências" items={PREFERENCIAS} />
            <MenuSection title="Sobre o PostoCerto" items={SOBRE} marginTop={14} />
          </View>
        </ScrollView>
        <BottomMenu ativo="menu" />
      </View>
    </View>
  );
}