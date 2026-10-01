import { View,Text,Button, Pressable,Image } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export function ButtonWhat(){
     return(
        <View>
            <View>
                <Pressable>
                    <Image style={{width: 70, height: 70}}
                    source={{uri:'https://th.bing.com/th/id/OIP.GbsrglNpiRVjIa8pKAcUzAHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3'}}/>
                </Pressable>
            </View>

        </View>
       
     )
     
}