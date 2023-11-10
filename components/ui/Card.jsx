import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../../constans/colors'

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, //androidon shadow
        shadowColor: 'black', //ios shadow
        shadowOffset: { width: 0, height: 2 },//ios shadow
        shadowRadius: 6,//ios shadow
        shadowOpacity: 0.25,//ios shadow
    },
})