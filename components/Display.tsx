import React, { useEffect } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { useAppContext } from '../context/AppContext'
import { Styles } from '../styles/Styles'
import { Divider } from '@rneui/base'

const Display = ({ navigation }: any) => {

  const { baseCode, targetCode, baseNumber, targetNumber, setTargetNumber, rate } = useAppContext();

  useEffect(() => {
    setTargetNumber((parseFloat(baseNumber) * rate));
  }, [baseNumber, rate])

  return (
    <View style={Styles.display} >

      <TouchableHighlight underlayColor="#222" style={{ borderRadius: 16, padding: 8 }}
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: false })}
        onLongPress={() => { }}>
        <View style={Styles.baseNumberWrapper}>
          <Text style={Styles.baseCode}>{baseCode == '' ? 'Base Currency' : baseCode}</Text>
          <Text selectable={true} style={Styles.baseNumberDisplay}>{parseFloat(baseNumber).toFixed(2)}</Text>
        </View>
      </TouchableHighlight>

      <Divider width={2} color='#222' style={{ width: '95%', alignSelf: 'center' }} />

      <TouchableHighlight underlayColor="#222" style={{ borderRadius: 16, padding: 8 }}
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: true })}
        onLongPress={() => { }}>

        <View style={Styles.targetNumberWrapper}>
          <Text style={Styles.baseCode}>{targetCode == '' ? 'Target Currency' : targetCode}</Text>
          <Text selectable={true} style={Styles.targetNumberDisplay}>{parseFloat(targetNumber).toFixed(2)}</Text>
        </View>
      </TouchableHighlight>

    </View>
  )
}

export default Display