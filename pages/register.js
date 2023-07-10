// import { View, Text , StyleSheet,TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
// import React, { useState } from 'react'
// import { db } from '../firebase';
// import { addDoc, collection} from 'firebase/firestore'
// import firebase from ".firebase/app"
// import auth from '@react-native-firebase/auth'; 

// export default function Regiter() {
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
//     // const [rePassword,setRePassword]=useState('');
//     const [data,setData]=useState([]);

//     // async function writeData(){
//     //     try{
//     //         await addDoc(collection(db,"LockScreen"),{
//     //             Email:email,
//     //             Password:password,
//     //             // rePassword:rePassword,
//     //         })
//     //     }catch(error){
//     //     }
//     // }
//     // const handleAlert =()=>{
//     //     const condition = password===rePassword;
//     //     if(condition){
//     //         Alert.alert("you are registered");
//     //     }
//     //     else {
//     //        Alert.alert("password is not matiching");
//     //     }
//     // }
//     // const renderItem=({item})=>{
//     //     <View style={{marignBottom:15}}>
//     //         <Text style={style.bookText}>Email: {item.email}</Text>
//     //   <Text style={style.bookText}>Password: {item.password}</Text>
//     //   {/* <Text style={style.bookText}>Password: {item.rePassword}</Text> */}
//     //     </View>
//     // }
//   return (
//     <View>
//       <Text style={style.header}>Register</Text>
//       <View style={style.v1}>
//         <Text style={style.label}>Email</Text>
//       <TextInput
//       style={style.txtIn}
//       placeholder="Enter email"
//       value={email}
//       onChangeText={(id) => setEmail(id)} />
//         <Text style={style.label}>Password</Text>
//       <TextInput
//       secureTextEntry
//       style={style.txtIn}
//       placeholder="Enter email"
//       value={password}
//       onChangeText={(id)=>setPassword(id)}
//       />
//         {/* <Text style={style.label}>Confirm Password</Text>
//       <TextInput
//      secureTextEntry
//      value={rePassword}
//       style={style.txtIn}
//       placeholder="Enter email"
//       onChangeText={(id)=>{setRePassword(id)}}
//       /> */}
//       <TouchableOpacity style={style.btn} onPress={handleSignUp} onPressOut={()=>{}}>
//         <Text style={style.btnTxt}>Registe</Text>
//       </TouchableOpacity>
//       </View>
//         {/* <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}/>   */}
//     </View>
//   )
// }
// const style = StyleSheet.create({
//     btnTxt:{
//          padding:10,
//          color:'white'
//     },
//     btn:{
//         backgroundColor:'#29293d',
//         margin:20,
//         borderWidth: 2, 
//         borderRadius: 20,
//         alignItems:'center',
        

//     },
//     label:{
//         marginLeft:10,
//         marginTop:5,
//    fontWeight:'bold',     
//     },
// header:{
//    marginTop:200,
//    marginLeft:60,
//    fontSize:20,
//    fontWeight:'bold'
// },
// txtIn:{
//     borderWidth:1 ,
//     margin:10,
//     borderRadius:20,
//     paddingLeft:10
    
// },
// v1:{

// }
// })       