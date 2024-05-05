import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Styles } from '../styles/Styles'
import { useAppContext } from '../Context'

const Display = ({ navigation }: any) => {

  const context = useAppContext();
  if (!context) {
    return null;
  }
  const {
    baseCode,
    targetCode,
    baseNumber,
    targetNumber,
  } = context;

  return (
    <View style={Styles.display} >

      <TouchableHighlight underlayColor="#222" onPress={() => navigation.navigate('Select Currency')}>
        <View style={Styles.baseNumberWrapper}>
          <Text style={Styles.baseCode}>{baseCode == '' ? 'Base Currency' : baseCode}</Text>
          <Text style={Styles.baseNumberDisplay}>{baseNumber}</Text>
        </View>
      </TouchableHighlight>

      <View style={Styles.targetNumberWrapper}>
        <Text style={Styles.baseCode}>
          {targetCode == '' ? 'Target Currency' : targetCode}
        </Text>
        <Text style={Styles.targetNumberDisplay}>{targetNumber}</Text>
      </View>

    </View>
  )
}

export default Display