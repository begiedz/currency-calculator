import React, { useEffect } from 'react'
import { View, Text, TouchableHighlight, Platform } from 'react-native'

import { useAppContext } from '../context/AppContext'
import { displayStyles } from '../styles/Styles'
import { Divider } from '@rneui/base'
import useVerticalWeb from '../hooks/useVerticalWeb'

const Display = ({ navigation }: any) => {

  const { baseCode, targetCode, baseNumber, targetNumber, setTargetNumber, rate } = useAppContext();
  const isVerticalWeb = useVerticalWeb()

  useEffect(() => {
    setTargetNumber(baseNumber * rate);
  }, [baseNumber, rate])

  return (
    <View style={displayStyles.display} >

      <TouchableHighlight underlayColor="#222" style={{ borderRadius: 16, padding: 8 }}
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: false })}
        onLongPress={() => {/* do nothing to open copy menu */ }}
      >
        <View style={displayStyles.numberWrapper}>
          <Text style={displayStyles.baseCode}>{baseCode == '' ? 'Base Currency' : baseCode}</Text>

          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            selectable={true}
            style={[displayStyles.baseNumberDisplay, isVerticalWeb ? { fontSize: 52, height: 'auto' } : null]}>

            {baseNumber === "." ? "0."
              : baseNumber.includes('.') ? parseFloat(baseNumber).toFixed(2)
                : baseNumber}

          </Text>

        </View>
      </TouchableHighlight>

      <Divider width={2} color='#222' style={{ width: '95%', alignSelf: 'center' }} />

      <TouchableHighlight underlayColor="#222" style={{ borderRadius: 16, padding: 8 }}
        onPress={() => navigation.navigate('Currencies', { changeTargetCode: true })}
        onLongPress={() => {/* do nothing to open copy menu */ }}
      >

        <View style={displayStyles.numberWrapper}>
          <Text style={displayStyles.baseCode}>{targetCode == '' ? 'Target Currency' : targetCode}</Text>

          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            selectable={true}
            style={[displayStyles.targetNumberDisplay, isVerticalWeb ? { fontSize: 60, height: '100%' } : null]}>
            {baseNumber === "." ? "0." : targetNumber.toString().includes('.') ? targetNumber.toFixed(2) : targetNumber}
          </Text>

        </View>
      </TouchableHighlight >

    </View >
  )
}

export default Display