import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Photos({capturedImage}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     {capturedImage && ( 
      <View>
        <Image 
        source={{uri : capturedImage}}
        style={{width:200 , height:200}}
        />
      </View>
     )}
    </View>
  )
}