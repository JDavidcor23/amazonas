import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AllDetails from "../../containers/AllDetails/AllDetails";
const Detail = () => {
  return (
    <div style={{position:"relative"}}>
      <Navbar />
      <AllDetails/>
      <Footer />
    </div>
  );
};

export default Detail;
