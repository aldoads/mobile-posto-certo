// src/components/molecules/AddressCard.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/theme';

export default function AddressCard({ title, address, onPress }) {
  return (
    <TouchableOpacity style={styles.addressCard} onPress={onPress}>
      <Text style={styles.addressCardText}>
        <Text style={styles.addressCardTitle}>{title}</Text>
        {'\n'}
        <Text style={address ? styles.addressCardTextNormal : styles.addressCardPlaceholder}>
          {address || 'Nenhum endereço cadastrado'}
        </Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addressCard: {
    width: '100%',               // <-- Responsivo: ocupa 100% da largura do container pai
    height: 100,                 // Mantém a altura exata do Figma
    borderRadius: 6,             // Raio do canto exato do Figma (6)
    backgroundColor: Colors.backgroundWhite,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 16,
    // Sombra projetada do Figma
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'flex-start',
  },
  addressCardText: {
    fontSize: 13,
    color: Colors.textDark,
    lineHeight: 18,
  },
  addressCardTitle: {
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  addressCardTextNormal: {
    fontSize: 13,
    color: Colors.textDark,
    lineHeight: 18,
  },
  addressCardPlaceholder: {
    fontSize: 13,
    color: Colors.textGray,
  },
});