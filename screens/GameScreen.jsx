import React from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Title from '../components/ui/Title'
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber }) {

  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  function nextGeusshandler(direction) {

    if ((direction === 'lower' && currentGuess < userNumber) || direction === 'greater' && currentGuess > userNumber) {
      Alert.alert("Dont't lie !", 'YOu know that this is wrong ...', [{text: 'Sorry!',style:'cancel'}])
      return
    }
      if (direction === 'lower') {
        maxBoundary = currentGuess
      } else {
        minBoundary = currentGuess + 1
      }
      const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(newRndNumber)
    }
  

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <NumberContainer>{currentGuess} </NumberContainer>
      <View>
        <Text>Higher or lowe?</Text>
        <View>
          <PrimaryButton onPress={nextGeusshandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGeusshandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>

      </View>
      <View><Text>Log Rounds</Text></View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 22,
  },

})