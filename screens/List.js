import React from "react";
import ColorBox from '../components/ColorBox';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native";
const List = () => {

    return (
        <SafeAreaView style={styles.listContainer}>
            <View style={styles.listView}>
                <Text style={styles.listTitle}></Text>
                <ColorBox color={'#14d2b9'} title={'Mi Historia'} url="Profile"/>
                <ColorBox color={'#14d2b9'} title={'Educación IT'} url="Education"/>
                <ColorBox color={'#14d2b9'} title={'Experiencia Laboral'} url="Experience"/>
                <ColorBox color={'#14d2b9'} title={'Hobbies'} url="Hobbies"/>
                <ColorBox color={'#14d2b9'} title={'Contacto'} url="Contact" />
            </View>
        </SafeAreaView>
    );
};

 const styles = StyleSheet.create({
   
    listContainer: {
        height: '100%',
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listView:{
        alignItems: 'center',
        justifyContent: 'center',

    },
    listTitle:{
        marginBottom: 30,
        fontSize: 35,
        textAlign: 'center',
    },
 });



export default List;
