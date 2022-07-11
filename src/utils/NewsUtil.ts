import { XMLParser } from "fast-xml-parser";

function getFormattedNewsList(response: string | Buffer) {
  const jsonResponse = new XMLParser().parse(response);
  const newsList = jsonResponse.rss.channel.item.slice(0, 4);

  return newsList.map((news: any) => {
    return {
      title: news.title,
      imageUrl: news["bnmedia:post-thumbnail"]["bnmedia:url"],
      "published-date": news.pubDate,
      link: news.link,
    };
  });
}

export function formatTitle(str: string) {
  return str.replace(/&#(\d+);/g, function (_match, dec) {
    return String.fromCharCode(dec);
  });
}

export default {
  getFormattedNewsList,
  formatTitle,
};
