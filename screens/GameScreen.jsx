import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Title from '../components/Title'

function GameScreen() {
  return (
    <View style={styles.screen}>
       <Title >Opponent's Guess</Title>
       {/***GUESS**/}
        <View>
            <Text>Higher or lowe?</Text>
       {/***+-**/}
        </View>
        <View><Text>Log Rounds</Text></View>
    </View>
  )
}

export default GameScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:22,
    },

})