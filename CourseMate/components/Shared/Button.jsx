import React from 'react';
import { View, Text } from 'react-native';

export default function Button({ text, type = "fill", onPress }) {
    return (

        <TouchableOpacity onPress={onPress} style={{
            padding: 15,
            width: '100%',
            borderRadius: 15,
            marginTop: 15,
            backgroundColor: type == 'fill' ? Colors.PRIMARY : Colors.WHITE
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 18,
                color: type == 'fill' ? Colors.WHITE : Colors.PRIMARY
            }}>{text}</Text>
        </TouchableOpacity>
    )
}