# React Native Currency Calculator

This is a React Native application for converting currencies. It features a calculator interface to perform arithmetic operations and fetches the latest exchange rates provided from an external API.

## Features

- **Currency Conversion:** Fetches daily exchange rates and converts between different currencies.
- **Calculator:** Includes a calculator interface for basic arithmetic operations.
- **Responsive Design:** Adjusts layout for different screen sizes and orientations.
- **Navigation:** Uses React Navigation for smooth navigation between screens.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/begiedz/currency-calculator.git
   cd currency-calculator
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the application:**

- **For web:**
  ```sh
  npm run web
  ```
- **For iOS:**
  ```sh
  npm run ios
  ```
- **For Android:**
  ```sh
  npm run android
  ```

## Project Structure

```plaintext
.
├── App.tsx
├── components
│ ├── Button.tsx
│ ├── Display.tsx
│ ├── Numpad.tsx
│ ├── RateView.tsx
│ └── CurrencySelect.tsx
├── context
│ └── AppContext.tsx
├── data
│ ├── api.ts
│ └── supportedCurrencies.ts
├── hooks
│ └── useVerticalWeb.tsx
├── navigation
│ └── CalculatorStack.tsx
├── styles
│ └── Styles.tsx
└── README.md
```

## Usage

### Calculator

The calculator allows you to perform basic arithmetic operations:

- **Addition (+)**
- **Subtraction (-)**
- **Multiplication (×)**
- **Division (÷)**
- **Clear (C)**
- **Backspace (⌫)**
- **Swap Currencies (⇅)**

### Currency Conversion

1. **Select Base Currency:** Tap the base currency display to select a different base currency.
2. **Select Target Currency:** Tap the target currency display to select a different target currency.
3. **Fetch Rates:** The app fetches the latest exchange rates automatically, or you can manually refresh by tapping the refresh button (↺).

## Context API

The application uses Context API to manage the state for currency conversion and calculator operations.

### AppContext

Defines the context and provider for the application:

```typescript
// Provides state for currency conversion and calculator operations
export const AppContextProvider = ({ children }) => {
  const [rate, setRate] = useState(0);
  const [baseCode, setBaseCode] = useState('EUR');
  const [targetCode, setTargetCode] = useState('PLN');
  const [baseNumber, setBaseNumber] = useState('0');
  const [targetNumber, setTargetNumber] = useState('0');
  const [operationNumber, setOperationNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [responseRates, setResponseRates] = useState({});

  return (
    <AppContext.Provider
      value={{
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
        setResponseRates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
```

## API Integration

The application fetches the latest currency exchange rates from an external API. Here are the details on how the integration works:

### API Call Function

The `callApi` function fetches the latest exchange rates for a given base currency code.

```typescript
export const callApi = async (baseCode: string) => {
  const response = await fetch(`https://open.er-api.com/v6/latest/${baseCode}`);
  const json = await response.json();
  console.log('api called');
  return json;
};
```

### Date Fromatting Function

The `getDate` function formats the date and time from the API response.

```typescript
export const getDate = (response) => {
  const lastUpdateUnix: number = response.time_last_update_unix;
  // transfer Unix seconds to milliseconds
  const date = new Date(lastUpdateUnix * 1000);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate: string = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;
  const formattedTime: string = `${'0' + hours}:${'0' + minutes}`;
  return { formattedDate, formattedTime };
};
```

### RateView Component

The RateView component displays the exchange rate and allows refreshing the rate.

```typescript
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { rateStyles } from '../styles/Styles';
import { useAppContext } from '../context/AppContext';
import { callApi, getDate } from '../data/api';

const RateView = () => {
  const {
    rate,
    baseCode,
    targetCode,
    setRate,
    setBaseCode,
    setTargetCode,
    formattedDate,
    setFormattedDate,
    formattedTime,
    setFormattedTime,
    setResponseRates,
  } = useAppContext();

  const fetchData = async (baseCode: string, targetCode: string) => {
    try {
      const response = await callApi(baseCode);
      setBaseCode(baseCode);
      setTargetCode(targetCode);
      setRate(response.rates[targetCode]);
      setResponseRates(response.rates);

      const { formattedDate, formattedTime } = getDate(response);
      setFormattedTime(formattedTime);
      setFormattedDate(formattedDate);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData(baseCode, targetCode);
  }, [baseCode]);

  return (
    <View style={rateStyles.rateView}>
      <TouchableOpacity onPress={() => fetchData(baseCode, targetCode)}>
        <Text style={rateStyles.getRateButton}>↺</Text>
      </TouchableOpacity>
      {!!rate && (
        <View style={rateStyles.rate}>
          <Text style={rateStyles.rateDate}>
            {formattedDate}, {formattedTime}
          </Text>
          <Text style={rateStyles.rateAmmount}>
            1 {baseCode} = {rate.toFixed(2)} {targetCode}
          </Text>
        </View>
      )}
      <View style={{ width: 32, height: 32 }} />
    </View>
  );
};

export default RateView;
```

This section details how the application integrates with the external API to fetch and display currency exchange rates.

## Custom Hooks

The application uses a custom hook to detect vertical orientation on web platforms.

### useVerticalWeb.tsx

```typescript
// Detects if the web platform is in vertical orientation
const useVerticalWeb = () => {
  const [isVerticalWeb, setIsVerticalWeb] = useState(false);

  useEffect(() => {
    const getDimensions = () => {
      const windowWidth = Dimensions.get('screen').width;
      if (Platform.OS === 'web' && windowWidth <= 380) setIsVerticalWeb(true);
      else setIsVerticalWeb(false);
    };

    getDimensions();
    const subscription = Dimensions.addEventListener('change', getDimensions);
    return () => {
      subscription?.remove();
    };
  }, []);
  return isVerticalWeb;
};

export default useVerticalWeb;
```

## License

This project is licensed under the MIT License.
