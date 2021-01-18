import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({ title, onPress }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={onPress} style={styles.listBox}>
                <Text style={styles.listTitle}>{title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    listBox: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#8d91fd',
        alignItems: 'center',
        width: 350,
        borderRadius: 100
    },
    listTitle: {
        fontSize: 25,
        fontWeight: '200',
        letterSpacing: 3,
        color: "#fafafa"
    }
});
export default Button
