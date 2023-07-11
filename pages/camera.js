import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView , Image } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-fontawesome';
import { shareAsync } from 'expo-sharing';
import *as MediaLibrary from 'expo-media-library'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Photos from './Photos';



const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");

    })();
  }, []);
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        setCapturedImage(uri);        
      } catch (error) {
        console.log('Error taking picture:', error);
      }
    }
  };
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
  if (capturedImage) { 
    let sharePic = () => {
      if (capturedImage && capturedImage.rui){
        shareAsync(capturedImage.uri).then(() => {
          setCapturedImage(undefined);
        });
      }    
    };
  }
    const savePhoto = async () => {
      
      try {
        if (capturedImage){
        const asset = await MediaLibrary.createAssetAsync(capturedImage);
        if (asset) {
          await MediaLibrary.createAlbumAsync('gallaryLock', asset, false);
          console.log('Image saved to media library');
        }
      }} catch (error) {
        console.log('Error saving image to media library:', error);
      }
    };
  return (
    <View style={styles.container0}>
      <Camera style={styles.camera} type={cameraType}
        ref={(ref) => setCameraRef(ref)} />
      <View style={styles.container1}>
        <View style={styles.container2}>
          {capturedImage && (
            <View style={styles.capturedImage}>
              <Image
                source={{ uri: capturedImage }}
                style={{ width: 50, height: 50 }}
              />
            </View>
          )}
        </View>
        {hasMediaLibraryPermission?
        <TouchableOpacity style={styles.button} onPress={takePicture} onPressOut={savePhoto}>
          <MaterialCommunityIcons name="camera" size={30} color={"black"} />
        </TouchableOpacity>: undefined}
        <TouchableOpacity style={styles.button1} onPress={handleCameraToggle}>
          <MaterialCommunityIcons name="camera-switch" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>   
  );
};
const styles = StyleSheet.create({
  container0: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  container2: {
    width: 60,
    height: 60
  },
  capturedImage: {
    margin: 5,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: "center",
    marginTop: 0
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  button1: {
    marginLeft: 100,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    marginLeft: 80,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
export default CameraScreen;
