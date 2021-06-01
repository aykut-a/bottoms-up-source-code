import React from 'react'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Components
import { About } from '../components/About'

const AboutStack = createStackNavigator()

const [burgundy, yellow, orange, blue] = ['#940303', '#fdc324', '#fd7b24', '#010a16']

export const AboutScreen = () => {
  return (
    <>
      <AboutStack.Navigator>
        <AboutStack.Screen name='About' component={About}
          options={{
            headerTintColor: yellow,
            headerStyle: {
              backgroundColor: blue,
            }
          }}
        />
      </AboutStack.Navigator>
    </>
  )
}
