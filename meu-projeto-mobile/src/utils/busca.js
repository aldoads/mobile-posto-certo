import { postos } from '../data/postos';

export const FILTRO_POSTO = 'posto';
export const FILTRO_COMBUSTIVEL = 'combustivel';

// Ignora maiúsculas, acentos e espaços nas pontas ("Brasilia" encontra "Brasília").
export function normalizar(texto = '') {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function buscarPostos(termo) {
  const q = normalizar(termo);
  if (!q) return [];
  return postos.filter((p) => normalizar(p.nome).includes(q));
}

// Retorna um item por posto que possua o combustível, já com o preço, do mais barato ao mais caro.
export function buscarCombustiveis(termo) {
  const q = normalizar(termo);
  if (!q) return [];
  return postos
    .flatMap((posto) => {
      const combustivel = Object.keys(posto.combustiveis).find((nome) => normalizar(nome).includes(q));
      return combustivel ? [{ posto, combustivel, preco: posto.combustiveis[combustivel] }] : [];
    })
    .sort((a, b) => a.preco - b.preco);
}

// Escolhe o filtro que traz resultados para o termo (ex.: "Brasília" -> posto; "Gasolina comum" -> combustível).
export function filtroInicial(termo) {
  if (buscarPostos(termo).length > 0) return FILTRO_POSTO;
  if (buscarCombustiveis(termo).length > 0) return FILTRO_COMBUSTIVEL;
  return FILTRO_POSTO;
}

export function formatarPreco(valor) {
  return `R$${valor.toFixed(2).replace('.', ',')}`;
}
