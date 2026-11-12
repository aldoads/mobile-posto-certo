import { postos } from './postos';

// Dados DEMONSTRATIVOS (não são consultados em tempo real).
// - Posto A e Posto B: valores copiados exatamente do protótipo do Figma (frame COMPARAR).
// - Demais postos: reaproveitados da base da Busca (data/postos.js); lá não há cashback
//   nem número de avaliações, então essas linhas não aparecem no card.
// - Coordenadas: fictícias, ao redor do centro de Patos-PB, só para posicionar o mapa.

export const usuario = {
  endereco: 'Rua Passa Nada, 157', // texto do cabeçalho da HOME no Figma
  coordenada: { latitude: -7.028, longitude: -37.279 },
};

const coordenadas = {
  brasilia: { latitude: -7.0215, longitude: -37.272 },
  bivar: { latitude: -7.025, longitude: -37.283 },
  'santa-terezinha': { latitude: -7.033, longitude: -37.27 },
};

const distanciaKm = (texto) => parseFloat(texto.replace(',', '.'));

export const postosMapa = postos.map((p) => ({
  ...p,
  coordenada: coordenadas[p.id],
  distanciaKm: distanciaKm(p.distancia),
}));

export const postosComparaveis = [
  {
    id: 'posto-a',
    nome: 'Posto A',
    avaliacao: 5.0,
    totalAvaliacoes: 50,
    cashback: 3,
    tempo: '5 min',
    distancia: '2,1 km',
    combustiveis: { 'Gasolina comum': 5.95 },
    coordenada: { latitude: -7.0265, longitude: -37.2835 },
  },
  {
    id: 'posto-b',
    nome: 'Posto B',
    avaliacao: 4.0,
    totalAvaliacoes: 30,
    cashback: 2,
    tempo: '8 min',
    distancia: '2,8 km',
    combustiveis: { 'Gasolina comum': 5.98 },
    coordenada: { latitude: -7.0225, longitude: -37.2785 },
  },
  ...postosMapa,
].map((p) => ({ ...p, distanciaKm: distanciaKm(p.distancia) }));

// Combustíveis disponíveis na base (mesmas chaves de data/postos.js).
export const combustiveis = Object.keys(postos[0].combustiveis);

// "Gasolina comum" -> "Gasolina Comum", como no protótipo.
export const rotuloCombustivel = (nome) => nome.replace(/(^|\s)\S/g, (l) => l.toUpperCase());
