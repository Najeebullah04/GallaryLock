import * as React from 'react';
import { ScrollView,Linking,Alert, ImageBackground, Text,StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal } from 'react-native-modal';
import Setting from './setting';
import Photos from './Photos';
import Videos from './Videos';

const Tab = createBottomTabNavigator();
function MyTabs() {
   
  const openURL =()=>{
    const URL = "https://www.google.com"
    Linking.openURL(URL);
  }
  const AlertMsg=()=>{
     Alert.alert(
     'information',
      'Locked files: Your files are stored in internal memory inside the app.'+"\n"+"\n"+
      'TEMEMBER:Before deleting this app,unlock all pictures and videos from the app. else, the pictures and the videos will be lost forever.'+"\n"+"\n"+
      "BE CARFUL: Do not factory reset your phone before unlock your files from this app; otherwise, it will be deleted forever."   
     );
  }
  return (
    <Tab.Navigator
      initialRouteName="Photos"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63', 
      }}
    >
      <Tab.Screen      
        name="Pictures"
        component={Photos}
        options={{        
          tabBarLabel:"Photos",
          headerRight:()=>(
            <View style={styles.headerIcon}>
              <Icon name='folder' style = {styles.headerIcon1} size={20} />
              <Icon name='globe' style = {styles.headerIcon1} size={20}  onPress={openURL} />
              <Icon name='info' style = {styles.headerIcon1}size={20} onPress={AlertMsg} />
            </View>              
          ),
          tabBarIcon:({color, size})=>(
            <MaterialCommunityIcons name="image" size={size} color={color}/>
          ),        
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          headerRight:()=>(
            <View style={styles.headerIcon}>
              <Icon name='folder' style = {styles.headerIcon1} size={20}/>
              <Icon name='globe' style = {styles.headerIcon1} size={20} onPress={openURL}/>
              <Icon name='info' style = {styles.headerIcon1}size={20} onPress={AlertMsg}/>
            </View>
          ),
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles= StyleSheet.create({
  headerIcon:{
   flexDirection: "row",
  },
  headerIcon1:{
   padding:15,
  }
})
export default MyTabs;
