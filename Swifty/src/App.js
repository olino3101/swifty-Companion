import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../Styles';
import getToken from './utils/GetToken';
import Footer from './components/footer';
import Login from './components/login';
import Header from './components/header';

export default function App() {
  const [view, setView] = useState('loginScreen');
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();

  if (!token) {
    setToken(getToken());
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      
      {/* CONTENT */}
      <View style={styles.content}>
        {view === 'loginScreen' && (
          <Login setView={setView} token={token} setUserData={setUserData} />
        )}
        {view === '42InfoScreen' && (
          <Text style={styles.infoText}>42 Info Screen</Text>
        )}
      </View>

      <Footer view={view} setView={setView}/>
    </View>
  );
}

