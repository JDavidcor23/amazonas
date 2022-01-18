import React from "react";
import CardsProducts from "../../Components/CardsProducts/CardsProducts";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Container } from "./StyledProducts";
import { useSelector } from "react-redux";
const Products = () => {
  const { productList } = useSelector((state) => state.category);
  return (
    <div style={{position:"relative"}}>
      <Navbar />
      <Container>
        {productList.length < 1 ? (
          <img
            style={{ height: "80vh" }}
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642379230/amazzonas/s3almw2eprsk4dxa9rgs.jpg"
            alt="404"
          />
        ) : (
          productList.map((product) => (
            <CardsProducts product={product} key={product.id} />
          ))
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
