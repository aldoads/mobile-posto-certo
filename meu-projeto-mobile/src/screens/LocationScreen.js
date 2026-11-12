// src/screens/LocationScreen.js
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './LocationScreen.styles';
import { Colors } from '../constants/theme';
import AddressCard from '../components/molecules/AddressCard'; // Molécula reutilizável
import CustomButton from '../components/atoms/CustomButton';    // Átomo reutilizável de botão
import { useRouter } from 'expo-router';

export default function LocationScreen() {
  const router = useRouter();
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
          <AddressCard 
            title="Endereço 1:" 
            address={addressOne} 
            onPress={() => {}} 
          />

          {/* Card de Endereço 2 */}
          <AddressCard 
            title="Endereço 2:" 
            address={addressTwo} 
            onPress={() => {}} 
          />

          {/* Botão Pular utilizando o átomo CustomButton reutilizável */}
          <CustomButton 
            title="PULAR" 
            onPress={() => router.push('/home')} 
          />

        </View>

        {/* Rodapé: Cadastrar novo endereço */}
        <TouchableOpacity style={styles.footerAction}>
            <Text style={styles.footerActionText}>
            <Text style={styles.footerActionHighlight}>Cadastrar</Text> novo endereço
            </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}