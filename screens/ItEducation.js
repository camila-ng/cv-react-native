import React from 'react';
import { View } from 'react-native';
import ItEducationComponent from '../components/ItEducationComponent';
import Swiper from 'react-native-swiper'

const ItEducation = () => {
    return (
        <Swiper>
            <View>
                <ItEducationComponent curso1={'Desarrollo Backend - CourseIt'}  curso2={'Desarrollo Frontend - CourseIt'} curso3={'Professional Testing Master - UTN'} curso5={'Introduction to Next.js - Frontend Masters'} curso6={'Deep JavaScript Foundations - Frontend Masters'} curso7={'Complete Intro to React - Frontend Masters'} curso8={'JavaScript: From Fundamentals to Functional JS. - Frontend Masters'}/>
            </View>
            
        </Swiper>
    )
}

export default ItEducation
