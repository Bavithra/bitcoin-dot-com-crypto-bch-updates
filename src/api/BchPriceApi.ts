import ApiClient from "./ApiClient";

async function getBchPrice() {
  const response = await ApiClient.get("https://index-api.bitcoin.com/api/v0/cash/price/usd");
  return response.data;
}

async function getBchPriceHistory() {
  const response = await ApiClient.get("https://index-api.bitcoin.com/api/v0/cash/history");
  return response.data;
}


export default {
  getBchPrice,
  getBchPriceHistory
};