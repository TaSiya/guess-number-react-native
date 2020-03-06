import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const  StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game </Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput  />
        <View style={styles.buttonContainer}>
          <Button title="reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.6,
    elevation: 6,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%', 
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default StartGameScreen

