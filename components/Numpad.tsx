import React from 'react'
import { Text, View, StyleSheet, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import Button from './Button';
import { Styles } from '../styles/Styles'

const Numpad = () => {

  const [primaryNumber, setPrimaryNumber] = React.useState('')
  const [secondaryNumber, setSecondaryNumber] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [result, setResult] = React.useState<Number | null>(null)

  const handleNumberPress = (buttonValue: string) => {
    if (primaryNumber.length < 10) {
      setPrimaryNumber(primaryNumber + buttonValue)
    }
  }

  return (
    <View style={Styles.numpad}>
      <View style={Styles.row}>
        <Button title='C' isSecondary onPress={() => alert('xd')} />
        <Button title='+/-' isSecondary onPress={() => alert('xd')} />
        <Button title='%' isSecondary onPress={() => alert('xd')} />
        <Button title='÷' isPrimary onPress={() => alert('xd')} />
      </View>

      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} />
        <Button title='8' onPress={() => handleNumberPress('8')} />
        <Button title='9' onPress={() => handleNumberPress('9')} />
        <Button title='×' isPrimary onPress={() => alert('xd')} />
      </View>

      <View style={Styles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')} />
        <Button title='5' onPress={() => handleNumberPress('5')} />
        <Button title='6' onPress={() => handleNumberPress('6')} />
        <Button title='-' isPrimary onPress={() => alert('xd')} />
      </View>

      <View style={Styles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')} />
        <Button title='2' onPress={() => handleNumberPress('2')} />
        <Button title='3' onPress={() => handleNumberPress('3')} />
        <Button title='+' isPrimary onPress={() => alert('xd')} />
      </View>

      <View style={Styles.row}>
        <Button title='0' onPress={() => alert('xd')} />
        <Button title=',' onPress={() => alert('xd')} />
        <Button title='del' onPress={() => alert('xd')} />
        <Button title='=' isPrimary onPress={() => alert('xd')} />
      </View>
    </View>

  )
};
export default Numpad
