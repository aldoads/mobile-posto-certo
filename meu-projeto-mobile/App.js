import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomInput from './src/components/atoms/CustomInput';
import CustomButton from './src/components/atoms/CustomButton';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Moldura principal simulando a tela do telemóvel */}
      <View style={styles.phoneFrame}>
        


        {/* Miolo branco com o conteúdo rolável */}
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          {/* Logo e Nome */}
          <View style={styles.headerContainer}>
            <Image 
              source={require('./assets/icon.png')} 
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

          {/* Input de Senha com ícone de olho */}
          <View style={styles.passwordContainerWrapper}>
            <CustomInput
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
            <View style={styles.eyeIconContainer}>
              <Text style={styles.eyeIcon}>👁️</Text>
            </View>
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

          {/* Botões Sociais Lado a Lado */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>f</Text>
              <Text style={styles.socialText} numberOfLines={1}>Continue com Facebook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIconGoogle}>G</Text>
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

        </ScrollView>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1E1B', // Fundo externo escuro para destacar a moldura do app
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: '100%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    elevation: 10,
  },
  topBar: {
    height: 50,
    backgroundColor: '#1e3932', // Barra verde superior idêntica ao Figma
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  timeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
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
  passwordContainerWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 16,
    top: 20,
  },
  eyeIcon: {
    fontSize: 16,
    color: '#666666',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 2,
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
    marginBottom: 16,
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
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  socialIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1877F2',
    marginRight: 6,
  },
  socialIconGoogle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EA4335',
    marginRight: 6,
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
  },
  signupText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e3932',
  },
  bottomBar: {
    height: 40,
    backgroundColor: '#1e3932', // Barra verde inferior idêntica ao Figma
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIndicator: {
    width: 120,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});