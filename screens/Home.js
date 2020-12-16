import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require("../assets/background.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hola :)</Text>
          <Text style={styles.subtitle}>Soy Camila, y este es mi cv</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('List') }} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText} >Comencemos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.homeImage}
            source={require("../assets/avatar.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: -190,
    resizeMode: "contain",

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#14d2b9",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
    position: 'relative',
    backgroundColor: "#fafafa",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  homeImage: {
    height: "80%",
    resizeMode: "contain",
    left: 15
  },
  textContainer: {
    display: "flex",
    height: '100%',
    position: 'relative',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
  title: {
    fontSize: 60,
    margin: 5,
  },
  subtitle: {
    fontSize: 15,
  },
  homeButton: {
    backgroundColor: "red",
  },
});

export default Home;
