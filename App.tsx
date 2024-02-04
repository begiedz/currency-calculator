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

  return (
    <SafeAreaView style={Styles.backGround}>
      {/* <ScrollView> */}
      <View>
        <Text style={Styles.header}>Currency calculator v0.1</Text>
      </View>
      <View style={Styles.container}>


        <TouchableOpacity style={Styles.getRate} onPress={() => handlePress("EUR", "PLN")}>
          <Text>getRates</Text>
        </TouchableOpacity>

        <Numpad />

        {!!rate && <Text>1 {baseCode} = {rate} {targetCode}</Text>}
        <StatusBar style="auto" />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>

  );
}
