import React, { useState } from 'react'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Components
import { Drink } from '../components/Drink'
import { DetailedDrink } from '../components/DetailedDrink'


const DrinkStack = createStackNavigator()

const [burgundy, yellow, orange, blue] = ['#940303', '#fdc324', '#fd7b24', '#010a16']

export const DrinkScreen = () => {

  const [detail, setDetail] = useState('none')

  return (
    <>
      <DrinkStack.Navigator>
        <DrinkStack.Screen name='Cocktails' component={Drink}
          options={{
            headerTintColor: yellow,
            headerStyle: {
              backgroundColor: blue,
            }
          }}
        />
        <DrinkStack.Screen name='Details' component={DetailedDrink}
          options={{
            headerTintColor: yellow,
            headerStyle: {
              backgroundColor: blue,
            }
          }}
        />
      </DrinkStack.Navigator>
    </>
  )
}

