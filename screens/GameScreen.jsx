import React from 'react'
import { View, StyleSheet, Alert, Text, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem';

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

function GameScreen({ userNumber, gameOverHandler }) {

  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])


  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length)
    }
  }, [currentGuess, userNumber, gameOverHandler])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  function nextGeusshandler(direction) {

    if ((direction === 'lower' && currentGuess < userNumber) || direction === 'greater' && currentGuess > userNumber) {
      Alert.alert("Dont't lie !", 'YOu know that this is wrong ...', [{ text: 'Sorry!', style: 'cancel' }])
      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
    setGuessRounds(prevGessRounds => [newRndNumber, ...prevGessRounds])
  }

  const guessRoundsListLength = guessRounds.length


  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <NumberContainer>{currentGuess} </NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>Higher or lowe?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGeusshandler.bind(this, 'lower')}><Ionicons name='md-remove' size={24} color='white' /></PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGeusshandler.bind(this, 'greater')}><Ionicons name='md-add' size={24} color='white' /></PrimaryButton>
          </View>
        </View>
      </Card>

      {/*{guessRounds.map(guessRound =><Text key={guessRound}>{guessRound}</Text>)}**/}
      <View style={styles.listContainer}>
        <FlatList data={guessRounds}
          renderItem={(itemData) =>
            <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
          keyExtractor={(item) => item} />

      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 22,
  },
  InstructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },

})