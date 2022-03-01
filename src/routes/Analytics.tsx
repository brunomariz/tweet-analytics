import React, { useEffect, useState } from "react";
import axios from "axios";
import DataList from "../components/DataList";
import UserInfo from "../components/UserInfo";

type Props = {};

type UserData = {
  count: { index: string[]; values: number[] };
  sum: { index: string[]; values: number[] };
  sumOverCount: { index: string[]; values: number[] };
  id: string;
};

const Analytics = (props: Props) => {
  const [data, setData] = useState<UserData>();
  const [isFetching, setIsFetching] = useState(true);

  const onData = (data: UserData) => {
    setData(data);
    setIsFetching(false);
  };

  return (
    <div className="flex h-screen w-full bg-black text-hacker-green justify-center items-center">
      <div>
        <UserInfo onData={onData}></UserInfo>
        {isFetching ? (
          <div>[Holding...]</div>
        ) : (
          <DataList
            id={data?.id || "1495513434590490629"}
            // sum={data?.sum || { values: [], index: [] }}
            // count={data?.count || { values: [], index: [] }}
            // sumOverCount={data?.sumOverCount || { values: [], index: [] }}
          ></DataList>
        )}
      </div>
    </div>
  );
};

export default Analytics;
