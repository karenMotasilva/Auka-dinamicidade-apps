import { StyleSheet, Text, View, TextInput, ViewStyle, ImageStyle, Button, } from 'react-native';
import { useState } from 'react'
import { Contador } from './componentes/contador';
import { ButtonEspecial } from './componentes/buttonEspecial';
import { ButtonWhat } from './componentes/buttonWhat';
import { Switch } from 'react-native';


export default function App() {
  const [toggle, setToogle] = useState(false)
  return (
    <View style={styles.container}>

      {toggle ? <ButtonWhat /> : <ButtonEspecial />}
      {/* <Button title='Trocar' onPress={() => setToogle(!toggle)} /> */}
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={toggle ? '#F5DD4B' : '#F4F3F4'}
        ios_backgroundColor='#3E3E3E'
        onValueChange={() => setToogle(!toggle)}
        value={toggle} />


      <ButtonEspecial />
      <Contador inicio={0} />
      <Contador inicio={0} />
      <Contador inicio={0} />
    </View>

  )
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
