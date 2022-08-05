import React, { useContext } from "react";
import "./exchangeInfo.css";
import { ExchangeContext } from "../../context/exchangeContext";
import Alert from "../Alerts/Alert";
import Loader from "../Loader/Loader";

const ExchangeInfo = () => {
  const { select, currencyValues, isFetching } = useContext(ExchangeContext);

  return (
    <div className="exchange-wrapper">
      <div className="exchange">
        <p className="exchange-amount">{`${select.amount} ${select.from}`}</p>

        <div className="exchange-amount-convert">
          {isFetching ? <Loader /> : select.exchangeResult.toFixed(2)}
          {` ${select.to}`}
        </div>

        <div className="exchange-amount">
          {`1 ${select.from} = `}
          {isFetching ? (
            <Loader />
          ) : (
            currencyValues.rates &&
            (currencyValues?.rates[select.to]).toFixed(4)
          )}
          {` ${select.to}`}
        </div>
        <div className="exchange-amount">
          {`1 ${select.to} = `}
          {isFetching ? (
            <Loader />
          ) : (
            currencyValues.rates &&
            (
              currencyValues.rates[select.from] /
              currencyValues.rates[select.to]
            ).toFixed(4)
          )}
          {` ${select.from} `}
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default ExchangeInfo;
