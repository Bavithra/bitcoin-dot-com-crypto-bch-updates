import NewsUtil from "../utils/NewsUtil";
import ApiClient from "./ApiClient";

async function getNews() {
  const response = await ApiClient.get("https://news.bitcoin.com/feed/");

  return NewsUtil.getFormattedNewsList(response.data);
}

export default {
  getNews
};