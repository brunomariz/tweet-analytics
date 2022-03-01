import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const InfoCard = (props: Props) => {
  return (
    <div className="text-left max-w-md m-2 p-2 border-[1px] rounded-sm border-hacker-green">
      {props.children}
    </div>
  );
};

export default InfoCard;
