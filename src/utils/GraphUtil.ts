import {
  isThisMonth,
  isThisWeek,
  isToday,
} from "date-fns";
import { GraphPeriod } from "../enums/GraphPeriod.enum";
import DateUtil from "./DateUtil";

export function getFilteredDate(
  bchPriceHistoryDate: string,
  selectedPeriod: GraphPeriod
) {
  switch (selectedPeriod) {
    case GraphPeriod.OneDay: {
      return isToday(new Date(bchPriceHistoryDate));
    }

    case GraphPeriod.OneWeek: {
      return isThisWeek(new Date(bchPriceHistoryDate));
    }

    case GraphPeriod.OneMonth: {
      return isThisMonth(new Date(bchPriceHistoryDate));
    }
  }
}

export function getFormattedGraphData(
  selectedPeriod: GraphPeriod,
  bchPriceHistoryList: []
) {
  return bchPriceHistoryList
    .map((bchPriceHistory) => {
      return {
        date: DateUtil.getDisplayDate(bchPriceHistory[0]),
        price: bchPriceHistory[1] / 100,
      };
    })
    .filter((bchPriceHistory) =>
      getFilteredDate(bchPriceHistory.date, selectedPeriod)
    );
}

export default {
  getFormattedGraphData,
};
