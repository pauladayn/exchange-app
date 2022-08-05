import { useState, useEffect } from "react";
import {
  getCurrencyNames,
  getCurrencyValues,
} from "../services/getDailyExchange";
import { sortedCurrencies, formatDate } from "../helpers";

export const useExchange = () => {
  let defaultNumber = 1;
  const [select, setSelect] = useState({
    amount: defaultNumber.toFixed(2),
    from: "USD",
    to: "EUR",
    selected: "USD",
    allCurrencies: [],
    exchangeResult: 1,
  });
  const [currencyValues, setCurrencyValues] = useState({});
  const [formattedDate, setFormattedDate] = useState("");
  const [currencyName, setCurrencyName] = useState({
    from: "US Dollar",
    to: "Euro",
  });
  const [isFetching, setIsFetching] = useState(true);


  useEffect(() => {
    getCurrencyNames()
      .then((currencies) => {
        setSelect((prevState) => ({
          ...prevState,
          allCurrencies: sortedCurrencies(currencies),
        }));
      })
      .finally(() => setIsFetching(false));
  }, []);


  useEffect(() => {

    getCurrencyValues(select.from)
      .then((baseValues) => {
        setCurrencyValues(baseValues);
        setFormattedDate(formatDate(baseValues));
      })
      .finally(() => setIsFetching(false));
  }, [select.from]);


  useEffect(() => {
    if (currencyValues.rates) {
      setSelect((prevState) => ({
        ...prevState,
        exchangeResult: select.amount * currencyValues.rates[select.to],
      }));
    }
  }, [currencyValues, select.amount, select.to]);

 
  return {
    setSelect,
    select,
    setCurrencyName,
    currencyName,
    currencyValues,
    formattedDate,
    isFetching,
    setIsFetching
  };
};
