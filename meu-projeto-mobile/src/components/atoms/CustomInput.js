import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default function CustomInput({ label, placeholder, secureTextEntry, value, onChangeText }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',                  // Ocupa toda a largura disponível do bloco pai
    marginBottom: 16,               // Espaçamento abaixo do input
  },
  label: {
    fontSize: 14,                   // Tamanho do texto do rótulo
    color: '#000000',               // Cor preta para o rótulo (como no Figma)
    marginBottom: 6,                // Espaçamento entre o rótulo e a caixa de texto
    fontWeight: '500',              // Deixa o rótulo levemente em negrito
  },
  input: {
    width: '100%',
    backgroundColor: '#000000',     // Fundo preto igual ao design de login
    color: '#FFFFFF',   
    boxShadow: '0 0 4px 4px rgba(0,0,0,0.25)', // Sombra leve para dar profundidade
    paddingHorizontal: 16,          // Espaçamento interno nas laterais
    paddingVertical: 14,            // Altura interna da caixa de texto
    borderRadius: 5,               // Cantos arredondados suaves
    fontSize: 16,                   // Tamanho do texto que o utilizador digita
  },
});