import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Button from '../../components/Shared/Button';
import { GenerateTopicsAIModel } from '../../config/AiModel';
export default function AddCourse() {

    const [loading, setloading]=useState(false);
    const [userInput, setuserInput] = useState();
    const onGenerateTopic=async()=>{
        setloading(true);
        //get topic ideas from AI model
        const PROMPT=userInput.Prompt.IDEA;
        const aiResp=await GenerateTopicsAIModel.sendMessage(PROMPT);
        const topicIdea = aiResp.response.text();
        console.log(topicIdea);
        setloading(false);
    }
    return (
        <View style={{
            padding: 25,
            backgroundColor: Colors.WHITE,
            flex: 1,
            paddingTop:50,
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
            }}>Create New Course</Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 25,
                marginTop: 8,
            }}>What you want to learn today?</Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 20,
                marginTop: 8,
                color: Colors.GRAY
            }}>What course you want to create (ex.Learn Python,Learn React Js, Digital Marcketing, etc..)</Text>

            <TextInput placeholder='(Ex. Learn Python, Learn 12th Chemistry)'
                style={styles.textInput}
                numberOfLines={3}
                multiline={true}
                onChangeText={(value)=>setuserInput(value)}
            />

            <Button text={'Generate Topic'} type='outline' 
            onPress={()=>onGenerateTopic()} loading={loading}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        height: 100,
        marginTop: 10,
        alignItems: 'flex-start',
        fontSize: 18,
    }
})