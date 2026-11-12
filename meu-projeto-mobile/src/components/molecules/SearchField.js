import React from 'react';
import { Image, Platform, StyleSheet, TextInput, View } from 'react-native';
import IconButton from '../atoms/IconButton';
import { colors } from '../../theme/colors';

const lupa = require('../../../assets/busca/icone-lupa.png');
const limpar = require('../../../assets/busca/icone-limpar.png');

// Campo de busca do Figma: lupa à esquerda, botão de limpar sempre visível à direita.
export default function SearchField({ value, onChangeText, onSubmit, onClear, autoFocus }) {
  return (
    <View style={styles.campo}>
      <Image source={lupa} style={styles.lupa} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        placeholder="Busque postos e/ou combustíveis"
        placeholderTextColor={colors.cinzaTexto}
        returnKeyType="search"
        autoCorrect={false}
        autoFocus={autoFocus}
        accessibilityLabel="Campo de busca"
      />
      <IconButton onPress={onClear} label="Limpar busca">
        <Image source={limpar} style={styles.limpar} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 12,
    backgroundColor: colors.branco,
    borderWidth: 1,
    borderColor: colors.cinzaBorda,
    borderRadius: 5,
    boxShadow: `0 0 4px 2px ${colors.sombra}`,
  },
  lupa: {
    width: 17,
    height: 17,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: colors.preto,
    ...Platform.select({ web: { outlineStyle: 'none' } }),
  },
  limpar: {
    width: 20,
    height: 20,
  },
});
