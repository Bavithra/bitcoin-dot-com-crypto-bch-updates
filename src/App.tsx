import React, { useEffect } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import { PageContainer } from "./styles/Common.styles";
import { useDispatch, useSelector } from "react-redux";
import { getBchPrice, getBchPriceHistory, getNews } from "./redux/slice";
import { AppDispatch, RootState } from "./redux/store";
import PriceHistoryGraph from "./components/PriceHistoryGraph";

function App() {
  const newsList = useSelector(
    (state: RootState) => state.reducer.data.newsList
  );
  const bchPrice = useSelector(
    (state: RootState) => state.reducer.data.bchPrice
  );
  const bchPriceHistory = useSelector(
    (state: RootState) => state.reducer.data.bchPriceHistory
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNews());
    dispatch(getBchPrice());
    dispatch(getBchPriceHistory());
  }, [dispatch]);

  return (
    <PageContainer>
      <h1>Bitcoin Cash</h1>
      <h3>{`${bchPrice.price / 100} USD`}</h3>
      <PriceHistoryGraph bchPriceHistory={bchPriceHistory} />
      <NewsList newsList={newsList} />
    </PageContainer>
  );
}

export default App;
