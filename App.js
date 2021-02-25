import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './styleSheet.js'
import SignupLogin from './screens/signupLoginScreen.js'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <SignupLogin/>
    </View>
    );
  }
}

