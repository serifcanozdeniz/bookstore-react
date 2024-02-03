import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const [book, setBook] = useState(null);

  // useNavigate kurulumu
  const navigate = useNavigate();

  //1) url deki parametreyi al
  const { id } = useParams();

  //2) id sine göre kitabın bilgilerini api dan al
  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        console.log(err);
        // ürünün bilgisi api den gelmediyse
        // kullanıcıyı 404 sayfasına yönlendir
        // yönlendirirken hata kodunun verisini de aktar
        navigate("/undefined", { state: err.response.status });
      });
  }, []);
  return (
    <div>
      {/* kitap gelmediyse */}
      {!book && <p>Yükleniyor...</p>}

      {/* kitap geldiyse */}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
              src={book.image}
              alt={book.title}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookInfo title={"Yazar"} value={book.author} />
              <BookInfo title={"Açıklama"} value={book.description} />
              <BookInfo title={"Yıl"} value={book.year} />
              <BookInfo title={"Sayfa Sayısı"} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

// bu dosyadaki 2. component

const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span> {value}</span>
    </p>
  );
};
