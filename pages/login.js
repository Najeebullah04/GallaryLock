import { View, Text , StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text style={style.header}>Login</Text>
      <View style={style.v1}>
        <Text style={style.label}>Email</Text>
      <TextInput
      style={style.txtIn}
      placeholder="Enter email"/>
        <Text style={style.label}>Password</Text>
      <TextInput
      style={style.txtIn}
      placeholder="Enter email"/>
      <TouchableOpacity style={style.btn}>
        <Text style={style.btnTxt}>Login</Text>
      </TouchableOpacity>
      </View>      
    </View>
  )
}
const style = StyleSheet.create({
    btnTxt:{
         padding:10,
         color:'white'
    },
    btn:{
        backgroundColor:'#29293d',
        margin:20,
        borderWidth: 2, 
        borderRadius: 20,
        alignItems:'center',
        

    },
    label:{
        marginLeft:10,
        marginTop:5,
   fontWeight:'bold',     
    },
header:{
   marginTop:200,
   marginLeft:60,
   fontSize:20,
   fontWeight:'bold'
},
txtIn:{
    borderWidth:1 ,
    margin:10,
    borderRadius:20,
    paddingLeft:10
    
}
})