import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Styles } from '../styles/Styles'
import { useAppContext } from '../context/AppContext'
import { callApi, getDate } from '../data/api'


const RateView = () => {

  const { rate, baseCode, targetCode, setRate, setBaseCode, setTargetCode, formattedDate, setFormattedDate, formattedTime, setFormattedTime } = useAppContext();

  const fetchData = async (baseCode: string, targetCode: string) => {
    try {
      const response = await callApi(baseCode)

      setBaseCode(baseCode)
      setTargetCode(targetCode)
      setRate(response.rates[targetCode])

      const { formattedDate, formattedTime } = getDate(response)
      setFormattedTime(formattedTime)
      setFormattedDate(formattedDate)
    } catch (err: unknown) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(baseCode, targetCode)
  }, [baseCode])

  return (
    <View style={Styles.rateView}>
      <TouchableOpacity style={Styles.getRate} onPress={() => fetchData
        (baseCode, targetCode)}>
        <Text style={Styles.getRateButton}>↺</Text>
      </TouchableOpacity>
      {!!rate &&
        <View style={Styles.rate}>
          <Text style={Styles.rateDate}>{formattedDate}, {formattedTime}</Text>
          <Text style={Styles.rateAmmount}>1 {baseCode} = {rate.toFixed(2)} {targetCode}</Text>
        </View>
      }
    </View>
  )
}

export default RateView