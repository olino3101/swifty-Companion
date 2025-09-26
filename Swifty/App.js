import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { authenticate } from './auth';

export default function App() {
  const [view, setView] = useState('loginScreen');
  const [login, onChangeLogin] = React.useState('');
  authenticate();
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
                  const token = await authenticate();
                  console.log('Authenticated with token:', token);
                  setView('42InfoScreen');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // black background
  },
  header: {
    flex: 1,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 1,
  },
  content: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#00babc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#00babc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  infoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  footer: {
    flex: 1,
    backgroundColor: '#00babc',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#fff',
  },
  footerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
