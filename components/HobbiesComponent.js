import React from 'react'
import { SafeAreaView,ImageBackground, View, StyleSheet,Text } from 'react-native'

const HobbiesComponent = ({ image, title }) => {
    return (
        <SafeAreaView>
        <ImageBackground
              style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
              }
              }
              source={image}
          >
              <View style={styles.hobbiesContainer}>
              <View style={styles.textContainer}>
                  <Text style={styles.hobbiesTitle}>{title}</Text>
              </View>
              </View>
      </ImageBackground>
  </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    hobbiesTitle: {
        fontSize: 40,
    },
    hobbiesContainer: {
        height: '100%',
        position: 'relative',
    },
    textContainer:{
        padding: 10,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default HobbiesComponent;
