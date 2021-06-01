import React, { useState, useCallback } from 'react'
import { Text, View, TouchableWithoutFeedback, Image, ScrollView, ActivityIndicator } from 'react-native'
// Icons
import { MaterialIcons } from '@expo/vector-icons';
// Styles
import { styles, yellow } from '../styles/global'

export const Random = () => {

  const [randomCocktail, setRandomCocktail] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchRandomCocktail = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      const data = await response.json()
      setRandomCocktail(data.drinks[0])
      let d = data.drinks[0]
      setIngredients([d.strIngredient1, d.strIngredient2, d.strIngredient3, d.strIngredient4, d.strIngredient5])
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
  })

  return (
    <>
      <ScrollView style={styles.page}>
        <TouchableWithoutFeedback onPress={() => { fetchRandomCocktail() }}>
          <View style={styles.randomButton}>
            <Text style={styles.randomButtonText}>Get Random Cocktail</Text>
            <MaterialIcons name="local-drink" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>

        {loading && randomCocktail !== '' ? <ActivityIndicator size={90} color={yellow} style={styles.spinner} />
          : randomCocktail === '' ? <Text></Text>
            :
            <View style={styles.randomContainer}>
              <Image source={{ uri: randomCocktail.strDrinkThumb }} style={styles.mediumImage} />
              <View>
                <Text style={styles.whiteText}><Text style={styles.spanYellow}>Name:</Text> {randomCocktail.strDrink}</Text>
                <Text style={styles.whiteText}><Text style={styles.spanYellow}>Info:</Text>  {randomCocktail.strAlcoholic}</Text>
                <Text style={styles.whiteText}><Text style={styles.spanYellow}>Glass:</Text>  {randomCocktail.strGlass}</Text>
                <Text style={styles.longWhiteText}><Text style={styles.spanYellow}>Ingredients:</Text>  {ingredients[0] !== null ? ingredients[0] : ''}, {ingredients[1] !== null ? ingredients[1] : ''}, {ingredients[2] !== null ? ingredients[2] : ''}, {ingredients[3] !== null ? ingredients[3] : ''}, {ingredients[4] !== null ? ingredients[4] : ''}, {ingredients[5] !== null ? ingredients[5] : ''}</Text>
                <Text style={styles.longWhiteText}><Text style={styles.spanYellow}>Instructions:</Text>  {randomCocktail.strInstructions}</Text>
              </View>
            </View>
        }
      </ScrollView>
    </>
  )
}