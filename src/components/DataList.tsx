import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";

type Props = {
  // count: { index: string[]; values: number[] };
  // sum: { index: string[]; values: number[] };
  // sumOverCount: { index: string[]; values: number[] };
  id: string;
};

type UserAnalytics = {
  count: { index: string[]; values: number[] };
  sum: { index: string[]; values: number[] };
  sumOverCount: { index: string[]; values: number[] };
};

const DataList = (props: Props) => {
  const [data, setData] = useState<UserAnalytics>();
  const [isFetching, setIsFetching] = useState(true);

  // const mostFrequentWord: string = props.count.index[0];
  // const mostFrequentWordFrequency: Number = props.count.values[0];

  // const mostImportantKeyword = props.sumOverCount.index[0];
  // const mostImportantKeywordValue = props.sumOverCount.values[0];

  let mostFrequentWord: string = data?.count.index[0] || "";
  let mostFrequentWordFrequency: Number = data?.count.values[0] || 0;

  let mostImportantKeyword = data?.sumOverCount.index[0] || "";
  let mostImportantKeywordValue = data?.sumOverCount.values[0] || 0;

  useEffect(() => {
    fetch(`http://localhost:5000/tweet/keywords/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [props.id]);

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
