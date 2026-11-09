import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import CustomInput from './src/components/atoms/CustomInput';
import CustomButton from './src/components/atoms/CustomButton';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    Alert.alert('Ação', `E-mail digitado: ${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>PostoCerto</Text>
        
        <CustomInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <CustomButton title="ENTRE" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3932', // Cor verde oficial do projeto
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Fundo translúcido elegante para o bloco central
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 28,
    textAlign: 'center',
  },
});