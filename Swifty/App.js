import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './Styles';
import getToken from './GetToken';
import { getUserData } from './GetUserData';

export default function App() {
  const [view, setView] = useState('loginScreen');
  const [login, onChangeLogin] = React.useState('');
  const [token, setToken] = useState(getToken());

  

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>42 Swifty Companions</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {view === 'loginScreen' && (
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
              // onPress={() => setView('42InfoScreen')}
              onPress={async () => {
                try {
                  token.then((t) => {
                    console.log('Token from promise:', t);
                    const userData = getUserData(t);
                    console.log('User Data:', userData);
                    setView('42InfoScreen');

                  }).catch((error) => {
                    console.error('Error fetching token:', error);
                  });
                } catch (error) {
                  console.error('Authentication error:', error);
                
                }
              }
              }
            >
              <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
          </View>
        )}

        {view === '42InfoScreen' && (
          <Text style={styles.infoText}>42 Info Screen</Text>
        )}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        {view === '42InfoScreen' && (
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => setView('loginScreen')}
          >
            <Text style={styles.footerButtonText}>Back to Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

