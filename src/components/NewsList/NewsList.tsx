import React from "react";
import { INewsList } from "../../redux/slice";
import { ComponentContainer, Text } from "../../styles/Common.styles";
import DateUtil from "../../utils/DateUtil";
import NewsUtil from "../../utils/NewsUtil";

import { Container, NewsItem, NewsTitle, Image } from "./NewsList.styles";

type Props = {
  newsList: INewsList[];
};

function NewsList(props: Props) {
  const { newsList } = props;

  return newsList.length > 0 ? (
    <ComponentContainer>
      <h1>News</h1>

      <Container>
        {newsList.map((news: INewsList) => {
          return (
            <NewsItem key={news.title} href={news.link} target='_blank'>
              <Image alt={news.imageUrl} src={news.imageUrl} />
              <NewsTitle>{NewsUtil.formatTitle(news.title)}</NewsTitle>
              <Text>{DateUtil.getDuration(news["published-date"])}</Text>
            </NewsItem>
          );
        })}
      </Container>
    </ComponentContainer>
  ) : (
    <div />
  );
}

export default NewsList;
