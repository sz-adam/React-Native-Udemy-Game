import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Colors from '../constans/colors'

function Title({children}) {
    return (
        <View>
            <Text style={styles.title}> {children}</Text>
        </View>
    )
}

export default Title

const styles=StyleSheet.create({
   
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.accent500,
        textAlign:'center',
        borderWidth:2,
        borderColor:Colors.accent500,
        padding:12,
        marginVertical:30,
    }
})