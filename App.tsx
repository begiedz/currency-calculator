import { Dimensions } from 'react-native';
import { AppContextProvider } from './context/AppContext';
import CalculatorStack from './navigation/CalculatorStack'

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  console.log(windowWidth);
  return (
    <AppContextProvider>
      <CalculatorStack />
    </AppContextProvider>
  )
};
