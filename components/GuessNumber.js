import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card';
import inputContainer from '../constants/inputContainer';

import Input from '../components/Input';

const GuessNumber = props => {
  const {numberInputHandler} = props
  return (
    <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          bluOnSubmit
          autoCapitalize='none'
          authoCOrrect={false}
          keyboardType='number-pad'
          maxLength={2}
          style={styles.input}
          onChangeText= {numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button title='reset' onPress={() => {setEnteredValue(''); setGuess(0)}} color={Colors.accent} />
          </View>
          <View style={styles.buttonSize}>
            <Button title='Confirm' onPress={e => setGuess(Number(enteredValue))} color={Colors.primary} />
          </View>
        </View>
      </Card>
  )
}

const styles = StyleSheet.create({
  inputContainer: inputContainer.inputContainer
})

export default GuessNumber
