import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad' 
        />
      <PrimaryButton >Reset</PrimaryButton>
      <PrimaryButton >Confrirm</PrimaryButton>
    </View>

  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //androidon shadow
    shadowColor: 'black', //ios shadow
    shadowOffset: { width: 0, height: 2 },//ios shadow
    shadowRadius: 6,//ios shadow
    shadowOpacity: 0.25,//ios shadow
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
})