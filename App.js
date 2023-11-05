import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import  BackGroundimage  from "./assets/images/background.png"

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={BackGroundimage}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundimage}
        >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>


  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundimage:{
    opacity:0.15
  }
});
