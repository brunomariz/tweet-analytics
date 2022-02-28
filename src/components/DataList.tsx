import React from "react";
import InfoCard from "./InfoCard";

type Props = {
  count: { index: string[]; values: number[] };
  sum: { index: string[]; values: number[] };
  sumOverCount: { index: string[]; values: number[] };
};

const DataList = (props: Props) => {
  const mostFrequentWord: string = props.count.index[0];
  const mostFrequentWordFrequency: Number = props.count.values[0];

  const mostImportantKeyword = props.sumOverCount.index[0];
  const mostImportantKeywordValue = props.sumOverCount.values[0];

  console.log(props);

  return (
    <div>
      <InfoCard>
        <h3 className="text-base font-bold">Most frequent keyword:</h3>
        <div>{mostFrequentWord}</div>
        <h4 className="text-base">Frequency: {mostFrequentWordFrequency}</h4>
      </InfoCard>
      <InfoCard>
        <h3 className="text-base font-bold">Most important keyword:</h3>
        <div>{mostImportantKeyword}</div>
      </InfoCard>
    </div>
  );
};

export default DataList;
