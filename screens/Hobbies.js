import React from 'react'
import { View } from 'react-native'
import HobbiesComponent from '../components/HobbiesComponent'
import Swiper from 'react-native-swiper'

const Hobbies = () => {
    return (
        <Swiper>
            <View>
                <HobbiesComponent title={'Hace tres años comencé a sacar fotos analógicas. Estas son algunas...'} image={require("../assets/background6.png")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/autoretrato.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/anita.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/sia.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/jupi.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/pastelera.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/amsterdam.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/dublin.jpg")} />
            </View>
            <View>
                <HobbiesComponent image={require("../assets/señor.jpg")} />
            </View>
            <View>
                <HobbiesComponent title={'También me gusta mucho la música, y hace cuatro años comencé a tocar el piano.'} image={require("../assets/background6.png")} />
            </View>
            <View>
                <HobbiesComponent title={'Hace dos años descubrí el yoga, y practico desde entonces.'} image={require("../assets/background6.png")} />
            </View>
            <View>
                <HobbiesComponent title={'Tengo muchos intereses, me encanta aprender sobre diferentes temas, pero estos son los que elijo tener presentes en mi dia a dia.'} image={require("../assets/background6.png")} />
            </View>
        </Swiper>
    )
}

export default Hobbies
