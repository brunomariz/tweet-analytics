import React, { useEffect, useState } from "react";
import { BACKEND_ROOT } from "../constants";
import { FetchingStatus } from "../routes/Analytics/Analytics";
import { Holding } from "./Holding/Holding";
import InfoCard from "./InfoCard";

type Props = {
  id: string;
  // fetchingStatus: FetchingStatus;
  // setFetchingStatus: React.Dispatch<SetStateAction<FetchingStatus>>;
};

type UserAnalytics = {
  count: { index: string[]; values: number[] };
  sum: { index: string[]; values: number[] };
  sumOverCount: { index: string[]; values: number[] };
};

const DataList = (props: Props) => {
  const [data, setData] = useState<UserAnalytics>();
  const [fetchingStatus, setFetchingStatus] = useState<FetchingStatus>(
    FetchingStatus.noRequest
  );

  const emojiList = ["🏆", "😈", "🔥", "🤔", "🐸"];

  // Parse data into variables
  const frequentWords: string[] = data?.count.index || [];
  const frequentWordsFrequency: Number[] = data?.count.values || [];
  const importantWords: string[] = data?.sumOverCount.index || [];
  const importantWordsValue: Number[] = data?.sumOverCount.values || [];

  useEffect(() => {
    setFetchingStatus(FetchingStatus.pending);
    fetch(`${BACKEND_ROOT}/tweet/keywords/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFetchingStatus(FetchingStatus.complete);
      });
  }, [props.id]);

  return (
    <>
      {fetchingStatus == FetchingStatus.noRequest ? null : fetchingStatus ==
        FetchingStatus.pending ? (
        <Holding></Holding>
      ) : (
        <>
          <InfoCard>
            <h3 className="text-base">Most frequent keyword:</h3>
            <div>{frequentWords[0]}</div>
            <h4 className="text-base">
              Frequency: {frequentWordsFrequency[0]}
            </h4>
          </InfoCard>
          <InfoCard>
            <h3 className="text-base">Frequent keywords:</h3>
            <div className="m-2">
              {frequentWords.slice(0, 5).map((word, index) => {
                return (
                  <div key={index}>
                    {emojiList[index]}
                    {index + 1}. {word}
                  </div>
                );
              })}
            </div>
          </InfoCard>
          <InfoCard>
            <h3 className="text-base">Your top keywords:</h3>
            <div className="m-2">
              {importantWords.slice(0, 5).map((word, index) => {
                return (
                  <div key={index}>
                    {emojiList[index]}
                    {index + 1}. {word}
                  </div>
                );
              })}
            </div>
          </InfoCard>
        </>
      )}
    </>
  );
};

export default DataList;
