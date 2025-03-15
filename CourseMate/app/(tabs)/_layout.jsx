import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Tabs} from 'expo-router'
import React from 'react';

export default function _layout(){
    return(
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="explore" />
            <Tabs.Screen name="progress" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}