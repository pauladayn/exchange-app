export const sortedCurrencies = (object) => {
  return Object.entries(object).sort((a, b) => {
    return a[1].name.localeCompare(b[1].name);
  });
};

export const formatDate = (object) => {
  let getDate = object?.date;
  let toMilliSeconds = Date.now(getDate);
  let formatted = new Date(toMilliSeconds);
  let [month, day, year] = formatted.toDateString().split(" ").splice(1);

  let finalFormat = `${day} ${month} ${year}, ${formatted.toLocaleTimeString()}`;
  return finalFormat;
};

export const checkInteger = (num, fixedValue = 2) => {
  let toNumber = Number(num);
  if (Number.isInteger(toNumber)) {
    return toNumber.toFixed(fixedValue);
  } else {
    return toNumber;
  }
};

