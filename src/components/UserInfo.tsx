import React from "react";

type Props = {
  data: UserData;
};

const UserInfo = ({ data }: Props) => {
  return (
    <div>
      <h1 className="">Name: {data?.name}</h1>
      <h1 className="">User: {data?.username}</h1>
      <h1 className="">ID: {data?.id}</h1>
      <h1 className="">Created at: {data?.createdAt}</h1>
    </div>
  );
};

export default UserInfo;
