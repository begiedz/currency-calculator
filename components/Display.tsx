import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react'
import { Styles } from '../styles/Styles'

interface displayInterface {
  baseCode: string,
  targetCode: string,
  setBaseCode: any,
  setTargetCode: any
  baseNumber: string;
}

const Display = ({ baseCode, targetCode, setBaseCode, setTargetCode, baseNumber }: displayInterface) => {
  return (
    <View>
      <Text style={Styles.displayBaseNumber}>{baseNumber}</Text>
      <Text style={Styles.displayTargetNumber}>{baseNumber}</Text>
      {/* <Picker
        style={{ height: 50, width: 150, backgroundColor: 'white', display: 'none' }}
        selectedValue={baseCode}
        onValueChange={(itemValue) => setBaseCode(itemValue)}>
        <Picker.Item label='🇵🇱 PLN' value='PLN'></Picker.Item>
        <Picker.Item label='🇪🇺 EUR' value='EUR'></Picker.Item>
        <Picker.Item label='🇺🇸 USD' value='USD'></Picker.Item>
      </Picker>

      <Picker selectedValue={targetCode}
        style={{ height: 50, width: 150, backgroundColor: 'white', display: 'none' }}
        onValueChange={(itemValue) => setTargetCode(itemValue)}>
        <Picker.Item label='🇪🇺 EUR' value='EUR'></Picker.Item>
        <Picker.Item label='🇵🇱 PLN' value='PLN'></Picker.Item>
        <Picker.Item label='🇺🇸 USD' value='USD'></Picker.Item>
      </Picker> */}
    </View>
  )
}

export default Display