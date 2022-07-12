import { subDays, subMonths, subWeeks } from "date-fns";
import { GraphPeriod } from "../enums/GraphPeriod.enum";
import DateUtil from "./DateUtil";

export function getFilteredDate(selectedPeriod: GraphPeriod) {
  switch (selectedPeriod) {
    case GraphPeriod.OneDay: {
      return subDays(new Date(), 1);
    }

    case GraphPeriod.OneWeek: {
      return subWeeks(new Date(), 1);
    }

    case GraphPeriod.OneMonth: {
      return subMonths(new Date(), 1);
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
    .filter(
      (bchPriceHistory) =>
        new Date(bchPriceHistory.date) >= getFilteredDate(selectedPeriod)
    )
    .sort((bchPriceHistory) => {
      return new Date(bchPriceHistory.date).getTime() - new Date().getTime();
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFormattedGraphData,
};
