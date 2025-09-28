import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../Styles';
import getToken from './utils/GetToken';
import Footer from './components/footer';
import Login from './components/login';
import Header from './components/header';
import UserDataView from './components/UserDataView';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';


export default function App() {
  const [view, setView] = useState('loginScreen');
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (!token && isConnected) {
    setToken(getToken());
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Header userData={userData} />
      
      <View style={styles.content}>
        {view === 'loginScreen' && (
          <Login setView={setView} token={token} setUserData={setUserData} isConnected={isConnected} />
        )}
        {view === '42InfoScreen' && (
          <UserDataView userData={userData} />
        )}
      </View>

      <Footer view={view} setView={setView} setUserData={ setUserData} />
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
    


  );
}

