import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Styles } from '../styles/Styles'

interface RateViewProps {
  rate: number,
  getRate: any
  setRate: any
  baseCode: string,
  setBaseCode: any
  targetCode: string,
  setTargetCode: any,
}
const RateView = ({ rate, getRate, setRate, baseCode, targetCode, setBaseCode, setTargetCode }: RateViewProps) => {
  const currentDate = new Date()

  const dateDisplay = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}, ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`

  const handlePress = async (baseCode: string, targetCode: string) => {
    try {
      const fetchedRate: number = await getRate(baseCode, targetCode);
      setRate(fetchedRate);

      setTargetCode(targetCode)
      setBaseCode(baseCode)

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
          <Text style={Styles.rateDate}>{dateDisplay}</Text>
          <Text style={Styles.rateAmmount}>1 {baseCode} = {rate} {targetCode}</Text>
        </View>
      }
    </View>
  )
}

export default RateView