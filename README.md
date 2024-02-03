# Link

- Proje içerisinde yönlendirme işlemlerinde a etiketi yerine kullanılır.
- Href yerine to değeri yönlendirilecek sayfayı belirler.

# Navlink

- Link etiketi ile aynı görevi yapar.

- Kullanıcı eğer ki o linkin to değeri ile yönlendirme yaptığı sayfada ise link aktif class'ı alır.

# Dynamic Route

- Sayfa içeriğinin url'den alınan parametrelere göre değiştiği sayfalara verdiğimiz isim

- Örnek:

- Youtube video sayfası
- Netflix film detay sayfası
- Amazon ürün sayfası

# useLocation

- Kullanıcının bulunduğu sayfa ile ilgili bilgileri alır.

- state / path / hash / param

# useNavigate

- Linkin fonksiyon karşılığı

- Kullanılabilmesi için bir kere çağrılması gerekli bileşende

- const navigate = useNavigate();

# Search Params (arama parametresi)

- normalde state de tutacağımız değerleri arama parametresinde tutmak isteyebiliriz

- State de tutulan veriler sayfa yenilendiğinde kaybolur

- Ama arama parametreleri için böyle bir durum söz konusu değildir.

- Bu yüzden sayfa yenilenince kaybetmek istemeyeceğimiz örneğin filtreleme değerlerini arama parametresi olarak tutarız

# Nested Router (İç içe yollar)
# bookstore-react
