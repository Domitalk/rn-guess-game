import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return (
        <TextInput 
            // forwarding your props into the component 
            { ...props }
            style={{ ...styles.input, ...props.style }}
        />
    )
}; 

// this should just be a default base styling and any specific stuff should be in where i call Input component 
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})


export default Input; 