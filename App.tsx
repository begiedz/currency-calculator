import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import getRate from './api';


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
    <View style={styles.container}>

      <View style={{}}>
        <Text>Currency calculator</Text>
      </View>

      {/* <Pressable onPress={() => getRate('EUR', 'PLN')}> */}
      <Pressable onPress={() => handlePress("EUR", "PLN")}>
        <Text>getRates</Text>
      </Pressable>
      {!!rate && <Text>1 {baseCode} = {rate} {targetCode}</Text>}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
