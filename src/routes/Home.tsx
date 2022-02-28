import React from "react";
import InfoCard from "../components/InfoCard";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex h-screen w-full bg-hacker-green justify-center items-center">
      <InfoCard>
        <div className="p-2">
          Home Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur quas repellendus natus cumque nulla sint modi laudantium
          quam perferendis inventore! Aliquid odio ratione voluptatem delectus,
          ullam cumque esse libero assumenda ipsum fugiat mollitia eum est!
          Perferendis accusamus laboriosam similique amet quaerat quis, sed
          minus vel nisi sit maiores labore laborum?
        </div>
      </InfoCard>
    </div>
  );
};

export default Home;
