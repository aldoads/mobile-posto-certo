import React from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { APP_MAX_WIDTH } from '../../theme/layout';

// Lista em janela sobreposta, usada pelos seletores e por "Adicionar posto à comparação".
// itens: [{ id, rotulo, detalhe?, selecionado?, desabilitado? }]
export default function ListaModal({ visivel, titulo, aviso, itens, onSelecionar, onFechar }) {
  return (
    <Modal visible={visivel} transparent animationType="fade" onRequestClose={onFechar}>
      <Pressable style={styles.fundo} onPress={onFechar} accessibilityLabel="Fechar lista">
        <Pressable style={styles.janela} onPress={() => {}}>
          <Text style={styles.titulo}>{titulo}</Text>
          {aviso ? <Text style={styles.aviso}>{aviso}</Text> : null}

          <ScrollView style={styles.lista}>
            {itens.map((item) => (
              <Pressable
                key={item.id}
                disabled={item.desabilitado}
                onPress={() => onSelecionar(item.id)}
                accessibilityRole="button"
                accessibilityState={{ selected: !!item.selecionado, disabled: !!item.desabilitado }}
                style={({ pressed }) => [
                  styles.item,
                  item.desabilitado && styles.desabilitado,
                  pressed && styles.pressionado,
                ]}
              >
                <View style={styles.itemTextos}>
                  <Text style={styles.itemRotulo}>{item.rotulo}</Text>
                  {item.detalhe ? <Text style={styles.itemDetalhe}>{item.detalhe}</Text> : null}
                </View>
                <Ionicons
                  name={item.selecionado ? 'checkmark-circle' : 'ellipse-outline'}
                  size={22}
                  color={item.selecionado ? colors.verde : colors.cinzaTrilho}
                />
              </Pressable>
            ))}
          </ScrollView>

          <Pressable onPress={onFechar} accessibilityRole="button" style={styles.botao}>
            <Text style={styles.botaoTexto}>Concluir</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  janela: {
    width: '100%',
    maxWidth: APP_MAX_WIDTH - 56,
    maxHeight: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.branco,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.verde,
  },
  aviso: {
    marginTop: 4,
    fontSize: 12,
    color: colors.cinzaTexto,
  },
  lista: {
    marginTop: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.cinzaTrilho,
  },
  itemTextos: {
    flex: 1,
    marginRight: 12,
  },
  itemRotulo: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.preto,
  },
  itemDetalhe: {
    marginTop: 2,
    fontSize: 12,
    color: colors.cinzaTexto,
  },
  desabilitado: {
    opacity: 0.4,
  },
  pressionado: {
    opacity: 0.6,
  },
  botao: {
    marginTop: 16,
    height: 45,
    borderRadius: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.verde,
  },
  botaoTexto: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.branco,
  },
});
