import React from "react";
import { categorias } from "../../data/categories";
import { topBestSellers } from "../../data/categories";
import {ContainerCategorias, TopConatiner} from './StyledCategories'
import TopBestSellers from '../../Components/TopBestSellers/TopBestSellers'
import CardsCategories from "../../Components/CardsCategories/CardsCategories";
const Categories = () => {
  return (
    <ContainerCategorias>
      {categorias.map((cat) => (
        <CardsCategories cat={cat} key={cat.id} />
      ))}
      <TopConatiner>
          {topBestSellers.map((sellers) =>(
            <TopBestSellers sellers={sellers} key={sellers.id}/>
          ))}
      </TopConatiner>
    </ContainerCategorias>
  );
};

export default Categories;
