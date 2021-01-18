import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import List from './screens/List';
import Profile from './screens/Profile'
import ItEducation from './screens/ItEducation';
import Experience from './screens/Experience'
import Hobbies from './screens/Hobbies';

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Education" component={ItEducation} />
        <Stack.Screen name="Experience" component={Experience} />
        <Stack.Screen name="Hobbies" component={Hobbies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
