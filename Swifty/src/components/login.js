import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../Styles';
import { getUserData } from '../utils/GetUserData';

const Login = ({ setView, token, setUserData }) => {
  const [login, onChangeLogin] = React.useState('');

  return (
    <View style={styles.loginBox}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLogin}
        value={login}
        placeholder="Enter a 42 login"
        placeholderTextColor="#888"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          try {
                token.then(async (t) => {
                const userData = await getUserData(t);
                setUserData(userData);
                console.log('User Data:', userData);
                setView('42InfoScreen');
            });
          } catch (error) {
            console.error('Authentication error:', error);
          }
        }}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;