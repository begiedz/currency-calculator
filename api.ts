// @ts-nocheck
export const callApi = async (baseCode: string) => {
  const response = await fetch(`https://open.er-api.com/v6/latest/${baseCode}`);
  const json = await response.json();
  console.log(json);
  return json;
};

export const getRate = (response, targetCode: string) => {
  const rawRate: number = response.rates[targetCode];

  // conversion rate rounded to 2 decimal places
  const rate: number = Number.parseFloat(rawRate).toFixed(2);
  console.log(rate);
  return rate;
};

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

  console.log(date);
  console.log(hours);
  console.log(minutes);
  console.log(formattedTime);
  console.log(formattedDate);
  return { formattedDate, formattedTime };
};
// https://open.er-api.com/v6/latest/USD
// https://v6.exchangerate-api.com/v6/${process.env.EXPO_PUBLIC_API_KEY}/pair/${baseCode}/${targetCode}`;
