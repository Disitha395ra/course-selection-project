import React from 'react';
import {View, Text,Image} from 'react-native';
import Button from '../Shared/Button';
import { useRouter } from 'expo-router';

export default function NoCourse(){
    const router=useRouter();
    return(
        <View style={{
            marginTop:90,
            display:'flex',
            alignItems: 'center',
        }}>
            <Image source={require('../../assets/images/nocourse.png')}
                style={{
                    height: 200,
                    width: 200,
                }}
            />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 25,
                textAlign:'center',
            }}>You Don't Have Any Courses</Text>

            <Button text={'+ Create New Course'} onPress={()=>router.push('/addCourse')}/>
            <Button text={'Explore Existing Courses'} 
                type='outline'
            />

        </View>
    )
}