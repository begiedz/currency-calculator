import React from 'react'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Numpad from '../components/Numpad';
import Display from '../components/Display';
import RateView from '../components/RateView';
import CurrencySelect from '../components/CurrencySelect';
import { Styles } from '../styles/Styles';


const Calculator = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Styles.backGround}>
      <StatusBar style="light" />
      <Display navigation={navigation} />
      <Numpad />
      <RateView />
    </SafeAreaView>
  )
}

const CalculatorStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Calculator'
          component={Calculator}
          options={{ headerShown: false }} />
        <Stack.Screen name='Currencies' component={CurrencySelect} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CalculatorStack