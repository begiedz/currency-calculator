import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

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

  // baseNumber is set in Numpad and directed to Display Component
  const [baseNumber, setBaseNumber] = useState<number>(0)
  const [targetNumber, setTargetNumber] = useState<number>(0)

  const [operationNumber, setOperationNumber] = useState<number>(0)

  // operation is set in Numpad
  const [operation, setOperation] = useState<string>('')

  useEffect(() => {
    setTargetNumber(Math.round(baseNumber * rate * 100) / 100)
  }, [baseNumber, rate])


  return (
    <>
      <SafeAreaView style={Styles.backGround}>

        <StatusBar style="light" />

        <Display
          baseCode={baseCode}
          targetCode={targetCode}
          targetNumber={targetNumber}
          setBaseCode={setBaseCode}
          setTargetCode={setTargetCode}
          baseNumber={baseNumber}
        />

        <Numpad
          baseNumber={baseNumber}
          setBaseNumber={setBaseNumber}
          operation={operation}
          setOperation={setOperation}
          operationNumber={operationNumber}
          setOperationNumber={setOperationNumber}
        />

        <RateView
          rate={rate}
          setRate={setRate}
          getRate={getRate}
          baseCode={baseCode}
          setBaseCode={setBaseCode}
          targetCode={targetCode}
          setTargetCode={setTargetCode}
        />

      </SafeAreaView>
    </>
  )
};
