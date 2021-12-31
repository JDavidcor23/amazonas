import React from "react";
import { categorias } from "../../data/categories";
import { topBestSellers } from "../../data/categories";
import {ContainerCategorias, TopConatiner} from './StyledCategories'
import TopBestSellers from '../../Components/TopBestSellers/TopBestSellers'
import CardsCategories from "../../Components/CardsCategories/CardsCategories";
const Categories = () => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Top de categorias</h2>
      <ContainerCategorias>
        {categorias.map((cat) => (
          <CardsCategories cat={cat} key={cat.id} />
          ))}
        </ContainerCategorias>
        <h2 style={{textAlign: "center"}}>Más vendidos</h2>
      <ContainerCategorias>
        <TopConatiner>
          {topBestSellers.map((sellers) =>(
            <TopBestSellers sellers={sellers} key={sellers.id}/>
            ))}
        </TopConatiner>
      </ContainerCategorias>
    </div>
  );
};

export default Categories;
