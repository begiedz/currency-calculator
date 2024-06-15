import React, { useEffect } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { useAppContext } from '../context/AppContext'
import { displayStyles } from '../styles/Styles'
import { Divider } from '@rneui/base'

const Display = ({ navigation }: any) => {

  const { baseCode, targetCode, baseNumber, targetNumber, setTargetNumber, rate } = useAppContext();

  useEffect(() => {
    setTargetNumber(baseNumber * rate);
  }, [baseNumber, rate])

  return (
    <View style={displayStyles.display} >

      <TouchableHighlight underlayColor="#222" style={{ borderRadius: 16, padding: 8 }}
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: false })}
      // onLongPress={() => { }}
      >
        <View style={displayStyles.baseNumberWrapper}>
          <Text style={displayStyles.baseCode}>{baseCode == '' ? 'Base Currency' : baseCode}</Text>

          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            selectable={true}
            style={displayStyles.baseNumberDisplay}>

            {baseNumber === "." ? "0."
              : baseNumber.includes('.') ? parseFloat(baseNumber).toFixed(2)
                : baseNumber}

          </Text>

        </View>
      </TouchableHighlight>

      <Divider width={2} color='#222' style={{ width: '95%', alignSelf: 'center' }} />

      <TouchableHighlight underlayColor="#222" style={{ borderRadius: 16, padding: 8 }}
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: true })}
      >

        <View style={displayStyles.targetNumberWrapper}>
          <Text style={displayStyles.baseCode}>{targetCode == '' ? 'Target Currency' : targetCode}</Text>

          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            selectable={true}
            style={displayStyles.targetNumberDisplay}>
            {baseNumber === "." ? "0." : targetNumber.toString().includes('.') ? targetNumber.toFixed(2) : targetNumber}
          </Text>

        </View>
      </TouchableHighlight >

    </View >
  )
}

export default Display