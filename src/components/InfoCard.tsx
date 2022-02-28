import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const InfoCard = (props: Props) => {
  return (
    <div className="text-left max-w-md m-2 p-1 border-2 rounded-sm border-hacker-green">
      {props.children}
    </div>
  );
};

export default InfoCard;
