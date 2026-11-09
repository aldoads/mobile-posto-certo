import React from 'react';
import { TextInput, StyleSheet, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const guidelineBaseWidth = 428;
const scale = (size) => (width / guidelineBaseWidth) * size;

export default function CustomInput({ label, placeholder, secureTextEntry, value, onChangeText }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', // Ocupa 100% da largura do bloco pai
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#FFFFFF', // Mudamos para branco para destacar no fundo escuro
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    fontSize: 16,
  },
});