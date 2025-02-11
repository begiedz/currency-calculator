import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'

interface AppContextProps {
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
  baseCode: string;
  setBaseCode: Dispatch<SetStateAction<string>>;
  targetCode: string;
  setTargetCode: Dispatch<SetStateAction<string>>;
  baseNumber: number;
  setBaseNumber: Dispatch<SetStateAction<number>>;
  targetNumber: number;
  setTargetNumber: Dispatch<SetStateAction<number>>;
  operationNumber: number;
  setOperationNumber: Dispatch<SetStateAction<number>>;
  operation: string;
  setOperation: Dispatch<SetStateAction<string>>;
  formattedDate: string;
  setFormattedDate: Dispatch<SetStateAction<string>>;
  formattedTime: string;
  setFormattedTime: Dispatch<SetStateAction<string>>;
  responseRates: Rate | undefined;
  setResponseRates: Dispatch<SetStateAction<Rate | undefined>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider")
  }
  return context
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  //rate is returned from exchange rate api
  const [rate, setRate] = useState<number>(0)

  const [baseCode, setBaseCode] = useState<string>('EUR')
  const [targetCode, setTargetCode] = useState<string>('PLN')

  // baseNumber is set in Numpad and directed to Display Component
  const [baseNumber, setBaseNumber] = useState<number>(0)
  const [displayNumber, setDisplayNumber] = useState<string>('0')
  const [targetNumber, setTargetNumber] = useState<number>(0)

  const [operationNumber, setOperationNumber] = useState<number>(0)

  // operation is set in Numpad
  const [operation, setOperation] = useState<string>('')

  const [formattedTime, setFormattedTime] = useState<string>('')
  const [formattedDate, setFormattedDate] = useState<string>('')
  const [responseRates, setResponseRates] = useState<Rate | undefined>(undefined)

  return (
    <AppContext.Provider value={{
      rate,
      setRate,
      baseCode,
      setBaseCode,
      targetCode,
      setTargetCode,
      baseNumber,
      setBaseNumber,
      targetNumber,
      setTargetNumber,
      operationNumber,
      setOperationNumber,
      operation,
      setOperation,
      formattedDate,
      setFormattedDate,
      formattedTime,
      setFormattedTime,
      responseRates,
      setResponseRates
    }}>
      {children}
    </AppContext.Provider>
  )
}

