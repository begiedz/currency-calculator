import { createContext, useContext, useState } from 'react'

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)


export const AppContextProvider = ({ children }: any) => {

  //rate is returned from exchange rate api
  const [rate, setRate] = useState<number>(0)

  const [baseCode, setBaseCode] = useState<string>('')
  const [targetCode, setTargetCode] = useState<string>('')

  // baseNumber is set in Numpad and directed to Display Component
  const [baseNumber, setBaseNumber] = useState<number>(0)
  const [targetNumber, setTargetNumber] = useState<number>(0)

  const [operationNumber, setOperationNumber] = useState<number>(0)

  // operation is set in Numpad
  const [operation, setOperation] = useState<string>('')

  return (
    <AppContext.Provider
      value={({
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
      })}>

      {children}

    </AppContext.Provider>
  )
}

