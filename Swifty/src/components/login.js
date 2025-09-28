import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import styles from '../../Styles';
import { getUserData } from '../utils/GetUserData';

const Login = ({ setView, token, setUserData, isConnected }) => {
  const [login, onChangeLogin] = React.useState('');
  const [error, setError] = React.useState(null);


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
        onPress={async () => {
          try {
              if (!isConnected) {
                throw new Error('No internet connection. Please connect to the internet and try again.');
              }
              if (!login) {
                throw new Error('Login cannot be empty.');
              }
              const t = await token;
              const userData = await getUserData(t, login);
            
              if (!userData) {
                throw new Error('Failed to fetch user data. Please check the login and try again.');
              }
              setUserData(userData);
              console.log('User Data:', userData);
              setView('42InfoScreen');
          } catch (error) {
            setError(error.message);
            // console.error('Error fetching user data:', error.message);
          }
        }}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>{error ? error : "" }</Text>
    </View>
  );
};

export default Login;