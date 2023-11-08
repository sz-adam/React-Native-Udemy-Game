import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import BackGroundimage from "./assets/images/background.png"
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constans/colors'
import {useFonts} from 'expo-font'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(true)

  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }

  function gameOverHandler() {
    setGameOver(true)
  }

  let screen = userNumber ? <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler}/> : <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (gameOver && userNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={BackGroundimage}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundimage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundimage: {
    opacity: 0.15
  }
});
