import React from 'react';
import { View } from 'react-native';
import ProfileComponent from '../components/ProfileComponent';
import Swiper from 'react-native-swiper'

const Profile = () => {
    return (
        <Swiper>
            <View>
                <ProfileComponent title={"2 0 1 5 - 2 0 1 9"} subtitle={"Trabajé durante cuatro años como docente integradora escolar."} image={require("../assets/background6.png")} />
            </View>
            <View>
                <ProfileComponent title={"e n e r o 2020"} subtitle={"Comencé a estudiar programación."} image={require("../assets/background6.png")} />
            </View>
            <View>
                <ProfileComponent title={"f e b r e r o"} subtitle={"Tuve mi primera entrevista para un puesto de desarrollo frontend."} image={require("../assets/background6.png")} />
            </View>
            <View>
                <ProfileComponent title={""} subtitle={"No quedé, pero aprendí un montón :)"} image={require("../assets/background6.png")} />
            </View>
            <View>
                <ProfileComponent title={"m a r z o - a b r i l"} subtitle={"Conocí React, hice mi primer proyecto fullstack. Me volví autodidacta. "} image={require("../assets/background6.png")} />
            </View>
            <View>
                <ProfileComponent title={"m a y o - j u n i o"} subtitle={"Tuve más entrevistas, hice más cursos, desarrollé más proyectos."} image={require("../assets/background6.png")} />
            </View>
            <View>
                <ProfileComponent title={"j u l i o - a g o s t o"} subtitle={"Hice nuevos proyectos web y conseguí mi primer empleo como desarrolladora."} image={require("../assets/background6.png")} />
            </View>
        </Swiper>
    )
}



export default Profile;
