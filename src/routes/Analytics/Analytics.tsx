import React, { useState } from "react";
import DataList from "../../components/DataList";
import UserForm from "../../components/UserForm";
import UserInfo from "../../components/UserInfo";
import { Holding } from "./../../components/Holding/Holding";

type Props = {};

export enum FetchingStatus {
  noRequest,
  pending,
  complete,
}

const Analytics = (props: Props) => {
  const [userData, setUserData] = useState<UserData>();
  const [fetchingStatus, setFetchingStatus] = useState<FetchingStatus>(
    FetchingStatus.noRequest
  );

  const onData = (data: UserData) => {
    setUserData(data);
  };

  return (
    <div className="flex h-full min-h-screen w-full bg-black text-hacker-green justify-center items-top p-10">
      <div>
        <UserForm
          onData={onData}
          setFetchingStatus={setFetchingStatus}
        ></UserForm>
        {fetchingStatus == FetchingStatus.noRequest ? null : fetchingStatus ==
          FetchingStatus.pending ? (
          <Holding />
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
