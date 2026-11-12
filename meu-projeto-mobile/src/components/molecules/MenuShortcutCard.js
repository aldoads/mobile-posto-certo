import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';

export default function MenuShortcutCard({ icon, label, width }) {
  return (
    <View style={[styles.container, { width }]} accessibilityLabel={label}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={21} color={colors.verde} />
      </View>
      <Text style={styles.label} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 3,
  },
  iconBox: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.cinzaTrilho,
    borderRadius: 3,
    backgroundColor: colors.branco,
  },
  label: {
    minHeight: 22,
    marginTop: 4,
    fontSize: 8,
    lineHeight: 10,
    color: colors.preto,
    textAlign: 'center',
  },
});
