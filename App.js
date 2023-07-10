import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LockScreen from './pages/LockScreen';
import MyTabs from './pages/HomeScreen';
import First from './pages/First';
import Regiter from './pages/register';
import Login from './pages/login';
import passwordCreate from './pages/passwordCreate';
import CameraScreen from './pages/camera';
import YourComponent from './pages/example';
const stack= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        {/* <stack.Screen name='setPassword' options={{headerShown:false}} component={passwordCreate}/> */}
        {/* <stack.Screen name= 'Register' options={{headerShown:false}} component={Regiter}/> */}
        <stack.Screen name= 'firstPage' options={{headerShown:false}} component={First}/>
        <stack.Screen name= 'lockScreen' options={{headerShown:false}} component={LockScreen}/>
        <stack.Screen name='home' options={{headerShown:false}} component={MyTabs}/>
        <stack.Screen name='camera' options={{headerShown:false}} component={CameraScreen}/>
        {/* <CameraScreen/> */}
      </stack.Navigator>
    </NavigationContainer>
    //  <YourComponent/>
  );
}
 