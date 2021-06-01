import { StyleSheet } from 'react-native'
// Import dimensions, height, width
import { Dimensions } from 'react-native'
let vw = Dimensions.get("screen").width / 100
let vh = Dimensions.get("screen").height / 100
// Colors 
export const [burgundy, yellow, orange] = ['#940303', '#fdc324', '#fd7b24']

// Styles
export const styles = StyleSheet.create({

  // Common Styling 
  page: {
    backgroundColor: burgundy,
    flex: 1,
    padding: 10,
  },

  mediumImage: {
    width: 200,
    height: 300,
    marginHorizontal: 'auto',
  },

  whiteText: {
    color: 'white'
  },

  yellowText: {
    color: yellow,
  },

  longWhiteText: {
    color: 'white',
    textAlign: 'justify'
  },

  spanYellow: {
    color: yellow,
    fontWeight: 'bold'
  },

  spinner: {
    marginTop: 100,
  },


  // Name Component ///////////////////////////////////////////////////////////////////
  picker: {
    height: 40,
    fontSize: 14,
    backgroundColor: 'white',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },

  nameInput: {
    backgroundColor: burgundy,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: yellow,
    color: yellow,
    flex: 1,
    height: 40,
  },

  searchIcon: {
    backgroundColor: orange,
    padding: 5,
    paddingHorizontal: 7,
    height: 40,
  },

  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Ingredient Component ///////////////////////////////////////////////////////////////////////
  ingredientName: {
    color: yellow,
    fontSize: 20,
  },

  // Random Component ///////////////////////////////////////////////////////////////////

  randomButton: {
    backgroundColor: orange,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 'auto',
    marginVertical: 20,
  },

  randomButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Single Drink Component ///////////////////////////////////////////////////////////////////

  singleDrink: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 42 * vw,
    marginHorizontal: 5,
    backgroundColor: 'white',
    marginTop: 10
  },
  drinkName: {
    color: burgundy,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  alcStat: {
    color: 'gray',
    paddingHorizontal: 10,
  },
  drinkImage: {
    width: 42 * vw,
    height: 42 * vw,
    resizeMode: 'contain'
  },
  drinkButton: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: orange,
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  // About Component  ///////////////////////////////////////////////////////////////////
  aboutPage: {
    backgroundColor: burgundy,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  aboutWarning: {
    color: 'white',
    marginTop: 30,
  }
})