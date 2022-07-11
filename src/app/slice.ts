import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import BchPrice from "../api/BchPrice";
import NewsApi from "../api/NewsApi";

export interface State {
  newsList: INewsList[];
  bchPrice: IBchPrice;
  bchPriceHistory: [];
}

export interface INewsList {
  title: string;
  imageUrl: string;
  "published-date": string;
  link: string;
}

export interface IBchPrice {
  price: number;
  stamp: number;
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getNews = createAsyncThunk<INewsList[]>("getNews", async () => {
  const response = await NewsApi.getNews();
  // The value we return becomes the `fulfilled` action payload
  console.log(response);
  return response;
});

export const getBchPrice = createAsyncThunk<IBchPrice>("getBchPrice", async () => {
  const response = await BchPrice.getBchPrice();
  // The value we return becomes the `fulfilled` action payload
  console.log(response);
  return response;
});

export const getBchPriceHistory = createAsyncThunk<[]>(
  "getBchPriceHistory",
  async () => {
    const response = await BchPrice.getBchPriceHistory();
    // The value we return becomes the `fulfilled` action payload
    console.log(response);
    return response;
  }
);

const initialState: State = {
  newsList: [],
  bchPrice: {
    price: 0,
    stamp: 0,
  },
  bchPriceHistory: [],
};
export const slice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action: PayloadAction<INewsList[]>) => {
        state.newsList = action.payload;
      })
      .addCase(getBchPrice.fulfilled, (state, action: PayloadAction<IBchPrice>) => {
        state.bchPrice = action.payload;
      })
      .addCase(getBchPriceHistory.fulfilled, (state, action) => {
        state.bchPriceHistory = action.payload;
      });
  },
});

export default slice.reducer;
