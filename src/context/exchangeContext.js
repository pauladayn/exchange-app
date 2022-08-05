import { createContext } from "react";
import { useExchange } from "../hooks/useExchange";
export const ExchangeContext = createContext(null);
const { Provider } = ExchangeContext;
const ExchangeProvider = ({ children }) => {
  const {
    setSelect,
    select,
    setCurrencyName,
    currencyName,
    currencyValues,
    formattedDate,
    isFetching,
    setIsFetching
  } = useExchange();

  return (
    <Provider
      value={{
        setSelect,
        select,
        setCurrencyName,
        currencyName,
        currencyValues,
        formattedDate,
        isFetching,
        setIsFetching
      }}
    >
      {children}
    </Provider>
  );
};

export default ExchangeProvider;
