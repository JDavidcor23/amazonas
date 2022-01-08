import React from "react";
import { Link } from "react-router-dom";
import { FooterC, Ul } from "./StyledFooter";
const Footer = () => {
  return (
    <FooterC>
      <Ul>
        <Link to="/sell" style={{ textDecoration: "none" }}>
          <li
            style={{
              color: "white",
              margin: "0 20px",
              listStyle: "none",
              fontSize: "1.4rem",
              textAlign:"center"
            }}
          >
            Vende en amazonas
          </li>
        </Link>
        <li>
          <img
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640477276/amazzonas/rg1jkqcdlfez0tzh0iej.png"
            alt="Amazonas logo"
            width="150px"
          />
        </li>
      </Ul>
    </FooterC>
  );
};

export default Footer;
