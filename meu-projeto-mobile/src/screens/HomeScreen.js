import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import HomeHeader from '../components/organisms/HomeHeader';
import MapaPostos from '../components/organisms/MapaPostos';
import BottomMenu from '../components/organisms/BottomMenu';
import { colors } from '../theme/colors';
import { APP_MAX_WIDTH, useLarguraApp } from '../theme/layout';
import { postosMapa, usuario } from '../data/comparacao';

// Proporções do frame HOME (428 px de largura).
const MARGEM_MAPA = 37;
const PROPORCAO_MAPA = 411 / 354.67;
// Contador do sino como no protótipo; ainda não existe tela/serviço de alertas.
const TOTAL_ALERTAS = 3;

// Rota demonstrativa: do usuário até o posto mais próximo (menor distância da base).
const maisProximo = [...postosMapa].sort((a, b) => a.distanciaKm - b.distanciaKm)[0];
const marcadores = [
  { id: 'usuario', tipo: 'usuario', coordenada: usuario.coordenada },
  ...postosMapa.map((p) => ({ id: p.id, tipo: 'posto', coordenada: p.coordenada })),
];
const rota = [usuario.coordenada, maisProximo.coordenada];

export default function HomeScreen() {
  const router = useRouter();
  const larguraMapa = useLarguraApp() - MARGEM_MAPA * 2;

  return (
    <View style={styles.pagina}>
      <StatusBar style="dark" />
      <View style={styles.app}>
        <HomeHeader
          endereco={usuario.endereco}
          totalAlertas={TOTAL_ALERTAS}
          onPressAlertas={() => router.push('/alertas')}
        />

        <View style={styles.corpo}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitulo}>Para Donos de Postos</Text>
            <Text style={styles.bannerSubtitulo}>Cadastre-se ou migre para o Premium</Text>
            <View style={styles.bannerLinha}>
              <View style={styles.bannerIcone}>
                <MaterialCommunityIcons name="gas-station" size={26} color={colors.amarelo} />
              </View>
              <Pressable
                onPress={() => router.push('/cadastro-premium')}
                accessibilityRole="button"
                style={({ pressed }) => [styles.botaoCadastrar, pressed && styles.pressionado]}
              >
                <Text style={styles.botaoCadastrarTexto}>CADASTRAR</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.areaMapa}>
            <MapaPostos
              marcadores={marcadores}
              rota={rota}
              imagemWeb={require('../../assets/home/mapa.png')}
              style={{ width: larguraMapa, height: larguraMapa * PROPORCAO_MAPA, maxHeight: '100%' }}
            />
          </View>
        </View>

        <BottomMenu ativo="inicio" style={styles.menu} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Platform.OS === 'web' ? colors.fundoWeb : colors.verde,
  },
  app: {
    flex: 1,
    width: '100%',
    maxWidth: APP_MAX_WIDTH,
    backgroundColor: colors.verde,
  },
  corpo: {
    flex: 1,
    paddingTop: 60,
  },
  banner: {
    alignSelf: 'flex-end',
    width: 257,
    marginRight: 32,
    paddingTop: 2,
    paddingBottom: 8,
    paddingHorizontal: 21,
    borderRadius: 6,
    backgroundColor: colors.branco,
  },
  bannerTitulo: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    color: colors.verde,
  },
  bannerSubtitulo: {
    fontSize: 11.3,
    lineHeight: 15,
    fontWeight: '500',
    color: colors.verde,
  },
  bannerLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  bannerIcone: {
    width: 34,
    height: 37,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.verde,
  },
  botaoCadastrar: {
    width: 135,
    height: 38,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.amarelo,
  },
  botaoCadastrarTexto: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.preto,
  },
  pressionado: {
    opacity: 0.8,
  },
  areaMapa: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  menu: {
    backgroundColor: colors.menuHome,
  },
});
