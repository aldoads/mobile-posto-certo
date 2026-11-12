// src/screens/LocationScreen.styles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,  // Espaçamento superior exato igual ao Figma
    paddingBottom: 40,
    justifyContent: 'space-between', // Mantém o conteúdo no topo e o rodapé embaixo
  },
  contentContainer: {
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 80, // Ajuste ideal para o respiro de topo sem exageros
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textGray,
    textAlign: 'center',
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: Colors.backgroundWhite,
    marginBottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textDark,
    outlineStyle: 'none', // Remove a borda padrão de foco ao clicar na Web
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',   // Alinha os itens pelo topo do bloco
    justifyContent: 'center',    // Mantém o bloco inteiro centralizado na horizontal da tela
    marginBottom: 50,
    paddingVertical: 4,
    width: '100%',
  },
  locationPinIcon: {
    marginRight: 12,
    marginTop: 2,               // Ajuste fino para alinhar perfeitamente com a altura da letra do título
  },
  textWrapper: {
    alignItems: 'flex-start',
  },
  currentLocationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  currentLocationSubtitle: {
    fontSize: 12,
    color: Colors.textGray,
    lineHeight: 16,
  },
  addressCard: {
    borderWidth: 1.5,
    borderColor: Colors.borderLight,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 12,          // Reduz o espaço de topo interno do card
    paddingBottom: 12,
    height: 140, 
    backgroundColor: Colors.backgroundWhite,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'flex-start',
  },
  addressCardText: {
    fontSize: 13,
    color: Colors.textDark,
    lineHeight: 18,
  },
  addressCardPlaceholder: {
    fontSize: 13,
    color: Colors.textGray,
  },
  addressCardTitle: {
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  footerAction: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  footerActionText: {
    fontSize: 13,
    color: Colors.textGray,
  },
  footerActionHighlight: {
    fontSize: 15, // Fonte um pouco maior que o restante
    fontWeight: 'bold', // Negrito
    color: Colors.primary, // Cor primária (verde escuro)
  },
  
});