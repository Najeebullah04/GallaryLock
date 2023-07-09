import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';


const First = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lock.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Gallery Lock!</Text>
      <Text style={styles.subtitle}>
        Securely protect your photos and videos.
      </Text>
      <Text style={styles.description}>
        Gallery Lock allows you to keep your personal media files hidden and secure. You can lock your sensitive photos and videos behind a passcode or biometric authentication, ensuring that only you can access them.
      </Text>
      <Text style={styles.note}>
        Note: Gallery Lock does not upload or store your media files on external servers. All files are stored locally on your device for maximum privacy.
      </Text>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('lockScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const handleGetStarted = () => {
  // Handle the "Get Started" button press event
  console.log('Get Started button pressed');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  note: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default First;
