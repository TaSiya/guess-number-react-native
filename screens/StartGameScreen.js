import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import GuessNumber from '../components/GuessNumber';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [guess, setGuess] = useState(0)
  const [answer, setAnswer] = useState('')
  const [randomNumb, setRandomNumb] = useState(Math.floor((Math.random()*100)+1))
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }
  const handleGreater = () => {
    if(guess > randomNumb) {
      setAnswer('greater')
    }
    else {
      setAnswer('wrong')
    }
  }
  const handleLess = () => {
    if(guess < randomNumb) {
      setAnswer('less')
    }
    else {
      setAnswer('wrong')
    }
  }
  return (
    <TouchableWithoutFeedback>
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game </Text>
      <Text>Random numb: {randomNumb}</Text>
      {
        guess === 0 && 
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
      }
      {guess != 0 &&
      <View>
        <Button title='Start Over' onPress={() => {setEnteredValue(''); setGuess(0)}} color={Colors.primary} />
        </View>
      }
      { guess > 0 &&
      <View style={styles.screen}>
          <Card style={styles.inputContainer}>
            <Text>Is the number?</Text>
            <View style={styles.buttonContainer}>
               
              <View>
                <Button title="Greater" onPress={handleGreater}/>
              </View>
              <View>
                <Button title="Less" onPress={handleLess}/>
              </View>
            </View>
          </Card>
      <Text>Answer: {answer}</Text>
      </View>
      }
      {
        answer === 'wrong' &&
        <View style={styles.screen}>
          <Text style={styles.title}  > Game Over</Text>
        </View>
      }
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
