const getRate = async (baseCode: string, targetCode: string) => {
  const apiUrl: string = `https://v6.exchangerate-api.com/v6/${process.env.EXPO_PUBLIC_API_KEY}/pair/${baseCode}/${targetCode}`;

  const response = await fetch(apiUrl);
  const json = await response.json();

  // conversion rate rounded to 2 decimal places
  const rate: number = Math.round(json.conversion_rate * 100) / 100;

  console.log(json);
  console.log(rate);
  return rate;
};

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
