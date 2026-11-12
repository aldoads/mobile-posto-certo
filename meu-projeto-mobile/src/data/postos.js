// Base LOCAL de dados DEMONSTRATIVOS (não são preços consultados em tempo real).
// Os valores de "Gasolina comum" vêm do protótipo do Figma; os demais combustíveis
// são ilustrativos, apenas para exercitar o filtro "Combustível".
export const postos = [
  {
    id: 'brasilia',
    nome: 'Posto Brasília',
    nomeCurto: 'Brasília',
    logo: { tipo: 'cartao', imagem: require('../../assets/busca/logo-ale-cartao.png') },
    tempo: '8 min',
    distancia: '2,8 km',
    via: 'via BR-361',
    trajeto: 'Trajeto mais rápido',
    avaliacao: 5.0,
    combustiveis: {
      'Gasolina comum': 5.95,
      'Gasolina aditivada': 6.19,
      Etanol: 4.09,
      'Diesel S10': 6.29,
    },
  },
  {
    id: 'bivar',
    nome: 'Posto Bivar',
    nomeCurto: 'Bivar',
    logo: { tipo: 'logo', imagem: require('../../assets/busca/logo-fan.png') },
    tempo: '5 min',
    distancia: '2,1 km',
    via: null,
    trajeto: null,
    avaliacao: 5.0,
    combustiveis: {
      'Gasolina comum': 5.97,
      'Gasolina aditivada': 6.21,
      Etanol: 4.12,
      'Diesel S10': 6.27,
    },
  },
  {
    id: 'santa-terezinha',
    nome: 'Posto Santa Terezinha',
    nomeCurto: 'Terezinha',
    logo: { tipo: 'gota' },
    tempo: '19 min',
    distancia: '18,5 km',
    via: null,
    trajeto: null,
    avaliacao: 5.0,
    combustiveis: {
      'Gasolina comum': 5.98,
      'Gasolina aditivada': 6.24,
      Etanol: 4.15,
      'Diesel S10': 6.31,
    },
  },
];
