import axios from "axios";

export const getCurrencyValues = async (currency) => {
  try {
    const respose = await axios.get(
      `https://api.vatcomply.com/rates?base=${currency}`
    );

    return respose.data
  } catch (error) {
    return error;
  }
};

export const getCurrencyNames = async () => {
  try {
    const response = await axios.get("https://api.vatcomply.com/currencies");

    return response.data;
  } catch (error) {
    return error;
  }
};
