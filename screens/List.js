import React from "react";
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native";
const List = () => {
const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.listContainer}>
            <View style={styles.listView}>
                <Text style={styles.listTitle}></Text>
                <Button color={'#14d2b9'} title={'Mi Historia'} onPress={() => navigation.push("Profile")}/>
                <Button color={'#14d2b9'} title={'Educación IT'} onPress={() => navigation.push("Education")}/>
                <Button color={'#14d2b9'} title={'Experiencia Laboral'} onPress={() => navigation.push("Experience")}/>
                <Button color={'#14d2b9'} title={'Hobbies'} onPress={() => navigation.push("Hobbies")}/>
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
