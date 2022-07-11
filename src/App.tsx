import React, { useEffect } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import { PageContainer } from "./styles/Common.styles";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./redux/slice";
import { AppDispatch, RootState } from "./redux/store";

function App() {
  const newsList = useSelector((state: RootState) => state.reducer.data.newsList);

  // const bchPrice = useSelector((state: RootState) => state.reducer.data.bchPrice);
  // const bchPriceHistory = useSelector((state: RootState) => state.reducer.data.bchPriceHistory);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  //   console.log(bchPrice);
  //   console.log(newsList);
  //   console.log(bchPriceHistory);

  return (
    <PageContainer>
      <NewsList newsList={newsList} />
    </PageContainer>
  );
}

export default App;
