import React from 'react'
import { Dimensions, Platform, View } from 'react-native'

import { useAppContext } from '../context/AppContext';
import Button from './Button';
import { numpadStyles } from '../styles/Styles'

const Numpad = () => {

  const {
    baseNumber,
    setBaseNumber,
    targetNumber,
    operation,
    setOperation,
    operationNumber,
    setOperationNumber,
  } = useAppContext();

  const windowWidth = Dimensions.get('window').width;

  const handleNumberPress = (buttonValue: string) => {
    console.log(windowWidth);

    // if platform is web and is on phone vertical view
    if (Platform.OS === 'web' && windowWidth < 450) {
      if (baseNumber === '0') {
        setBaseNumber(buttonValue)
      } else if (baseNumber.length < 8) {
        setBaseNumber(baseNumber + buttonValue)
      }

    } else {
      if (baseNumber === '0') {
        setBaseNumber(buttonValue)
      }
      else if (baseNumber.length < 12) {
        setBaseNumber(baseNumber + buttonValue)
      }
    }


  }

  const handleClear = () => {
    setBaseNumber('0');
  }

  const handleBackspace = () => {
    if (baseNumber === '0') {
      //do nothing
    }
    else if (baseNumber.length < 2) {
      setBaseNumber('0')
    }
    else
      setBaseNumber(baseNumber.slice(0, -1))
  }

  const handleSwap = (targetNumber: number) => {
    setBaseNumber(targetNumber.toFixed(2).toString())
  }

  const getResult = () => {
    const result =
      operation === '+' ? parseFloat(operationNumber) + parseFloat(baseNumber)
        : operation === '-' ? parseFloat(operationNumber) - parseFloat(baseNumber)
          : operation === '*' ? parseFloat(operationNumber) * parseFloat(baseNumber)
            : operation === '/' ? parseFloat(operationNumber) / parseFloat(baseNumber)
              : 0;
    setBaseNumber(result.toString());
  };

  const handleOperation = (buttonValue: string) => {
    setOperation(buttonValue)
    setOperationNumber(baseNumber)
    setBaseNumber('')
  }

  return (
    <View style={numpadStyles.numpad}>
      <View style={numpadStyles.row}>
        <Button title='C' isSecondary isDarkText onPress={() => handleClear()} />
        <Button title='⌫' isSecondary isDarkText onPress={() => handleBackspace()} />
        <Button title='⇅' isSecondary isDarkText onPress={() => handleSwap(targetNumber)} />
        <Button title='÷' isPrimary onPress={() => handleOperation('/')} />
      </View>

      <View style={numpadStyles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} />
        <Button title='8' onPress={() => handleNumberPress('8')} />
        <Button title='9' onPress={() => handleNumberPress('9')} />
        <Button title='×' isPrimary onPress={() => handleOperation('*')} />
      </View>

      <View style={numpadStyles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')} />
        <Button title='5' onPress={() => handleNumberPress('5')} />
        <Button title='6' onPress={() => handleNumberPress('6')} />
        <Button title='-' isPrimary onPress={() => handleOperation('-')} />
      </View>

      <View style={numpadStyles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')} />
        <Button title='2' onPress={() => handleNumberPress('2')} />
        <Button title='3' onPress={() => handleNumberPress('3')} />
        <Button title='+' isPrimary onPress={() => handleOperation('+')} />
      </View>

      <View style={numpadStyles.row}>
        <Button title='0' isWide onPress={() => handleNumberPress('0')} />
        <Button title='.' onPress={() => handleNumberPress('.')} />
        <Button title='=' isPrimary onPress={() => getResult()} />
      </View>
    </View>

  )
};
export default Numpad
