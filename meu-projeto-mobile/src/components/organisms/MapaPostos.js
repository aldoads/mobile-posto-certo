import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

// Região que enquadra todos os pontos, com uma margem em volta.
function regiaoPara(pontos) {
  const lats = pontos.map((p) => p.latitude);
  const lngs = pontos.map((p) => p.longitude);
  const min = (v) => Math.min(...v);
  const max = (v) => Math.max(...v);
  return {
    latitude: (min(lats) + max(lats)) / 2,
    longitude: (min(lngs) + max(lngs)) / 2,
    latitudeDelta: (max(lats) - min(lats)) * 1.6 + 0.005,
    longitudeDelta: (max(lngs) - min(lngs)) * 1.6 + 0.005,
  };
}

// Ícones dos marcadores no estilo do protótipo (posto amarelo, usuário azul, pino com letra).
function Icone({ marcador }) {
  if (marcador.tipo === 'posto') {
    return (
      <View style={styles.posto}>
        <MaterialCommunityIcons name="gas-station" size={17} color={colors.verde} />
      </View>
    );
  }
  if (marcador.tipo === 'usuario') {
    return <Ionicons name="navigate" size={22} color={colors.azulUsuario} />;
  }
  return (
    <View style={styles.pino}>
      <MaterialCommunityIcons name="map-marker" size={40} color={colors.amarelo} />
      <Text style={styles.letra}>{marcador.letra}</Text>
    </View>
  );
}

// Mapa real (react-native-maps) para Android/iOS. No Expo Web é usado MapaPostos.web.js.
// marcadores: [{ id, coordenada, tipo: 'posto' | 'usuario' | 'letra', letra? }]
// rota: lista de coordenadas desenhada como linha verde (opcional).
export default function MapaPostos({ marcadores, rota, style }) {
  // Só recalcula quando os pontos mudam, para o mapa não recentralizar a cada render.
  const pontos = JSON.stringify([...marcadores.map((m) => m.coordenada), ...(rota ?? [])]);
  const regiao = useMemo(() => regiaoPara(JSON.parse(pontos)), [pontos]);

  return (
    <View style={[styles.moldura, style]}>
      <MapView style={StyleSheet.absoluteFill} region={regiao} toolbarEnabled={false}>
        {rota ? <Polyline coordinates={rota} strokeColor={colors.verde} strokeWidth={5} /> : null}
        {marcadores.map((m) => (
          <Marker
            key={m.id}
            coordinate={m.coordenada}
            anchor={m.tipo === 'letra' ? { x: 0.5, y: 1 } : { x: 0.5, y: 0.5 }}
          >
            <Icone marcador={m} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  moldura: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  posto: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.amarelo,
  },
  pino: {
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  letra: {
    position: 'absolute',
    top: 6,
    fontSize: 16,
    fontWeight: '500',
    color: colors.preto,
  },
});
