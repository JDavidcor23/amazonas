import React from "react";
import "./Prueba.css";
const ImageSelect = () => {
  return (
    <div className="container-Container">
      <div>
        <div>
          {/* <img
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1641273378/eu5jnixx6e6nvlckrzlx.png"
            alt=""
          /> */}
          <div>
            <div>
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642105044/amazzonas/bdzw00jtwskt3ovg2etn.png"
                alt=""
              />
            </div>
            <div>No hay Ninguna imagen elegida</div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642105181/amazzonas/vtaho6cnkx2kpikeeejp.png"
              alt=""
            />
          </div>
          <div>Filename here</div>
          <input type="file" />
          <button>Choose a file</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSelect;
