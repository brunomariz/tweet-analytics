import React, { useState } from "react";
import DataList from "../../components/DataList";
import UserForm from "../../components/UserForm";
import UserInfo from "../../components/UserInfo";
import "./Analytics.css";

type Props = {};

// type UserAnalyticsData = {
//   count: { index: string[]; values: number[] };
//   sum: { index: string[]; values: number[] };
//   sumOverCount: { index: string[]; values: number[] };
//   id: string;
// };

const Analytics = (props: Props) => {
  const [userData, setUserData] = useState<UserData>();
  const [isFetching, setIsFetching] = useState(true);

  const onData = (data: UserData) => {
    setUserData(data);
    setIsFetching(false);
  };

  return (
    <div className="flex h-full min-h-screen w-full bg-black text-hacker-green justify-center items-top p-10">
      <div>
        <UserForm onData={onData}></UserForm>
        {isFetching ? (
          <div>
            [Holding<span className="ellipsis-loading">...</span>]
          </div>
        ) : (
          <div>
            <UserInfo
              data={
                userData || { createdAt: "", id: "", name: "", username: "" }
              }
            />
            <DataList id={userData?.id || "1495513434590490629"}></DataList>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
