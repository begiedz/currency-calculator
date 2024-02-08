import React from 'react'
import { Text, View } from 'react-native'
import Button from './Button';
import { Styles } from '../styles/Styles'

interface NumpadProps {
  baseNumber: any, setBaseNumber: any
}
const Numpad = ({ baseNumber, setBaseNumber }: NumpadProps) => {

  const handleNumberPress = (buttonValue: string) => {
    if (baseNumber.length < 10) {
      setBaseNumber(baseNumber + buttonValue)
    }
  }
  const clear = () => {
    setBaseNumber('');
  }

  return (
    <View style={Styles.numpad}>
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
