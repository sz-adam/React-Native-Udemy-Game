
import { Text, View, Pressable, StyleSheet } from 'react-native'
import Colors from '../../constans/colors'


function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterConteiner}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        android_ripple={{ color: Colors.primary600 }}
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
    backgroundColor: Colors.primary500,
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