// @ts-nocheck
export const callApi = async (baseCode: string) => {
  const response = await fetch(`https://open.er-api.com/v6/latest/${baseCode}`);
  const json = await response.json();
  console.log('api called');
  return json;
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
  return { formattedDate, formattedTime };
};
