import { useWindowDimensions } from 'react-native';

// Largura máxima do app. No celular a tela inteira é usada; no Expo Web o conteúdo
// fica com aparência mobile, centralizado, sem virar um layout desktop.
export const APP_MAX_WIDTH = 480;
export const PADDING_HORIZONTAL = 28;

export function useLarguraApp() {
  const { width } = useWindowDimensions();
  return Math.min(width, APP_MAX_WIDTH);
}
