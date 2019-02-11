import React from 'react';
import { Text, View } from 'react-native';

const Header = ({headerText}) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    ); 
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderColor: '#000000',
        borderBottomWidth: 3
    },
    textStyle: {
        fontSize: 25
    }
};

export { Header };