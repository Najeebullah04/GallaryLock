import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LockScreen from './pages/LockScreen';
import MyTabs from './pages/HomeScreen';

const stack= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'lockScreen' options={{headerShown:false}} component={LockScreen}/>
        <stack.Screen name='home' options={{headerShown:false}} component={MyTabs}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
