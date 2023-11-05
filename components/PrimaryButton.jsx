
import { Text, View, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children,onPress }) {

  function presshandler() {
    onPress()
  }


  return (
    <View style={styles.buttonOuterConteiner}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}       
        android_ripple={{ color: '#92063c' }}
        onPress={onPress}>
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterConteiner: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
   
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',    
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: { //ios button 
    opacity: 0.75,
  },
})