import React from 'react'
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Component
import { Ingredient } from '../components/Ingredient'

const IngredientStack = createStackNavigator()

const [burgundy, yellow, orange, blue] = ['#940303', '#fdc324', '#fd7b24', '#010a16']

export const IngredientScreen = () => {
  return (
    <>
      <IngredientStack.Navigator>
        <IngredientStack.Screen name='Ingredient' component={Ingredient}
          options={{
            headerTintColor: yellow,
            headerStyle: {
              backgroundColor: blue,
            }
          }}
        />
      </IngredientStack.Navigator>
    </>
  )
}
