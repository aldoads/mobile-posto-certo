import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from '../atoms/IconButton';
import { colors } from '../../theme/colors';

const sino = require('../../../assets/home/icone-sino.png');

// Cabeçalho branco da HOME: endereço atual à esquerda e sino de alertas com contador.
export default function HomeHeader({ endereco, totalAlertas, onPressAlertas }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.cabecalho, { paddingTop: insets.top }]}>
      <View style={styles.linha}>
        <View style={styles.endereco}>
          <Ionicons name="location-sharp" size={23} color={colors.verde} />
          <Text style={styles.enderecoTexto} numberOfLines={1}>
            {endereco}
          </Text>
        </View>
        <IconButton onPress={onPressAlertas} label={`Alertas: ${totalAlertas}`}>
          <Image source={sino} style={styles.sino} />
          {totalAlertas > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeTexto}>{totalAlertas}</Text>
            </View>
          ) : null}
        </IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: colors.branco,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    paddingLeft: 12,
    paddingRight: 14,
  },
  endereco: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexShrink: 1,
  },
  enderecoTexto: {
    marginLeft: 4,
    marginBottom: 2,
    fontSize: 10,
    fontWeight: '700',
    color: colors.verde,
  },
  sino: {
    width: 35,
    height: 38,
  },
  badge: {
    position: 'absolute',
    top: 3,
    right: -1,
    minWidth: 13,
    height: 13,
    borderRadius: 6.5,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.vermelho,
  },
  badgeTexto: {
    fontSize: 8.5,
    fontWeight: '500',
    color: colors.branco,
  },
});
