import React from "react";
import { INewsList } from "../../redux/slice";
import { ComponentContainer } from "../../styles/Common.styles";

import { Container, InContainer, NewsTitle } from "./NewsList.styles";

type Props = {
  newsList: INewsList[];
};

function NewsList(props: Props) {
  const { newsList } = props;

  return newsList.length > 0 ? (
    <ComponentContainer>
      <h1>News</h1>

      <Container>
        {newsList.map((news: any) => {
          return (
            <InContainer key={news.title}>
              <img alt={news.imageUrl} src={news.imageUrl} />
              <NewsTitle>{news.title}</NewsTitle>
            </InContainer>
          );
        })}
      </Container>
    </ComponentContainer>
  ) : (
    <div />
  );
}

export default NewsList;
