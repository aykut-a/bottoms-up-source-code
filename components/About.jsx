import React from 'react'
import { Text, View } from 'react-native'
// Import style
import { styles } from '../styles/global'

export const About = () => {
  return (
    <>
      <View style={styles.aboutPage}>
        <Text style={styles.spanYellow}>Cocktails</Text>
        <Text style={styles.longWhiteText}>You can search up cocktails either by cocktail name or ingredient name.</Text>
        <Text style={styles.spanYellow}>Ingredients</Text>
        <Text style={styles.longWhiteText}>If you'd want to find out more about the ingredients that are in your cocktail, you can use the ingredient search, see what you are adding to your drink.</Text>
        <Text style={styles.spanYellow}>Random</Text>
        <Text style={styles.longWhiteText}>And if you want to leave it to chance, you can get a random cocktail as well.</Text>

        <Text style={styles.longWhiteText}>All the data is provided from <Text style={styles.spanYellow}>Cocktail DB</Text>.</Text>
        <Text style={styles.aboutWarning}>Please enjoy and <Text style={styles.spanYellow}>drink responsibly.</Text></Text>
      </View>
    </>
  )
}

