import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react'
import { Styles } from '../styles/Styles'
import getRate from '../api'

interface displayInterface {
  baseCode: string,
  targetCode: string,

  setBaseCode: any,
  setTargetCode: any,

  baseNumber: number | string,
  targetNumber: number | string,
}

const Display = ({ baseCode, targetCode, setBaseCode, setTargetCode, baseNumber, targetNumber }: displayInterface) => {

  return (
    <View style={Styles.display}>

      <View style={Styles.baseNumberWrapper}>
        <Text style={Styles.baseCode}>{baseCode == '' ? 'Base Currency' : baseCode}</Text>
        <Text style={Styles.baseNumberDisplay}>{baseNumber}</Text>
      </View>


      <View style={Styles.targetNumberWrapper}>
        <Text style={Styles.baseCode}>{targetCode == '' ? 'Target Currency' : targetCode}</Text>
        <Text style={Styles.targetNumberDisplay}>{targetNumber}</Text>
      </View>

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