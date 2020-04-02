import React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import Homepage from './app/pages/Homepage';

// 4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const App = () => {
  return (
    <View style={styles.container}>
      <Homepage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
