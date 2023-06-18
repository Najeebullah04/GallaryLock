import * as React from 'react';
import { ScrollView, ImageBackground, Text,StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {Videos} from './Videos';

function Photos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Photos!</Text>
      <Text>Photos!</Text>
    </View>
  );
}
 
function Setting() {
  return (
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
      <Text></Text>  
    </View>
    </ScrollView>
    
  );
}

function Videos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Videos!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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
              <Icon name='folder' style = {styles.headerIcon1} size={20}/>
              <Icon name='globe' style = {styles.headerIcon1} size={20}/>
              <Icon name='info' style = {styles.headerIcon1}size={20}/>
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
              <Icon name='globe' style = {styles.headerIcon1} size={20}/>
              <Icon name='info' style = {styles.headerIcon1}size={20}/>
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
  },
  setting:{
    flex:1,

  },
  setting:{
    margin:5, 
    fontsize: 15,
     fontWeight:'bold'
  }
})
export default MyTabs;
