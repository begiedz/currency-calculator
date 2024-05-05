import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Styles } from '../styles/Styles'
import { useAppContext } from '../Context'
import getRate from '../api'


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
      const { rate, formattedTime, formattedDate } = await getRate(baseCode, targetCode);
      setRate(rate);

      setTargetCode(targetCode);
      setBaseCode(baseCode);

      setFormattedTime(formattedTime);
      setFormattedDate(formattedDate);


    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <View style={Styles.rateView}>
      <TouchableOpacity style={Styles.getRate} onPress={() => handlePress("EUR", "PLN")}>
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