import React from 'react';
import { Stack } from 'expo-router';
import { HistoricoProvider } from '../context/HistoricoContext';

// Layout raiz: navegação em pilha sem cabeçalho nativo (cada tela desenha o seu)
// e o histórico de busca compartilhado entre as telas.
export default function RootLayout() {
  return (
    <HistoricoProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </HistoricoProvider>
  );
}
