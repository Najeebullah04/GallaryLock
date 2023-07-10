import { View,ScrollView,StyleSheet, Text } from 'react-native'
import React ,{useState , useEffect} from 'react'
import Icon from 'react-native-fontawesome'
import * as Font from 'expo-font'

export default function Setting() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'fa-solid-900': require('../assets/cdnjs/fa-solid-900.ttf'), // Replace with the correct path to your font file
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>; // or any loading indicator
  }
  return (
    <View style={styles.Main}>
      <ScrollView>
      <View style={styles.setting}>     
      <Text style={styles.setting}>General </Text> 
      <View style={{flexDirection:'row' , padding:10}}>
      <View style={{flexDirection:'row' , padding:10}}>
        <Icon name='key' size={20}/>
        <Text style={{ marginLeft:20}}>Change Password</Text>
          </View>
        </View> 
      <Text style={styles.setting}>Advance </Text>  
      <View style={{ padding:10}}>
        <View style={{flexDirection:'row' , padding:10}}>
        <Icon name='circle' size={20}/>
        <Text style={{ marginLeft:20}}>App Theme</Text>
          </View>
        <View style={{flexDirection:'row' , padding:10}}>
        <Icon name='trash' size={20}/>
        <Text style={{ marginLeft:20}}>App Delete Protection </Text>
          </View>
        
        </View>
      <Text style={styles.setting}>AppLock </Text>  
      <View style={{padding:10}}>
      <View style={{flexDirection:'row' , padding:10}}>
        <Text style={{ marginLeft:20}}>Sound</Text>
          </View>
      <View style={{flexDirection:'row' , padding:10}}>
        <Text style={{ marginLeft:20}}>Vibration</Text>
          </View>
        </View> 
    </View>
    </ScrollView>
    </View>
  )
}
const styles= StyleSheet.create({
      Main:{
        fontFamily:"System"
      },
      setting:{
        flex:1,
        margin:5, 
        fontSize: 15,
         fontWeight:'bold'        
      }
})
