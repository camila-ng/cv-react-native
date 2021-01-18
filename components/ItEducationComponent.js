import React from 'react'
import { SafeAreaView, View, Text, StyleSheet,ImageBackground } from 'react-native'

const ItEducationComponent = ({curso1, curso2,curso3,curso5, curso6, curso7, curso8}) => {
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
          <View  style={styles.profileContainer}>
              <View style={styles.textContainer}>
              <Text style={styles.titleDescription}>{curso1}</Text>
              <Text style={styles.titleDescription}>{curso2}</Text>
              <Text style={styles.titleDescription}>{curso3}</Text>
              <Text style={styles.titleDescription}>{curso5}</Text>
              <Text style={styles.titleDescription}>{curso6}</Text>
              <Text style={styles.titleDescription}>{curso7}</Text>
              <Text style={styles.titleDescription}>{curso8}</Text>

              </View>
              
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
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    titleDescription: {
        textAlign: 'center',
        color: 'black',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8,
        textShadowColor: '#ffff',

    }
});


export default ItEducationComponent;