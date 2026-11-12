import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchHeader from '../organisms/SearchHeader';
import BottomMenu from '../organisms/BottomMenu';
import { colors } from '../../theme/colors';
import { APP_MAX_WIDTH, PADDING_HORIZONTAL } from '../../theme/layout';

// Estrutura compartilhada da área de Busca: cabeçalho + conteúdo rolável + menu inferior.
// No Expo Web o app fica limitado a APP_MAX_WIDTH e centralizado, mantendo a aparência mobile.
export default function SearchTemplate({ titulo = 'Busca', onVoltar, children }) {
  return (
    <View style={styles.pagina}>
      <StatusBar style="light" />
      <View style={styles.app}>
        <SearchHeader titulo={titulo} onVoltar={onVoltar} />
        <ScrollView
          style={styles.corpo}
          contentContainerStyle={styles.conteudo}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
        <BottomMenu ativo="busca" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Platform.OS === 'web' ? colors.fundoWeb : colors.branco,
  },
  app: {
    flex: 1,
    width: '100%',
    maxWidth: APP_MAX_WIDTH,
    backgroundColor: colors.branco,
  },
  corpo: {
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 40,
    paddingBottom: 24,
  },
});
