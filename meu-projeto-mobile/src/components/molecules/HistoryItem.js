import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import IconButton from '../atoms/IconButton';
import { colors } from '../../theme/colors';

// Linha do histórico: relógio amarelo + texto (toque para pesquisar de novo) + X para remover.
// O relógio e o X não existem na pasta de assets do Figma, por isso usam @expo/vector-icons.
export default function HistoryItem({ texto, onPress, onRemove }) {
  return (
    <View style={styles.linha}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Pesquisar ${texto}`}
        style={styles.conteudo}
      >
        <MaterialIcons name="history" size={20} color={colors.amarelo} />
        <Text style={styles.texto} numberOfLines={1}>
          {texto}
        </Text>
      </Pressable>
      <IconButton onPress={onRemove} label={`Remover ${texto} do histórico`}>
        <Ionicons name="close" size={20} color={colors.cinzaTexto} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 40,
  },
  texto: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: colors.cinzaTexto,
  },
});
