import React from 'react'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Components
import { Random } from '../components/Random'

const RandomStack = createStackNavigator()

const [burgundy, yellow, orange, blue] = ['#940303', '#fdc324', '#fd7b24', '#010a16']

export const RandomScreen = () => {
  return (
    <>
      <RandomStack.Navigator>
        <RandomStack.Screen name='Random' component={Random}
          options={{
            headerTintColor: yellow,
            headerStyle: {
              backgroundColor: blue,
            }
          }}
        />
      </RandomStack.Navigator>
    </>
  )
}
