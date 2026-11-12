import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuOptionRow from '../molecules/MenuOptionRow';
import { colors } from '../../theme/colors';

export default function MenuSection({ title, items, marginTop = 0 }) {
  return (
    <View style={[styles.section, marginTop > 0 && { marginTop }]}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {items.map((item) => (
          <MenuOptionRow
            key={item.label}
            icon={item.icon}
            label={item.label}
            trailing={item.trailing}
            marginTop={item.marginTop}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
  },
  title: {
    marginBottom: 5,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.verde,
  },
});
