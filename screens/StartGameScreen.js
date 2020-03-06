import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }
  return (
    <TouchableWithoutFeedback>
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game </Text>
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
            <Button title='reset' onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.buttonSize}>
            <Button title='Confirm' onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  buttonSize: {
    width: '40%'
  },
  input: {
    width: '50%',
    textAlign: 'center'
  }
});

export default StartGameScreen;
