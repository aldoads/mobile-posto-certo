// src/screens/LocationScreen.js
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './LocationScreen.styles';
import { Colors } from '../constants/theme';

export default function LocationScreen() {
  const [searchAddress, setSearchAddress] = useState('');
  const [userAddress, setUserAddress] = useState('Av. Severino Alves, 157 - Bairro Centro, Patos - PB');
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        
        <View style={styles.contentContainer}>

          {/* Título Principal e Subtítulo */}
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Onde será o ponto de partida?</Text>
            <Text style={styles.subtitle}>Indique a sua localização para iniciar a rota</Text>
          </View>

          {/* Barra de Pesquisa de Endereço */}
          <View style={styles.searchBoxContainer}>
            <Ionicons name="search-outline" size={18} color={Colors.textGray} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Qual o endereço?"
              placeholderTextColor={Colors.textGray}
              value={searchAddress}
              onChangeText={setSearchAddress}
            />
          </View>

          {/* Opção: Usar minha localização atual */}
          <TouchableOpacity style={styles.currentLocationButton}>
            <Ionicons name="location" size={22} color={Colors.primary} style={styles.locationPinIcon} />
            <View style={styles.textWrapper}>
              <Text style={styles.currentLocationTitle}>Usar minha localização atual</Text>
              <Text style={styles.currentLocationSubtitle}>{userAddress}</Text>
            </View>
          </TouchableOpacity>

        {/* Card de Endereço 1 */}
        <TouchableOpacity style={styles.addressCard} onPress={() => { /* Ação */ }}>
          <Text style={styles.addressCardText}>
            <Text style={styles.addressCardTitle}>Endereço 1:</Text>
            {'\n'}
            <Text style={addressOne ? styles.addressCardText : styles.addressCardPlaceholder}>
              {addressOne || 'Nenhum endereço cadastrado'}
            </Text>
          </Text>
        </TouchableOpacity>

        {/* Card de Endereço 2 */}
        <TouchableOpacity style={styles.addressCard} onPress={() => { /* Ação */ }}>
          <Text style={styles.addressCardText}>
            <Text style={styles.addressCardTitle}>Endereço 2:</Text>
            {'\n'}
            <Text style={addressTwo ? styles.addressCardText : styles.addressCardPlaceholder}>
              {addressTwo || 'Nenhum endereço cadastrado'}
            </Text>
          </Text>
        </TouchableOpacity>

        </View>

        {/* Rodapé: Cadastrar em destaque e maior */}
        <TouchableOpacity style={styles.footerAction}>
            <Text style={styles.footerActionText}>
            <Text style={styles.footerActionHighlight}>Cadastrar</Text> novo endereço
            </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}