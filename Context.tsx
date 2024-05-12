import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from 'react'

interface AppContextProps {
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
  baseCode: string;
  setBaseCode: Dispatch<SetStateAction<string>>;
  targetCode: string;
  setTargetCode: Dispatch<SetStateAction<string>>;
  baseNumber: string;
  setBaseNumber: Dispatch<SetStateAction<string>>;
  targetNumber: string;
  setTargetNumber: Dispatch<SetStateAction<string>>;
  operationNumber: string;
  setOperationNumber: Dispatch<SetStateAction<string>>;
  operation: string;
  setOperation: Dispatch<SetStateAction<string>>;
  responseRates: object;
  setResponseRates: Dispatch<SetStateAction<object>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = (): any => {

  const context = useContext(AppContext)

  if (!context) {
    return undefined;
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
  const [baseNumber, setBaseNumber] = useState<string>('0')
  const [targetNumber, setTargetNumber] = useState<string>('0')

  const [operationNumber, setOperationNumber] = useState<string>('0')

  // operation is set in Numpad
  const [operation, setOperation] = useState<string>('')

  const [responseRates, setResponseRates] = useState<object>({})

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
      responseRates,
      setResponseRates
    }}>
      {children}
    </AppContext.Provider>
  )
}

