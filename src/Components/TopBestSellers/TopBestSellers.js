import React from "react";
import { CardsTops } from "./StyledTopBestSellers";
const TopBestSellers = ({ sellers }) => {
  return (
    <CardsTops to="/">
      <img src={sellers.img} alt="" width="100%" />
    </CardsTops>
  );
};

export default TopBestSellers;
