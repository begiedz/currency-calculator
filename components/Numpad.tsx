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
  const clear = () => {
    setPrimaryNumber('');
  }
  const primaryNumberDisplay = () => {
    return <Text style={Styles.displayPrimaryNumber}>{primaryNumber}</Text>
  }

  return (
    <View style={Styles.numpad}>
      {primaryNumberDisplay()}
      <View style={Styles.row}>
        <Button title='C' isSecondary isDarkText onPress={() => clear()} />
        <Button title='⇅' isSecondary isDarkText onPress={() => alert('Implementing functionality')} />
        <Button title='%' isSecondary isDarkText onPress={() => alert('Implementing functionality')} />
        <Button title='÷' isPrimary onPress={() => alert('Implementing functionality')} />
      </View>

      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} />
        <Button title='8' onPress={() => handleNumberPress('8')} />
        <Button title='9' onPress={() => handleNumberPress('9')} />
        <Button title='×' isPrimary onPress={() => alert('Implementing functionality')} />
      </View>

      <View style={Styles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')} />
        <Button title='5' onPress={() => handleNumberPress('5')} />
        <Button title='6' onPress={() => handleNumberPress('6')} />
        <Button title='-' isPrimary onPress={() => alert('Implementing functionality')} />
      </View>

      <View style={Styles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')} />
        <Button title='2' onPress={() => handleNumberPress('2')} />
        <Button title='3' onPress={() => handleNumberPress('3')} />
        <Button title='+' isPrimary onPress={() => alert('Implementing functionality')} />
      </View>

      <View style={Styles.row}>
        <Button title='0' onPress={() => handleNumberPress('0')} />
        <Button title=',' onPress={() => alert('Implementing functionality')} />
        <Button title='⌫' onPress={() => alert('Implementing functionality')} />
        <Button title='=' isPrimary onPress={() => alert('Implementing functionality')} />
      </View>
    </View>

  )
};
export default Numpad
