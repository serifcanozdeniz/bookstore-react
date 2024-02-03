import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1>Hoşgeldiniz</h1>

      <img className="img-fluid rounded" src={"/images/welcome.gif"} />

      <p>
        <Link className="text-primary" to={"/ürünler"}>
          Ürünler sayfasında
        </Link>{" "}
        yeni çıkan tüm kitaplara ulaşabilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;
