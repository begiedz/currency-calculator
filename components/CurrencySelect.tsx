import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { useAppContext } from '../Context'
import { supportedCurrencies } from '../data/supportedCurrencies'
import { Styles } from '../styles/Styles'

const CurrencySelect = ({ route }: any) => {

  const { changeTargetCode } = route.params

  const context = useAppContext();
  if (!context) {
    return null;
  }
  const { baseCode, targetCode, setBaseCode, setTargetCode } = context;

  return (

    <SafeAreaView style={Styles.backGround}>
      <View>
        <Text style={{ color: "white" }}>Currency Selector is in progress...</Text>
      </View>

      <View style={{
        width: '100%'
      }}>
        <Picker
          itemStyle={{ color: 'white' }}
          style={{ flex: 1, height: "auto" }}
          selectedValue={changeTargetCode ? targetCode : baseCode}
          onValueChange={(itemValue) => changeTargetCode ? setTargetCode(itemValue) : setBaseCode(itemValue)}>

          {supportedCurrencies.map((currency, index) => (
            <Picker.Item key={index} label={`${currency.flag} ${currency.name}`} value={currency.code} />
          ))}
        </Picker>
      </View>
    </SafeAreaView >

  )
}

export default CurrencySelect