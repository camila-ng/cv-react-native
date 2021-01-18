import React from 'react'
import { SafeAreaView, View, Text, StyleSheet,ImageBackground } from 'react-native'

const ExperienceComponent = ({ title, subtitle, image }) => {
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
      <View style={styles.profileContainer}>
         <View style={styles.textContainer}>
          <Text style={[styles.profileYears, styles.titleDescription]}>{title}</Text>
          <Text style={[styles.profileDescription, styles.titleDescription]}>{subtitle}</Text>
          </View>
        
      </View>
      </ImageBackground>
  </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
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
    titleDescription: {
        textAlign: 'center',
        color: 'black',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8,
        textShadowColor: '#ffff',

    },
    profileYears: {
        fontSize: 47,
        marginBottom: 10,
    },
    profileDescription: {
        fontSize: 20,
        width: '90%',
    },
});

export default ExperienceComponent
