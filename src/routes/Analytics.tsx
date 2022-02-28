import React, { useEffect, useState } from "react";
import axios from "axios";
import DataList from "../components/DataList";
import UserInfo from "../components/UserInfo";

type Props = {};

type UserAnalytics = {
  count: { index: string[]; values: number[] };
  sum: { index: string[]; values: number[] };
  sumOverCount: { index: string[]; values: number[] };
};

const Analytics = (props: Props) => {
  const [data, setData] = useState<UserAnalytics>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/tweet/keywords/1078681221318746113")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="flex h-screen w-full bg-black text-hacker-green justify-center items-center">
      <div>
        <UserInfo></UserInfo>
        {isFetching ? (
          <div>Fetching...</div>
        ) : (
          <DataList
            sum={data?.sum || { values: [], index: [] }}
            count={data?.count || { values: [], index: [] }}
            sumOverCount={data?.sumOverCount || { values: [], index: [] }}
          ></DataList>
        )}
      </div>
    </div>
  );
};

export default Analytics;
