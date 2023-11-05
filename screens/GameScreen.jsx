import React from 'react'
import { Text, View } from 'react-native'

function GameScreen() {
  return (
    <View>
        <Text>Opponent's Guess</Text>
        GUESS
        <View>
            <Text>Higher or lowe?</Text>
        +-
        </View>
        <View>Log Rounds</View>
    </View>
  )
}

export default GameScreen