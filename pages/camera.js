import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-fontawesome';


const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleCameraToggle = () => {
      setCameraType(
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    };
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={cameraType} />
        <TouchableOpacity style={styles.button} onPress={handleCameraToggle}>
          <Text>toggle</Text>
        </TouchableOpacity>
      </View>
    );
  };
  export default CameraScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    camera: {
      flex: 1,
      width: '100%',
    },
    button: {
      backgroundColor: 'blue',
      padding: 16,
      borderRadius: 8,
      marginTop: 16,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
  