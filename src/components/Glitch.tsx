import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Glitch = (props: Props) => {
  return (
    <div>
      <span className="squiggle">{props.children}</span>
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="1"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="1"
            xChannelSelector="R"
            yChannelSelector="G"
          />{" "}
        </filter>
        <filter id="displacementFilter2">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.15"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="1"
            xChannelSelector="R"
            yChannelSelector="G"
          />{" "}
        </filter>
      </svg>
    </div>
  );
};

export default Glitch;
