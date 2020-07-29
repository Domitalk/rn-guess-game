import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import StartGameScreen from '../screens/StartGameScreen';

const Card = props => {
    return (
        // this style component will override any specific style we pass down 
        <View style={{...styles.card, ...props.style}} >
            {/* this makes it a simple wrapper  */}
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, 
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
})


export default Card;