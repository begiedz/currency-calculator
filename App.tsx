// import { useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import CalculatorStack from './navigation/CalculatorStack'
// import { Dimensions } from 'react-native';

export default function App() {
  // useEffect(() => {
  //   console.log("height:", Dimensions.get('window').height, "width:", Dimensions.get('window').width,);
  // }, [])
  return (
    <AppContextProvider>
      <CalculatorStack />
    </AppContextProvider>
  )
};
