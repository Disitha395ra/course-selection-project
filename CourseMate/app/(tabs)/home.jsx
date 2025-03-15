import {View, Text, Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import Header from '../../components/Home/Header';
import React from 'react';

export default function Home(){
    return(
        <View style={{
            padding:25,
            paddingTop:Platform.OS === 'ios' && 45
        }}>
            <Header/>
        </View>
    )
}

const styles = StyleSheet.create({

});