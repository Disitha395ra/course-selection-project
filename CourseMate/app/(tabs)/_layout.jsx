import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export default function _layout(){
    return(
        <Tabs>
            <Tabs.Screen name="home" 
            options={{
                tabBarIcon:({color,size})=><Ionicons name="home-outline" size={24} color="black" />
            }}
            />
            <Tabs.Screen name="explore" />
            <Tabs.Screen name="progress" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}