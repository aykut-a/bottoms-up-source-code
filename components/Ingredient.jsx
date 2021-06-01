import React, { useState, useCallback } from 'react'
import { Text, View, TextInput, ScrollView, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
// Icons
import { MaterialIcons } from '@expo/vector-icons'
// Styles 
import { styles, yellow } from '../styles/global'

export const Ingredient = () => {

  const [ingredient, setIngredient] = useState('')
  const [ingredientName, setIngredientName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchIngredient = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`)
      const data = await response.json()
      setIngredient(data.ingredients[0])
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
  })

  return (
    <>
      <ScrollView style={styles.page}>

        <Text style={styles.yellowText}>Enter an ingredient name and find out!</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.nameInput} onChangeText={(val) => setIngredientName(val)} placeholder='eg.Vodka'
            placeholderTextColor={yellow} />
          <TouchableWithoutFeedback onPress={() => fetchIngredient()}>
            <View>
              <MaterialIcons style={styles.searchIcon} name="search" size={26} color="white" />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {loading && ingredientName !== '' ? <ActivityIndicator color={yellow} size={90} style={styles.spinner} />
          : ingredient === '' ? <Text></Text>
            :
            <View style={styles.ingredientContainer}>
              <Text style={styles.ingredientName}>{ingredient.strIngredient}</Text>
              <Text style={styles.whiteText}>Alcohol:{ingredient.strAlcohol}</Text>
              <Text style={styles.whiteText}>Type:{ingredient.strType}</Text>
              <Text style={styles.longWhiteText}>{ingredient.strDescription}</Text>
            </View>
        }
      </ScrollView>
    </>
  )
}
