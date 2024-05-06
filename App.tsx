import { AppContextProvider } from './Context';
import Stack from './components/Stack'

export default function App() {

  return (
    <AppContextProvider>
      <Stack />
    </AppContextProvider>
  )
};
