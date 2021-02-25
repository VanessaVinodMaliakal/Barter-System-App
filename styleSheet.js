import * as React from 'react'
import {StyleSheet} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#FFE0B2',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: { 
        marginTop: 20,
        width: 150, 
        height: RFValue(35), 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: RFValue(25), 
        backgroundColor: "#ffff", 
        shadowColor: "#000", 
        marginBottom: RFValue(10), 
        shadowOffset: { width: 0, height: 8 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 10.32, 
        elevation: 16 
    },
    buttonText: { 
        color: "#32867d", 
        fontWeight: "200", 
        fontSize: RFValue(20) 
    }, 
    textInput:{ 
        width:300, 
        height:40, 
        alignSelf:'center', 
        borderColor:'black', 
        borderRadius:10, 
        borderWidth:2, 
        marginTop:20, 
        padding:10,
      
    }, 
  });
