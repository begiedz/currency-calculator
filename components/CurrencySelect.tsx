import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { Styles } from '../styles/Styles'
import { Picker } from '@react-native-picker/picker'
import { useAppContext } from '../Context'

const CurrencySelect = () => {
  const context = useAppContext();
  if (!context) {
    return null;
  }
  const { baseCode, setBaseCode } = context;

  return (
    <SafeAreaView style={Styles.backGround}>
      <View>
        <Text style={{ color: "white" }}>Currency Selection is in progress...</Text>
      </View>

      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Picker
          itemStyle={{ color: 'white' }}
          style={{ height: 150, width: 150, /* backgroundColor: 'white', */ }}
          selectedValue={baseCode}
          onValueChange={(itemValue) => setBaseCode(itemValue)}>

          <Picker.Item label='🇵🇱 PLN' value='PLN' />
          <Picker.Item label='🇪🇺 EUR' value='EUR' />
          <Picker.Item label='🇺🇸 USD' value='USD' />
        </Picker>
      </View>

      {/* <Picker selectedValue={targetCode}
        style={{ height: 50, width: 150, backgroundColor: 'white', display: 'none' }}
        onValueChange={(itemValue) => setTargetCode(itemValue)}>
        <Picker.Item label='🇪🇺 EUR' value='EUR'></Picker.Item>
        <Picker.Item label='🇵🇱 PLN' value='PLN'></Picker.Item>
        <Picker.Item label='🇺🇸 USD' value='USD'></Picker.Item>
      </Picker> */}

    </SafeAreaView>
  )
}

export default CurrencySelect