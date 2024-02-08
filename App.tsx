import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { useState } from 'react';

import getRate from './api';
import Numpad from './components/Numpad';
import Display from './components/Display';
import RateView from './components/RateView';

import { Styles } from './styles/Styles';

export default function App() {

  //rate is returned from exchange rate api
  const [rate, setRate] = useState<number>(0)

  const [baseCode, setBaseCode] = useState<string>('')
  const [targetCode, setTargetCode] = useState<string>('')

  // baseNumber is set at Numpad and directed to Display Component
  const [baseNumber, setBaseNumber] = useState('')

  return (
    <>
      <View>
        <Text style={Styles.header}>Currency calculator v0.1</Text>
      </View>

      <SafeAreaView style={Styles.backGround}>
        <StatusBar style="light" />


        <Display
          baseCode={baseCode}
          targetCode={targetCode}
          setBaseCode={setBaseCode}
          setTargetCode={setTargetCode}
          baseNumber={baseNumber} />
        <Numpad
          baseNumber={baseNumber}
          setBaseNumber={setBaseNumber} />
        <RateView
          rate={rate}
          setRate={setRate}
          getRate={getRate}
          baseCode={baseCode}
          setBaseCode={setBaseCode}
          targetCode={targetCode}
          setTargetCode={setTargetCode} />

      </SafeAreaView>
    </>
  )
};
