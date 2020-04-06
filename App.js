import React, { useEffect } from 'react';
import {
  Platform, StyleSheet, Text,
  View, ScrollView, StatusBar,
  SafeAreaView,
} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen';

import Header from './app/components/header/Header';
import Footer from './app/components/footer/Footer';
import Homepage from './app/pages/Homepage';

// 4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const App = () => {
  useEffect(() => {
    // start: using react-native-splash-screen to show splashscreen
    // then when app is ready hides splashscreen
    SplashScreen.hide();

  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor="black"
        /> */}
        <Header />
        <Homepage />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
});
