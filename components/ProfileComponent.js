import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text } from 'react-native'

const ProfileComponent = ({ title, subtitle, image }) => {
    return (
        <SafeAreaView>
            <View style={styles.profileContainer}>
                <Text style={[styles.profileYears, styles.titleDescription]}>{title}</Text>
                <Text style={[styles.profileDescription, styles.titleDescription]}>{subtitle}</Text>
                <Image
                    style={styles.teaching}
                    source={image}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        height: '100%',
        justifyContent: "flex-end",
        display: 'flex',
        alignItems: 'center',
    },
    titleDescription: {
        top: 65,
        zIndex: 9999,
        color: '#282828',
        // fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textShadowColor: '#b5b5b5',
    },
    profileYears: {
        fontSize: 60,
    },
    profileDescription: {
        width: '90%',
        fontSize: 20,
        textAlign: 'center',
    },
    teaching: {
        height: '80%',
        width: '100%',
        resizeMode: "cover",
    }
});



export default ProfileComponent;
