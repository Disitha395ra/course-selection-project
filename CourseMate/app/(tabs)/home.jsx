import {View, Text, Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import Header from '../../components/Home/Header';
import NoCourse from '../../components/Home/NoCourse';
import React from 'react';
import Colors from '../../constants/Colors';
export default function Home(){
    return(
        <View style={{
            padding:25,
            paddingTop:Platform.OS === 'ios' && 45,
            flex:1,
            backgroundColor:Colors.WHITE
        }}>
            <Header/>
            <NoCourse/>
        </View>
    )
}

const styles = StyleSheet.create({

});