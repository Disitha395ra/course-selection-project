import React from 'react';
import {View, Text,Image} from 'react-native';
export default function NoCourse(){
    return(
        <View style={{
            marginTop:40,
        }}>
            <Image source={require('../../assets/images/nocourse.png')}/>
        </View>
    )
}