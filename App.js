import React, { useEffect } from 'react';
import {
  Platform, StyleSheet, Text,
  View, ScrollView, StatusBar,
  SafeAreaView, KeyboardAvoidingView
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
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingContainer}
      behavior='padding'
    >
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
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
});
