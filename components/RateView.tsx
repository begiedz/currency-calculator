import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Styles } from '../styles/Styles'
import { useAppContext } from '../Context'
import { callApi, getRate, getDate } from '../api'


const RateView: React.FC = () => {

  const context = useAppContext();
  if (!context) {
    return null;
  }
  const { rate, baseCode, targetCode, setRate, setBaseCode, setTargetCode, } = context;

  const [formattedTime, setFormattedTime] = useState<string>('')
  const [formattedDate, setFormattedDate] = useState<string>('')

  const handlePress = async (baseCode: string, targetCode: string) => {
    try {
      const response = await callApi(baseCode)
      const apiRate: number = getRate(response, targetCode)
      const { formattedDate, formattedTime } = getDate(response)

      setRate(apiRate)
      setBaseCode(baseCode)
      setTargetCode(targetCode)
      setFormattedTime(formattedTime)
      setFormattedDate(formattedDate)
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <View style={Styles.rateView}>
      <TouchableOpacity style={Styles.getRate} onPress={() => handlePress(baseCode, targetCode)}>
        <Text style={Styles.getRateButton}>↺</Text>
      </TouchableOpacity>
      {!!rate &&
        <View style={Styles.rate}>
          <Text style={Styles.rateDate}>{formattedDate}, {formattedTime}</Text>
          <Text style={Styles.rateAmmount}>1 {baseCode} = {rate} {targetCode}</Text>
        </View>
      }
    </View>
  )
}

export default RateView