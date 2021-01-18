import React from 'react'
import { SafeAreaView, View, Text, StyleSheet,ImageBackground } from 'react-native'

const ItEducationComponent = () => {
    return (
        <SafeAreaView>
        <ImageBackground
              style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
              }
              }
              source={require('../assets/background7.png')}
          >
      <View>
      </View>
      </ImageBackground>
  </SafeAreaView>
    )
}

export default ItEducationComponent;