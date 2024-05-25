// @ts-nocheck
export const callApi = async (baseCode: string) => {
  const response = await fetch(`https://open.er-api.com/v6/latest/${baseCode}`);
  const json = await response.json();
  return json;
};

// export const getRate = (response: unknown, targetCode: string) => {
//   const rawRate: number = response.rates[targetCode];
//   // conversion rate rounded to 2 decimal places
//   const rate: number = Number.parseFloat(rawRate).toFixed(2);
//   return rate;
// };

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
  // console.log(date);
  // console.log(hours);
  // console.log(minutes);
  // console.log(formattedTime);
  // console.log(formattedDate);
  return { formattedDate, formattedTime };
};
// https://open.er-api.com/v6/latest/USD
// https://v6.exchangerate-api.com/v6/${process.env.EXPO_PUBLIC_API_KEY}/pair/${baseCode}/${targetCode}`;
// API json response
// {"base_code": "EUR", "documentation": "https://www.exchangerate-api.com/docs/free", "provider": "https://www.exchangerate-api.com", "rates": {"AED": 3.982002, "AFN": 77.87299, "ALL": 100.31444, "AMD": 420.284531, "ANG": 1.940853, "AOA": 936.516446, "ARS": 937.627209, "AUD": 1.637133, "AWG": 1.940853, "AZN": 1.843765, "BAM": 1.95583, "BBD": 2.168551, "BDT": 127.264785, "BGN": 1.95583, "BHD": 0.407688, "BIF": 3092.683648, "BMD": 1.084275, "BND": 1.464054, "BOB": 7.504614, "BRL": 5.576187, "BSD": 1.084275, "BTN": 90.118271, "BWP": 14.813772, "BYN": 3.51014, "BZD": 2.168551, "CAD": 1.482883, "CDF": 3021.290909, "CHF": 0.991908, "CLP": 984.016247, "CNY": 7.859951, "COP": 4153.721867, "CRC": 555.23977, "CUP": 26.022611, "CVE": 110.265, "CZK": 24.687133, "DJF": 192.69852, "DKK": 7.461136, "DOP": 63.666458, "DZD": 145.912175, "EGP": 51.073964, "ERN": 16.264132, "ETB": 62.361303, "EUR": 1, "FJD": 2.461233, "FKP": 0.851731, "FOK": 7.461136, "GBP": 0.851732, "GEL": 2.958633, "GGP": 0.851731, "GHS": 15.987301, "GIP": 0.851731, "GMD": 69.402488, "GNF": 9302.553323, "GTQ": 8.417676, "GYD": 226.699864, "HKD": 8.472156, "HNL": 26.776717, "HRK": 7.5345, "HTG": 143.995667, "HUF": 385.13042, "IDR": 17388.138916, "ILS": 3.973953, "IMP": 0.851731, "INR": 90.118324, "IQD": 1420.264957, "IRR": 45871.700666, "ISK": 149.884527, "JEP": 0.851731, "JMD": 169.287105, "JOD": 0.768751, "JPY": 170.162236, "KES": 143.558671, "KGS": 95.484252, "KHR": 4431.226667, "KID": 1.637132, "KMF": 491.96775, "KRW": 1481.355241, "KWD": 0.332711, "KYD": 0.903563, "KZT": 480.917421, "LAK": 23623.081017, "LBP": 97042.654183, "LKR": 324.894424, "LRD": 209.644347, "LSL": 19.964234, "LYD": 5.2405, "MAD": 10.794595, "MDL": 19.183641, "MGA": 4777.266098, "MKD": 61.504, "MMK": 3178.48296, "MNT": 3703.285993, "MOP": 8.726315, "MRU": 43.239917, "MUR": 50.153713, "MVR": 16.736993, "MWK": 1893.859065, "MXN": 18.115297, "MYR": 5.109154, "MZN": 69.210999, "NAD": 19.964234, "NGN": 1591.846908, "NIO": 39.886792, "NOK": 11.480947, "NPR": 144.189234, "NZD": 1.772699, "OMR": 0.416901, "PAB": 1.084275, "PEN": 4.053169, "PGK": 4.164201, "PHP": 63.08529, "PKR": 301.73922, "PLN": 4.259357, "PYG": 8109.266467, "QAR": 3.946763, "RON": 4.975127, "RSD": 117.111539, "RUB": 97.257879, "RWF": 1452.338485, "SAR": 4.066033, "SBD": 9.007018, "SCR": 15.666099, "SDG": 484.463557, "SEK": 11.579873, "SGD": 1.464054, "SHP": 0.851731, "SLE": 24.571079, "SLL": 24571.046895, "SOS": 618.886406, "SRD": 35.123864, "SSP": 1953.074484, "STN": 24.5, "SYP": 13917.211158, "SZL": 19.964234, "THB": 39.777366, "TJS": 11.826198, "TMT": 3.792723, "TND": 3.388353, "TOP": 2.521772, "TRY": 34.96122, "TTD": 7.776275, "TVD": 1.637132, "TWD": 34.945428, "TZS": 2822.393012, "UAH": 43.481339, "UGX": 4136.634947, "USD": 1.084277, "UYU": 41.496409, "UZS": 13696.946302, "VES": 39.620878, "VND": 27651.489277, "VUV": 129.37652, "WST": 2.936804, "XAF": 655.957, "XCD": 2.927544, "XDR": 0.8195, "XOF": 655.957, "XPF": 119.332, "YER": 271.208605, "ZAR": 19.964278, "ZMW": 28.770689, "ZWL": 14.6513}, "result": "success", "terms_of_use": "https://www.exchangerate-api.com/terms", "time_eol_unix": 0, "time_last_update_unix": 1716595351, "time_last_update_utc": "Sat, 25 May 2024 00:02:31 +0000", "time_next_update_unix": 1716682461, "time_next_update_utc": "Sun, 26 May 2024 00:14:21 +0000"}
