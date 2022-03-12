import React from "react";
import "./Holding.css";

export function Holding({}) {
  return (
    <span className="grid grid-cols-9">
      <span className="col-span-1">[</span>
      <span className="col-span-3 ellipsis-loading">Holding</span>
      <span className="col-span-5">]</span>
    </span>
  );
}
