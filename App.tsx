
import { StyleSheet, Text, View, TextInput, ViewStyle, ImageStyle, Button, } from 'react-native';
import { useState } from 'react'


export default function App() {

  const [texto, setTexto] = useState('')

  let numero: number = 0
  const [numeroReativo, setNumeroReativo] = useState(1)

  return (
    <View style={styles.container}>
      <TextInput placeholder='Insira um texto'
        style={styles.inputStyle}
        onChangeText={(text) => {
          setTexto(text)
        }
        } />
      <Text>Texto : {texto}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title='+' onPress={() => {
          numero++;
          setNumeroReativo(numeroReativo + 1)
        }} />
        <Text style={{ fontSize: 35, paddingHorizontal: 20 }}>
          {numero}
        </Text>
        <Button title='-' onPress={() => {
          numero--
          setNumeroReativo(numeroReativo - 1)
        }} />
      </View>
      <Text style={{ fontSize: 35, paddingHorizontal: 20 }}>
        {numeroReativo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 20
  }
});
