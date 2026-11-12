import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export default function MenuOptionRow({ icon, label, trailing = 'chevron', marginTop = 0 }) {
  return (
    <View
      style={[styles.row, marginTop > 0 && { marginTop }]}
      accessibilityLabel={label}
    >
      <Ionicons name={icon} size={16} color={colors.cinzaTexto} />
      <Text style={styles.label}>{label}</Text>
      {trailing === 'external' ? (
        <Ionicons name="open-outline" size={16} color={colors.cinzaTexto} />
      ) : trailing === 'chevron' ? (
        <Ionicons name="chevron-forward" size={17} color={colors.cinzaTexto} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    marginLeft: 5,
    fontSize: 12,
    color: colors.cinzaTexto,
  },
});
