import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import getRate from './api';
import Numpad from './components/Numpad';
import { Styles } from './styles/Styles';


export default function App() {

  const [rate, setRate] = useState<number>(0)
  const [baseCode, setBaseCode] = useState<string>('')
  const [targetCode, setTargetCode] = useState<string>('')

  // const [fetchedRate, setFetchedRate] = useState<number>(0)


  const handlePress = async (baseCode: string, targetCode: string) => {
    try {
      const fetchedRate: number = await getRate(baseCode, targetCode);
      setRate(fetchedRate);

      setTargetCode(targetCode)
      setBaseCode(baseCode)

    } catch (err) {
      console.error(err);
    }
  };

  const currentDate = new Date()
  const dateDisplay = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}, ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`


  return (
    <SafeAreaView style={Styles.backGround}>
      {/* <ScrollView> */}
      <View>
        <Text style={Styles.header}>Currency calculator v0.1</Text>
      </View>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.getRate} onPress={() => handlePress("EUR", "PLN")}>
          <Text style={Styles.getRateButton}>↺</Text>
        </TouchableOpacity>

        <Numpad />

        {!!rate &&
          <View style={Styles.rate}>
            <Text style={Styles.rateDate}>{dateDisplay}</Text>
            <Text style={Styles.rateAmmount}>1 {baseCode} = {rate} {targetCode}</Text>
          </View>}

        <StatusBar style="light" />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>

  );
}
