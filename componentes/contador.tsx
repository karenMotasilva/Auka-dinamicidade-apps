import { StyleSheet, Text, View, TextInput, ViewStyle, ImageStyle, Button, Pressable, ToastAndroid } from 'react-native';
import { useState } from 'react'

export function Contador({ inicio }: { inicio: number }) {
    const [numeroReativo, setNumeroReativo] = useState(inicio)
    return (
        <View >
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Button title='+' onPress={() => {
                    setNumeroReativo(num => num + 1)
                }}
                />
                <Pressable style={{
                    borderWidth: 1,
                    borderRadius: 20, paddingHorizontal: '2%',
                    paddingVertical: '3%',
                    backgroundColor: 'green'
                }}
                    onLongPress={() => ToastAndroid.show(
                        'mensagem exibida abaixo', ToastAndroid.LONG,
                    )}>
                    <Text style={{ color: ' white' }} > + </Text>
                </Pressable>
                <Text style={{ fontSize: 35, paddingHorizontal: 20 }}>
                    {numeroReativo}
                </Text>
                <Button title='-'
                    onPress={() => {
                        setNumeroReativo(num => num - 1)
                    }} />
                <TextInput onBlur={() => console.log("passei")} placeholder='teste' 
                onFocus={()=> console.log('ganhei foco')}>

                </TextInput>
            </View>

        </View>
    );
}




