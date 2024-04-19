import React from 'react'
import { Text, View } from 'react-native'
import Button from './Button';
import { Styles } from '../styles/Styles'

interface NumpadProps {
  baseNumber: any,
  targerNumber: any,
  setBaseNumber: any,
  operation: string,
  setOperation: string,
  operationNumber: number,
  setOperationNumber: number,
}

const Numpad = ({ baseNumber, targetNumber, setBaseNumber, operation, setOperation, operationNumber, setOperationNumber }: NumpadProps) => {

  const handleNumberPress = (buttonValue: string) => {
    if (baseNumber == 0) {
      setBaseNumber(buttonValue)
    }
    else if (baseNumber.length < 10) {
      setBaseNumber(baseNumber + buttonValue)
    }
  }

  const handleClear = () => {
    setBaseNumber(0);
  }

  const handleBackspace = () => {
    if (baseNumber == 0) {
      //do nothing
    }
    else if (baseNumber.length < 2) {
      setBaseNumber(0)
    }
    else
      setBaseNumber(baseNumber.slice(0, -1))
  }

  const getResult = () => {
    switch (operation) {
      case "+":
        setBaseNumber(parseInt(operationNumber) + parseInt(baseNumber))
        break
      case "-":
        setBaseNumber(parseInt(operationNumber) - parseInt(baseNumber))
        break
      case "*":
        setBaseNumber(parseInt(operationNumber) * parseInt(baseNumber))
        break
      case "/":
        setBaseNumber(parseInt(operationNumber) / parseInt(baseNumber))
        break
      case "%":
        setBaseNumber(parseInt(baseNumber) * 0.01)
        break
    }
  }

  const handleOperation = (buttonValue: string) => {
    setOperation(buttonValue)
    setOperationNumber(baseNumber)
    setBaseNumber('')
  }

  // const handleSwitch = () => {
  //   setBaseNumber(targetNumber)
  // }

  return (
    <View style={Styles.numpad}>
      <View style={Styles.row}>
        <Button title='C' isSecondary isDarkText onPress={() => handleClear()} />
        <Button title='⇅' isSecondary isDarkText onPress={() => alert('Implementing functionality')} />
        <Button title='%' isSecondary isDarkText onPress={() => alert('Implementing functionality')} />
        <Button title='÷' isPrimary onPress={() => handleOperation('/')} />
      </View>

      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} />
        <Button title='8' onPress={() => handleNumberPress('8')} />
        <Button title='9' onPress={() => handleNumberPress('9')} />
        <Button title='×' isPrimary onPress={() => handleOperation('*')} />
      </View>

      <View style={Styles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')} />
        <Button title='5' onPress={() => handleNumberPress('5')} />
        <Button title='6' onPress={() => handleNumberPress('6')} />
        <Button title='-' isPrimary onPress={() => handleOperation('-')} />
      </View>

      <View style={Styles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')} />
        <Button title='2' onPress={() => handleNumberPress('2')} />
        <Button title='3' onPress={() => handleNumberPress('3')} />
        <Button title='+' isPrimary onPress={() => handleOperation('+')} />
      </View>

      <View style={Styles.row}>
        <Button title='0' onPress={() => handleNumberPress('0')} />
        <Button title='.' onPress={() => handleNumberPress('.')} />
        <Button title='⌫' onPress={() => handleBackspace()} />
        <Button title='=' isPrimary onPress={() => getResult()} />
      </View>
    </View>

  )
};
export default Numpad
