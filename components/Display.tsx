import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { useAppContext } from '../Context'
import { Styles } from '../styles/Styles'

const Display = ({ navigation }: any) => {


  const { baseCode, targetCode, baseNumber, targetNumber } = useAppContext();

  return (
    <View style={Styles.display} >

      <TouchableHighlight underlayColor="#222"
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: false })}>
        <View style={Styles.baseNumberWrapper}>
          <Text style={Styles.baseCode}>{baseCode == '' ? 'Base Currency' : baseCode}</Text>
          <Text style={Styles.baseNumberDisplay}>{baseNumber}</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight underlayColor="#222"
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: true })}>
        <View style={Styles.targetNumberWrapper}>
          <Text style={Styles.baseCode}>{targetCode == '' ? 'Target Currency' : targetCode}</Text>
          <Text style={Styles.targetNumberDisplay}>{targetNumber}</Text>
        </View>
      </TouchableHighlight>

    </View>
  )
}

export default Display