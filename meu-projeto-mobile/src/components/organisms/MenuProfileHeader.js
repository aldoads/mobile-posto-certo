import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export default function MenuProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.greenBand} />
      <View style={styles.profile}>
        <View style={styles.avatar} accessibilityLabel="Foto do usuário">
          <Ionicons name="camera-outline" size={23} color={colors.cinzaTexto} />
          <View style={styles.addBadge}>
            <Ionicons name="add" size={12} color={colors.branco} />
          </View>
        </View>
        <Text style={styles.name}>Nome do Usuário</Text>
        <Text style={styles.phone}>+55 83 1234-5467</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 201,
  },
  greenBand: {
    height: 128,
    backgroundColor: colors.verde,
  },
  profile: {
    position: 'absolute',
    top: 128,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    paddingTop: 34,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.branco,
  },
  avatar: {
    position: 'absolute',
    top: -57,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: colors.branco,
    boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
  },
  addBadge: {
    position: 'absolute',
    top: 25,
    right: 23,
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: colors.cinzaTexto,
  },
  name: {
    fontSize: 14,
    lineHeight: 18,
    color: '#777777',
  },
  phone: {
    fontSize: 10,
    lineHeight: 13,
    color: colors.cinzaTexto,
  },
});
