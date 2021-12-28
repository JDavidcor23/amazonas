import React from "react";

import {LinkCards} from './StyledCardsCategories'
const CardsCategories = ({ cat }) => {
  return (
    <LinkCards to="/">
      <h3 style={{padding: "20px 0"}}>{cat.title}</h3>
      <img src={cat.img} alt={cat.title} style={{width: "100%", height:"90%"}} />
    </LinkCards>
  );
};

export default CardsCategories;
