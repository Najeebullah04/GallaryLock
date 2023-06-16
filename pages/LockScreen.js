import React, { useState } from "react";
import {Button, StyleSheet, Text ,TouchableHighlight, TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
function LockScreen() {
    const [text,setText]=useState('');
    const handleNumberPress = (number) => {
        setText((prevText) => prevText + number);
      };
      const del =()=>{
        setText(text.slice(0,-1));
      }
    return (       
        <View style={{flex:1 , backgroundColor: "#29293d"}}>
            <Text style={styles.header}><Icon name="lock" size={25} color="white" /></Text>
            <View style={styles.txtV}>
                <TextInput style={styles.txt}
                 value={text}
                 onChangeText={setText}
                 keyboardType="numeric"
                 />
                 <TouchableOpacity
                 onPress={del}>
                  <Text style={styles.del}><Icon name="arrow-left" size={25} color="white" /></Text>
                  </TouchableOpacity>                          
            </View>
            <View style={styles.keyboardContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <TouchableHighlight
            key={number}
            style={styles.numberButton}
            onPress={() => handleNumberPress(number)}
            underlayColor="#EAEAEA"
          >
            <Text style={styles.numberText}>{number}</Text>
          </TouchableHighlight>
        ))}      
           <TouchableOpacity
           underlayColor="#EAEAEA"
           style={styles.numberButton}           
           ><Text style={{fontSize:20 , fontWeight:"bold"}}><Icon name="camera" size={25} color="black" /></Text></TouchableOpacity>
           <TouchableOpacity
           onPress={()=>handleNumberPress(0)}
           underlayColor="#EAEAEA"
           style={styles.numberButton}
           ><Text style={{fontSize:20 , fontWeight:"bold"}}>0</Text></TouchableOpacity>  
           <TouchableOpacity
           onPress={()=>handleNumberPress(number)}
           underlayColor="#EAEAEA"
           style={styles.numberButton}
           ><Text style={{fontSize:20 , fontWeight:"bold"}}><Icon name="arrow-right" size={25} color="black" /></Text></TouchableOpacity>                         
      </View>      
        </View>   
     );
} 
const styles=StyleSheet.create({
    header: { 
        fontSize:15, 
        marginTop: 40,
        textAlign:"center"
    },
    txt:{
        borderBottomWidth:3,
        borderColor:"white",
        width:200,
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold",
        marginLeft:45,
        color:"white",
    },
    del:{
      fontWeight:"bold",
      marginLeft:15,
      width:30,
      height: 35,
      textAlign:"center",
      paddingTop:5,
      fontSize:20,
    },
    txtV:{
      marginTop: 320,
      flexDirection : "row",
        justifyContent: "center",
        marginBottom:10
    },
    keyboardContainer: {
        marginTop:15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      numberButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
        margin: 5,
        backgroundColor: '#EFEFEF',
        borderRadius: 45,
      },
      numberText: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      ok:{
        borderRadius:20,
      }
})

export default LockScreen;