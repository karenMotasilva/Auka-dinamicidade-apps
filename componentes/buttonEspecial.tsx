import { StyleSheet, Text, View, TextInput, ViewStyle, ImageStyle, Button, Pressable, ToastAndroid, Image, } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export function ButtonEspecial() {
    return (
     
        <View>
            <View>
                <Pressable 
                onPress={() => console.log("Presionado")}>
                    <AntDesign name="audio" size={60} color="red" />
                    <Text>Gravar</Text>
                </Pressable>
            </View>
            
    
        </View>
    )
}