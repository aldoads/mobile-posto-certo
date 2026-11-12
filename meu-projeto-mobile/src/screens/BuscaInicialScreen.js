import React, { useCallback, useState } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import SearchTemplate from '../components/templates/SearchTemplate';
import SearchField from '../components/molecules/SearchField';
import RecentSearches from '../components/organisms/RecentSearches';
import { useHistorico } from '../context/HistoricoContext';

// Busca inicial (BUSCA 2.png): campo vazio + histórico "Visualizados recentemente".
export default function BuscaInicialScreen() {
  const router = useRouter();
  const { itens, adicionar, remover } = useHistorico();
  const [termo, setTermo] = useState('');

  // Ao voltar dos resultados o campo reaparece vazio, como no estado inicial do Figma.
  useFocusEffect(
    useCallback(() => {
      setTermo('');
    }, [])
  );

  const abrirResultados = (texto) => {
    const limpo = texto.trim();
    if (!limpo) return;
    adicionar(limpo);
    router.push({ pathname: '/busca/resultados', params: { termo: limpo } });
  };

  const voltar = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  return (
    <SearchTemplate onVoltar={voltar}>
      <SearchField
        value={termo}
        onChangeText={setTermo}
        onSubmit={() => abrirResultados(termo)}
        onClear={() => setTermo('')}
      />
      <RecentSearches itens={itens} onSelect={abrirResultados} onRemove={remover} />
    </SearchTemplate>
  );
}
