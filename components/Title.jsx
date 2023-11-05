import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

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
        color:'#ddb52f',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12,
        marginVertical:30,
    }
})