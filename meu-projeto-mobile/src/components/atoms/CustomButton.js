import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#1e3932',
    paddingVertical: 30,            // Altura interna do botão (espaço em cima embaixo)
    borderRadius: 5,               // Bordas arredondadas suaves
    alignItems: 'center',           // Centraliza o texto horizontalmente
    justifyContent: 'center', // Centraliza o textoverticalmente
    boxShadow: '0 0 4px 4px rgba(0,0,0,0.25)', // Sombra leve para dar profundidade
    marginTop: 12,
    marginBottom: 6,               // Espaçamento abaixo do botão
    
  },
  text: {
    color: '#FFFFFF',               // Texto na cor branca
    fontSize: 16,                   // Tamanho da letra
    fontWeight: 'semibold',             // Letra em negrito
    letterSpacing: 1,               // Espaçamento leve entre as letras
  },
});