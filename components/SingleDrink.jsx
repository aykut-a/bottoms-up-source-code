import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
// Icons
import { MaterialIcons } from '@expo/vector-icons';
// Context
import { useGlobalContext } from '../context'
// Styles
import { styles } from '../styles/global'

export const SingleDrink = ({ item, navigation }) => {

  const { setDetailedDrink } = useGlobalContext()

  const showDetailedDrink = (str) => {
    setDetailedDrink(str)
    navigation.navigate('Details')
  }

  return (
    <>
      <View style={styles.singleDrink}>
        <Image style={styles.drinkImage} source={{ uri: item.strDrinkThumb }} />
        <Text style={styles.drinkName}>{item.strDrink}</Text>
        <Text style={styles.alcStat}>{item.strAlcoholic}</Text>
        <TouchableWithoutFeedback onPress={() => showDetailedDrink(item.idDrink)}>
          <View style={styles.drinkButton}>
            <Text style={styles.buttonText}>Details</Text>
            <MaterialIcons name="local-drink" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}
