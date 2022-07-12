import React, { useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ButtonGroup from "../../common/ButtonGroup";
import { GraphPeriod } from "../../enums/GraphPeriod.enum";
import DateUtil from "../../utils/DateUtil";
import GraphUtil from "../../utils/GraphUtil";
import { Container } from "./PriceHistoryGraph.styles";

type Props = {
  bchPriceHistory: [];
};

function PriceHistoryGraph(props: Props) {
  const { bchPriceHistory } = props;

  const [period, setPeriod] = useState<GraphPeriod>(GraphPeriod.OneMonth);

  const handleButtonClick = (selectedPeriod: GraphPeriod) => {
    setPeriod(selectedPeriod);
  };

  const data = GraphUtil.getFormattedGraphData(period, bchPriceHistory);

  return bchPriceHistory.length > 0 ? (
    <Container>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 15,
          }}
        >
          <XAxis
            height={60}
            interval={0}
            angle={period === GraphPeriod.OneMonth ? -20 : 0}
            dataKey="date"
            tickFormatter={(tickItem) => DateUtil.formatXAxis(period, tickItem)}
          />
          <YAxis dataKey="price" />
          <Area dataKey="price" stroke="#04c18e" fill="#f6f7fa" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 2" />
        </AreaChart>
      </ResponsiveContainer>
      <ButtonGroup
        buttons={[
          GraphPeriod.OneDay,
          GraphPeriod.OneWeek,
          GraphPeriod.OneMonth,
        ]}
        onButtonClick={handleButtonClick}
      />
    </Container>
  ) : (
    <div />
  );
}

export default PriceHistoryGraph;
