import React from "react";
import DesktopDetail from "../../Components/DesktopDetail/DesktopDetail";
import MobileDetail from "../../Components/MobileDetail/MobileDetail";
import { Conatiner } from "./StyledAllDetails";
const AllDetails = () => {
  const productDetail = JSON.parse(localStorage.getItem("detailId"))
  return (
    <Conatiner>
       <MobileDetail product={productDetail} />
      <DesktopDetail product={productDetail} />
    </Conatiner>
  );
};

export default AllDetails;
