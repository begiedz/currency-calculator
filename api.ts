// @ts-nocheck
import { useAppContext } from './Context';

const getRate = async (baseCode: string, targetCode: string) => {
  const apiUrl: string = `https://v6.exchangerate-api.com/v6/${process.env.EXPO_PUBLIC_API_KEY}/pair/${baseCode}/${targetCode}`;

  const response = await fetch(apiUrl);
  const json = await response.json();

  // conversion rate rounded to 2 decimal places
  const rate: number = Number.parseFloat(json.conversion_rate).toFixed(2);
  const lastUpdateUnix: number = json.time_last_update_unix;

  console.log(json);
  console.log(rate);
  console.log(lastUpdateUnix);

  let date = new Date(lastUpdateUnix * 1000);

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;
  let formattedTime = `${'0' + hours}:${'0' + minutes}`;

  console.log(date);
  console.log(formattedTime);
  console.log(formattedDate);

  return { rate, formattedTime, formattedDate };
};

// https://open.er-api.com/v6/latest/USD

// JSON response

// base_code: "EUR"
// conversion_rate: 4.316
// documentation: "https://www.exchangerate-api.com/docs"
// result: "success"
// target_code: "PLN"
// terms_of_use: "https://www.exchangerate-api.com/terms"
// time_last_update_unix: 1707004801
// time_last_update_utc: "Sun, 04 Feb 2024 00:00:01 +0000"
// time_next_update_unix: 1707091201
// time_next_update_utc: "Mon, 05 Feb 2024 00:00:01 +0000"

export default getRate;
