// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { AppContextProvider } from './Context';
import Stack from './components/Stack'

import { Styles } from './styles/Styles';


export default function App() {


  return (
    <AppContextProvider>
      {/* <SafeAreaView style={Styles.backGround}> */}
      <Stack />
      {/* </SafeAreaView> */}
    </AppContextProvider>
  )
};
