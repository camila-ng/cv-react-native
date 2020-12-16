import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {
    return (
        <SafeAreaView>
            <View>
                <ProfileComponent title={"2015-2019"} subtitle={"Trabajé durante cuatro años como docente integradora escolar."} image={require("../assets/teaching.png")} />
                {/* <ProfileComponent />
                <ProfileComponent /> */}

            </View>
        </SafeAreaView>
    )
}

export default Profile;
