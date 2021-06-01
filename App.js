import React from 'react'
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
// Screen
import { IngredientScreen } from './screens/IngredientScreen'
import { DrinkScreen } from './screens/DrinkScreen'
import { RandomScreen } from './screens/RandomScreen'
import { AboutScreen } from './screens/AboutScreen'
// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// Context 
import { AppProvider } from './context'

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Cocktails') {
                iconName = <FontAwesome5 name="cocktail" size={24} color={color} />
              } else if (route.name === 'Ingredient') {
                iconName = <MaterialIcons name="local-drink" size={24} color={color} />
              } else if (route.name === 'Random') {
                iconName = <FontAwesome name="random" size={24} color={color} />
              } else if (route.name === 'About') {
                iconName = <MaterialIcons name="info-outline" size={24} color={color} />
              }
              return iconName;
            }
          })}
          tabBarOptions={{
            activeTintColor: burgundy,
            inactiveTintColor: yellow,
            style: {
              backgroundColor: blue,
            }
          }}
        >
          <Tab.Screen name="Cocktails" component={DrinkScreen} />
          <Tab.Screen name="Ingredient" component={IngredientScreen} />
          <Tab.Screen name="Random" component={RandomScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
const [burgundy, yellow, blue] = ['#940303', '#fdc324', '#010a16']