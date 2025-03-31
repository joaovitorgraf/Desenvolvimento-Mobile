import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');

  return (
    <SafeAreaView>
      <View style={styles.conteiner}>
        <Text style={styles.title}>Entrar</Text>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="black"
          style={styles.input}
          inputMode="email"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="black"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            console.log('Login');
          }}
          style={styles.buttom}
        >
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    margin: 25,
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    marginVertical: 40,
  },
  input: {
    width: '100%',
    borderColor: 'Black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    fontSize: 20,
    color: 'black',
    marginVertical: 15,
  },
  buttom: {
    backgroundColor: '#27428f',
    padding: 15,
    borderRadius: 15,
    marginVertical: 15,
  },
  buttomText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
