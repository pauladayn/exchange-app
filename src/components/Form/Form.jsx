import { useState, useContext } from "react";
import { ExchangeContext } from "../../context/exchangeContext";
import "./form.css";
import { ExchangeSVG } from "../../assets/icons/Exchange";
import ExchangeInfo from "../ExchangeInfo/ExchangeInfo";
import { checkInteger } from "../../helpers";
import Loader from "../Loader/Loader";

const Form = () => {
  const {
    setSelect,
    select,
    setCurrencyName,
    currencyName,
    formattedDate,
    isFetching,
    setIsFetching,
  } = useContext(ExchangeContext);

  const [isError, setError] = useState(false);

  const handleAmountChange = ({ target }) => {
    const { value } = target;
    const regExp = /^\d*(.)?(\d{0,2})?$/;
    let status = regExp.test(value);
    if (status && value >= 0) {
      setSelect({ ...select, amount: value });
    } else {
      setError(true);
    }
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;
    setSelect({
      ...select,
      [name]: value,
    });
    let selected = select.allCurrencies.filter(
      (currency) => currency[0] === value
    );
    if (name === "from") setIsFetching(true);
    setCurrencyName({ ...currencyName, [name]: selected[0][1]?.name });
  };

  const handleBlur = () => {
    setSelect({
      ...select,
      amount:
        select.amount === "" ? checkInteger(1) : checkInteger(select.amount),
    });
    setError(false);
  };

  const handleEnter = ({ key }) => {
    if (key === "Enter") {
      setSelect({
        ...select,
        amount:
          select.amount === "" ? checkInteger(1) : checkInteger(select.amount),
      });
      setError(false);
    }
  };

  const handleFocus = () => {
    setError(false);
    setSelect({ ...select, amount: "" });
  };

  const handleExchange = (evt, select) => {
    evt.preventDefault();

    const { from, to } = select;
    setSelect({ ...select, from: to, to: from, selected: true });
    setIsFetching(true);
    setCurrencyName({ from: currencyName.to, to: currencyName.from });
  };

  return (
    <div className="wrapper">
      <h1>
        Convert {isFetching ? <Loader /> : select.amount}
        {` ${currencyName.from} to ${currencyName.to} - ${select.from} to ${select.to}`}
      </h1>
      <div className="form-container">
        <form className="form" onSubmit={(evt) => handleExchange(evt, select)}>
          <label htmlFor="amount" className="form__label">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            value={select.amount}
            name="amount"
            className={isError ? "form__input--error" : "form__input"}
            onChange={handleAmountChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={{ marginBottom: isError && "0.5em" }}
            onKeyDown={handleEnter}
          />
          {isError && <small>Please insert only valid values</small>}
          <label htmlFor="from" className="form__label">
            From:
          </label>

          <select
            name="from"
            id="from"
            className="form__select"
            onChange={handleSelectChange}
            value={select.from}
          >
            {select.allCurrencies
              ?.filter((currency) => currency[0] !== select.to)
              .map((currency) => {
                return (
                  <option
                    value={currency[0]}
                    className="form__select-option"
                    key={currency[1].name}
                  >
                    {`${currency[1].symbol} - ${currency[1].name}`}
                  </option>
                );
              })}
          </select>
          <button className="form__button-submit" type="submit">
            <ExchangeSVG />
          </button>
          <label htmlFor="to" className="form__label">
            To:
          </label>

          <select
            name="to"
            id="to"
            className="form__select"
            onChange={handleSelectChange}
            value={select.to}
          >
            {select.allCurrencies
              ?.filter((currency) => currency[0] !== select.from)
              .map((currency) => {
                return (
                  <option
                    value={currency[0]}
                    className="form__select-option"
                    key={currency[1].name}
                  >
                    {`${currency[1].symbol} - ${currency[1].name}`}
                  </option>
                );
              })}
          </select>
        </form>
        <ExchangeInfo />
      </div>
      <p className="date-info">
        {`Conversion from ${select.from} to ${select.to} - Last updated: ${formattedDate}`}
      </p>
    </div>
  );
};

export default Form;
