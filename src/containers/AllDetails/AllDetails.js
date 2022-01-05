import React from "react";
import DesktopDetail from "../../Components/DesktopDetail/DesktopDetail";
import MobileDetail from "../../Components/MobileDetail/MobileDetail";
import { products } from "../../data/products";
import { Conatiner } from "./StyledAllDetails";
const AllDetails = () => {
  const id = localStorage.getItem("detailId");
  const product = products.find((p) => p.id === Number(id));

  return (
    <Conatiner>
      <MobileDetail product={product} />
      <DesktopDetail product={product} />
    </Conatiner>
  );
};

export default AllDetails;
