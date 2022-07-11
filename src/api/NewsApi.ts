import { XMLParser } from "fast-xml-parser";
import ApiClient from "./ApiClient";

async function getNews() {
  const xmlResponse = await ApiClient.get("https://news.bitcoin.com/feed/");
  const jsonResponse = new XMLParser().parse(xmlResponse.data);
  return jsonResponse.rss.channel.item.slice(0, 4);
}

export default {
  getNews
};