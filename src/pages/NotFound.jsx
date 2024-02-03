import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();
  return (
    <div className="container py-6 text-center">
      <img className="img-fluid rounded" src={"/images/hata.gif"} alt="" />
      <p className="text-center fs-3 my-3">
        Üzgünüz, aradığınız sayfa bulunamadı.
      </p>

      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          AnaSayfa
        </Link>
      </div>

      {state && (
        <p className="fs-3 text-center my-4">
          Hata Kodunuz: <span className="badge bg-warning mx-4"> {state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
