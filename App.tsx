// import { useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import CalculatorStack from './navigation/CalculatorStack'

export default function App() {
  // useEffect(() => {

  // }, [])
  return (
    <AppContextProvider>
      <CalculatorStack />
    </AppContextProvider>
  )
};
