import React, { useState } from "react";
import { AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { GraphPeriod } from "../../enums/GraphPeriod.enum";
import { Container } from "./PriceHistoryGraph.styles";

type Props = {
  bchPriceHistory: [];
};

const rangeData = [
  {
    day: "2022-07-11T00:00:00.000Z",
    temperature: 107.63,
  },
  {
    day: "2022-07-10T00:00:00.000Z",
    temperature: 111.06,
  },
  {
    day: "2022-07-09T00:00:00.000Z",
    temperature: 109.32,
  },
  {
    day: "2022-07-08T00:00:00.000Z",
    temperature: 110.13,
  },
];

function PriceHistoryGraph(props: Props) {
  const { bchPriceHistory } = props;

  const [period, setPeriod] = useState<GraphPeriod>(GraphPeriod.OneMonth);

  return bchPriceHistory.length > 0 ? (
    <Container>

    <ResponsiveContainer width="100%" height={500}>


    <AreaChart
      width={730}
      height={250}
      data={rangeData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Area dataKey="temperature" stroke="#04c18e" fill="#f6f7fa" />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />

    </AreaChart>
    </ResponsiveContainer>
        </Container>

  ) : (
    <div />
  );
}

export default PriceHistoryGraph;
