import React from 'react'
import { View } from 'react-native'
import ExperienceComponent from '../components/ExperienceComponent';
import Swiper from 'react-native-swiper'

const Experience = () => {
    return (
            <Swiper>
                <View>
                    <ExperienceComponent title={"2 0 1 5 - 2 0 1 9"} subtitle={"Acompañante terapéutica e integradora escolar, especializada en trastornos del lenguaje y TEA. Equipo ADIP"} image={require("../assets/background7.png")}/>
                </View>
                <View>
                    <ExperienceComponent title={"2 0 2 0 - actualidad"} subtitle={"Desarrolladora Frontend "} image={require("../assets/background7.png")}/>
                </View>
            </Swiper>
    )
}


export default Experience
