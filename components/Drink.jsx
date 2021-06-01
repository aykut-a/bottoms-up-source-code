import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, TextInput, FlatList, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
// Component
import { SingleDrink } from './SingleDrink'
// Icons
import { MaterialIcons } from '@expo/vector-icons';
// Picker (Selector)
import { Picker } from '@react-native-picker/picker';
// Styles
import { styles, yellow } from '../styles/global'

export const Drink = ({ navigation }) => {

  const [cocktails, setCocktails] = useState([]) // Main Data

  const [selectedType, setSelectedType] = useState('byname')  // Search Type

  const [cocktailName, setCocktailName] = useState('a')
  const [ingredientName, setIngredientName] = useState('rum')

  const [loading, setLoading] = useState(false) // State
  const [error, setError] = useState(false) // useState

  const [url, setUrl] = useState(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)

  const handleUrl = () => {
    if (selectedType === 'byname') { setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`) }
    if (selectedType === 'byingredient') { setUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`) }
  }

  const fetchCocktails = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      setCocktails(data.drinks)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
  })

  useEffect(() => {
    handleUrl()
  }, [selectedType, cocktailName, ingredientName])

  return (
    <>
      <View style={styles.page}>

        <Picker
          style={styles.picker}
          selectedValue={selectedType}
          onValueChange={(itemValue, itemIndex) => { setSelectedType(itemValue) }}
        >
          <Picker.Item label="Search By Name" value="byname" />
          <Picker.Item label="Search By Ingredient" value="byingredient" />
        </Picker>

        <Text style={styles.yellowText}>Search up cocktails by {selectedType === 'byname' ? 'cocktail name.' : 'ingredient name.'}</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.nameInput} onChangeText={(val) => {
            if (selectedType === 'byname') { setCocktailName(val) }
            if (selectedType === 'byingredient') { setIngredientName(val) }
          }}
            placeholder={selectedType === 'byname' ? 'eg. Bloody Mary' : 'eg. Rum'}
            placeholderTextColor={yellow}
          />
          <TouchableWithoutFeedback onPress={() => fetchCocktails()}>
            <View>
              <MaterialIcons style={styles.searchIcon} name="search" size={26} color="white" />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {loading ? <ActivityIndicator color={yellow} size={90} style={styles.spinner} /> :
          <FlatList data={cocktails}
            contentContainerStyle={styles.container}
            numColumns={2}
            keyExtractor={(item) => item.idDrink}
            renderItem={({ item }) => {
              return <SingleDrink navigation={navigation} item={item} />
            }}
          />
        }
      </View>
    </>
  )
}

