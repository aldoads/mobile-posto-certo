import React from 'react';
import { useRouter } from 'expo-router';
import SearchTemplate from '../components/templates/SearchTemplate';
import EmptyState from '../components/molecules/EmptyState';

// Rota reservada para telas do Figma que ainda não foram implementadas pela equipe.
export default function EmConstrucaoScreen({ titulo }) {
  const router = useRouter();
  const voltar = () => (router.canGoBack() ? router.back() : router.replace('/home'));

  return (
    <SearchTemplate titulo={titulo} ativo={null} onVoltar={voltar}>
      <EmptyState mensagem="Tela em desenvolvimento." />
    </SearchTemplate>
  );
}
