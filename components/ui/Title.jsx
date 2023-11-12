import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import Colors from '../../constans/colors'

function Title({ children }) {
    return (
        <View>
            <Text style={styles.title}> {children}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        //fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        //borderWidth: Platform.select({ios:0, android: 2}),
        borderColor: Colors.white,
        padding: 12,
        marginVertical: 30,
        maxWidth: '80%',
        width: 300
    }
})