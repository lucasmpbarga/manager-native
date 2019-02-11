import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 15,
        fontSize: 18,
        lineHeight: 23,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export {Input};