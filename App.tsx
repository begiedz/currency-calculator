import { AppContextProvider } from './context/AppContext';
import CalculatorStack from './navigation/CalculatorStack'

export default function App() {
  return (
    <AppContextProvider>
      <CalculatorStack />
    </AppContextProvider>
  )
};
