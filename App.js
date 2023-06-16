import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LockScreen from './pages/LockScreen';
import HomeScreen from './pages/HomeScreen';
import MyTabs from './pages/HomeScreen';
import Photos from './pages/Photos';
import Videos from './pages/Videos';


export default function App({navigation}) {
  return (
   
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
