import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import BackGroundimage from "./assets/images/background.png"
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constans/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }
  let screen = userNumber ? <GameScreen userNumber={userNumber}/> : <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

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
