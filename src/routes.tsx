import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen';
const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
             <Tab.Screen 
              options={{
                tabBarIcon: ( { color})=> <Feather  color={color} name="home" size={20}/> 
              }} 
              name="Main" 
              component={MainScreen}
             />
             <Tab.Screen 
              name="About" 
              component={AboutScreen} 
              options={{
               tabBarIcon: ({ color})=> <Feather  color={color} name="trending-up" size={20}/> 
              }}
             />
            </Tab.Navigator>
        </NavigationContainer>
    )
}