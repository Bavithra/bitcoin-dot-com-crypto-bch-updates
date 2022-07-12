import ApiClient from "./ApiClient";

async function getBchPrice() {
  const response = await ApiClient.get("https://index-api.bitcoin.com/api/v0/cash/price/usd");
  return response.data;
}

async function getBchPriceHistory() {
  const response = await ApiClient.get("https://index-api.bitcoin.com/api/v0/cash/history");
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBchPrice,
  getBchPriceHistory
};