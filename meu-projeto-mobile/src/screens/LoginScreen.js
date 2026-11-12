// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // <-- Importante para o Expo Router

// Importando os estilos de forma profissional da mesma pasta
import { styles } from './LoginScreen.styles';

export default function LoginScreen() {
  const router = useRouter(); // <-- Inicializando o router do Expo Router
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Bloco Branco Central */}
        <View style={styles.whiteCard}>
          
          {/* Logo e Nome */}
          <View style={styles.headerContainer}>
            <Image 
              source={require('../../assets/icon.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.brandTitle}>PostoCerto</Text>
          </View>

          {/* Título da Seção */}
          <Text style={styles.sectionTitle}>Entre</Text>
          
          {/* Input de E-mail */}
          <CustomInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />

          {/* Input de Senha com o olhinho profissional */}
          <View style={styles.passwordWrapper}>
            <CustomInput
              placeholder="Senha"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity 
              style={styles.eyeButton} 
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Ionicons 
                name={mostrarSenha ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#888888" 
              />
            </TouchableOpacity>
          </View>

          {/* Manter Conectado */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={[styles.checkbox, manterConectado && styles.checkboxChecked]} 
              onPress={() => setManterConectado(!manterConectado)}
            />
            <Text style={styles.checkboxLabel}>Manter conectado</Text>
          </View>

          {/* Botão de Login utilizando o router do Expo Router */}
          <CustomButton 
            title="ENTRE" 
            onPress={() => router.push('/location')} // Redireciona para a rota configurada pelo seu colega
          />

          {/* Esqueci minha senha */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          {/* Divisor "OU" */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OU</Text>
            <View style={styles.line} />
          </View>

          {/* Botões Sociais Lado a Lado */}
          <View style={styles.socialContainer}>
            
            {/* Botão Facebook */}
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../../assets/icon_facebook.png')}
                style={styles.socialIconPng} 
                resizeMode="contain"
              />
              <Text style={styles.socialText} numberOfLines={1}>Continue com Facebook</Text>
            </TouchableOpacity>
            
            {/* Botão Google */}
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../../assets/icon_google.png')} 
                style={styles.socialIconPng} 
                resizeMode="contain"
              />
              <Text style={styles.socialText} numberOfLines={1}>Continue com Google</Text>
            </TouchableOpacity>

          </View>

          {/* Rodapé: Cadastrar clicável */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Novo no PostoCerto? </Text>
            <TouchableOpacity onPress={() => { /* Ação para tela de cadastro */ }}>
              <Text style={styles.signupText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}