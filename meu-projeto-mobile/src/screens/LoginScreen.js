import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { Ionicons } from '@expo/vector-icons';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Bloco Branco Central (Ocupa 100% da largura e ~80% da altura, sem cantos arredondados) */}
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

          {/* Botão de Login */}
          <CustomButton title="ENTRE" onPress={() => {}} />

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

          {/* Botões Sociais Lado a Lado com as imagens PNG */}
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

          {/* Rodapé: Cadastrar */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Novo no PostoCerto? </Text>
            <TouchableOpacity>
              <Text style={styles.signupText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3932', // Fundo verde escuro do projeto na tela inteira
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCard: {
    width: '100%',              // Ocupa 100% da largura
    minHeight: '80%',           // Ocupa exatamente 80% da altura proporcional
    backgroundColor: '#FFFFFF', // Bloco branco sem cantos arredondados
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 65,
    height: 65,
    marginBottom: 4,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: -24,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#1e3932',
    borderColor: '#1e3932',
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#6d6d6d',
  },
  forgotContainer: {
    marginTop: 2,
    marginBottom: 26,
  },
  forgotText: {
    fontSize: 12,
    color: '#6d6d6d',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDDDDD',
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  socialIconPng: {
    width: 18,
    height: 18,
    marginRight: 6, // Espaço entre o PNG e o texto
  },
  socialText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333333',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
    marginTop: 30,
  },
  signupText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e3932',
    marginTop: 30,
  },

  passwordWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -30 }], 
    zIndex: 10,
    padding: 4,
  },
});