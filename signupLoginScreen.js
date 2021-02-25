import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import {styles} from '../styleSheet.js'
import db from '../Config.js'
import firebase from 'firebase'

export default class SignupLogin extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  userLogin=(username,password)=>{
    firebase.auth().signInWithEmailAndPassword(username,password).then(()=>{
      return(
          Alert.alert('user login successful')
      )   
     }).catch((error)=>{
         var errorCode = error.code
         var errorMessage = error.message
         console.log(errorMessage)
         Alert.alert(errorMessage)
     })
  }
  userSignup=(username,password)=>{
    firebase.auth().createUserWithEmailAndPassword(username,password).then(()=>{
     return(
         Alert.alert('user login successful')
     )   
    }).catch(function(error){
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorMessage)
        Alert.alert(errorMessage)
    })
  }
  render(){
  return (
    <View style = {styles.container}>
        <View>
        <Image
            style={{ width: 250, height: 150, marginLeft: -10, marginTop: 50 }}
            source={require('../assets/barter.png')}
        />
        </View>
        <View>
        <TextInput 
        placeholder = 'email ID' 
        style = {styles.textInput}
        onChangeText={(text)=>{
          this.setState({
            username: text
          })
        }}></TextInput>
        <TextInput 
        placeholder = 'password'
        style = {styles.textInput}
        onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}></TextInput>
        </View>
        <View>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {()=>{
          this.userLogin(this.state.username,this.state.password)
        }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {()=>{
          this.userSignup(this.state.username,this.state.password)
        }}>
          <Text>Sign up</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
  }
}

