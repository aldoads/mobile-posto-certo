import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { normalizar } from '../utils/busca';

const CHAVE = '@postocerto:historico';
const LIMITE = 8;

const INICIAL = ['Brasília', 'Terezinha'];

const HistoricoContext = createContext(null);

export function HistoricoProvider({ children }) {
  const [itens, setItens] = useState(INICIAL);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    let ativo = true;
    (async () => {
      try {
        const salvo = await AsyncStorage.getItem(CHAVE);
        if (ativo && salvo !== null) {
          const lista = JSON.parse(salvo);
          if (Array.isArray(lista)) setItens(lista);
        }
      } catch (erro) {
        
      } finally {
        if (ativo) setCarregado(true);
      }
    })();
    return () => {
      ativo = false;
    };
  }, []);

  useEffect(() => {
    if (!carregado) return;
    AsyncStorage.setItem(CHAVE, JSON.stringify(itens)).catch(() => {});
  }, [itens, carregado]);

  // Evita duplicados (ignorando acentos/caixa) e leva o item para o topo.
  const adicionar = useCallback((texto) => {
    const limpo = (texto || '').trim();
    if (!limpo) return;
    setItens((atual) =>
      [limpo, ...atual.filter((i) => normalizar(i) !== normalizar(limpo))].slice(0, LIMITE)
    );
  }, []);

  const remover = useCallback((texto) => {
    setItens((atual) => atual.filter((i) => i !== texto));
  }, []);

  return (
    <HistoricoContext.Provider value={{ itens, adicionar, remover }}>
      {children}
    </HistoricoContext.Provider>
  );
}

export function useHistorico() {
  const contexto = useContext(HistoricoContext);
  if (!contexto) throw new Error('useHistorico deve ser usado dentro de HistoricoProvider');
  return contexto;
}
