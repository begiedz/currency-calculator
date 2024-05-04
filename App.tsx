import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import getRate from './api';
import Numpad from './components/Numpad';
import Display from './components/Display';
import RateView from './components/RateView';
import { AppContextProvider } from './Context';

import { Styles } from './styles/Styles';


export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={Styles.backGround}>
        <StatusBar style="light" />
        <Display />
        <Numpad />
        <RateView />
      </SafeAreaView>
    </AppContextProvider>
  )
};
