import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
// Context
import { useGlobalContext } from '../context'
// Styles
import { styles, yellow } from '../styles/global'

export const DetailedDrink = ({ }) => {

  const [loading, setLoading] = useState(false)
  const { detailedDrink } = useGlobalContext()
  const [drink, setDrink] = useState('')
  const [ingredients, setIngredients] = useState([])

  const fetchCocktail = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${detailedDrink}`)
      const data = await response.json()
      setDrink(data.drinks[0])
      let d = data.drinks[0]
      setIngredients([d.strIngredient1, d.strIngredient2, d.strIngredient3, d.strIngredient4, d.strIngredient5])
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
  })

  useEffect(() => {
    fetchCocktail()
  }, [])

  return (
    <>
      {loading ?
        <View style={styles.page}>
          <ActivityIndicator style={styles.spinner} size={90} color={yellow} />
        </View>
        :
        <View style={styles.page}>
          <Image source={{ uri: drink.strDrinkThumb }} style={styles.mediumImage} />
          <Text style={styles.whiteText}><Text style={styles.spanYellow}>Name:</Text> {drink.strDrink}</Text>
          <Text style={styles.whiteText}><Text style={styles.spanYellow}>Info:</Text>  {drink.strAlcoholic}</Text>
          <Text style={styles.whiteText}><Text style={styles.spanYellow}>Glass:</Text>  {drink.strGlass}</Text>
          <Text style={styles.longWhiteText}><Text style={styles.spanYellow}>Ingredients:</Text>  {ingredients[0] !== null ? ingredients[0] : ''}, {ingredients[1] !== null ? ingredients[1] : ''}, {ingredients[2] !== null ? ingredients[2] : ''}, {ingredients[3] !== null ? ingredients[3] : ''}, {ingredients[4] !== null ? ingredients[4] : ''}, {ingredients[5] !== null ? ingredients[5] : ''}</Text>
          <Text style={styles.longWhiteText}><Text style={styles.spanYellow}>Instructions:</Text>  {drink.strInstructions}</Text>
        </View>
      }
    </>
  )
}