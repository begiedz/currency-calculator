import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { rateStyles } from '../styles/Styles'
import { useAppContext } from '../context/AppContext'
import { callApi, getDate } from '../data/api'


const RateView = () => {

  const { rate, baseCode, targetCode, setRate, setBaseCode, setTargetCode, formattedDate, setFormattedDate, formattedTime, setFormattedTime, setResponseRates } = useAppContext();

  const fetchData = async (baseCode: string, targetCode: string) => {
    try {
      const response = await callApi(baseCode)

      setBaseCode(baseCode)
      setTargetCode(targetCode)
      setRate(response.rates[targetCode])
      setResponseRates(response.rates)

      const { formattedDate, formattedTime } = getDate(response)
      setFormattedTime(formattedTime)
      setFormattedDate(formattedDate)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(baseCode, targetCode)
  }, [baseCode])

  return (
    <View style={rateStyles.rateView}>
      <TouchableOpacity onPress={() => fetchData(baseCode, targetCode)}>
        <Text style={rateStyles.getRateButton}>↺</Text>
      </TouchableOpacity>
      {!!rate &&
        <View style={rateStyles.rate}>
          <Text style={rateStyles.rateDate}>{formattedDate}, {formattedTime}</Text>
          <Text style={rateStyles.rateAmmount}>1 {baseCode} = {rate.toFixed(2)} {targetCode}</Text>
        </View>
      }
      <View style={{ width: 32, height: 32 }} />
    </View>
  )
}

export default RateView