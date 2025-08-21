import Image from "next/image";
import Navbar from "../components/Navbar";
import ImagesCarousel from "../components/ImagesCarousel";
import Featured from "../components/Featured";
import product1 from "../../../public/product1.jpg"
import product2 from "../../../public/product2.jpg"
import product3 from "../../../public/product3.jpg"
import product4 from "../../../public/product4.jpg"
import product5 from "../../../public/product5.jpg"
import product6 from "../../../public/product6.jpg"
import Card from "../components/Card";

const products = [
  {
    name: "Nombre de producto",
    price: 99999,
    promo: "12 cuotas sin interés de $9999",
    image: product1,
    installment: 12,
    installmentValue: 9999
  },
  {
    name: "Nombre de producto",
    price: 99999,
    promo: "12 cuotas sin interés de $9999",
    image: product2,
    installment: 12,
    installmentValue: 9999
  },
  {
    name: "Nombre de producto",
    price: 99999,
    promo: "12 cuotas sin interés de $9999",
    image: product3,
    installment: 12,
    installmentValue: 9999
  },
  {
    name: "Nombre de producto",
    price: 99999,
    promo: "12 cuotas sin interés de $9999",
    image: product4,
    installment: 12,
    installmentValue: 9999
  },
  {
    name: "Nombre de producto",
    price: 99999,
    promo: "12 cuotas sin interés de $9999",
    image: product5,
    installment: 12,
    installmentValue: 9999
  },
  {
    name: "Nombre de producto",
    price: 99999,
    promo: "12 cuotas sin interés de $9999",
    image: product6,
    installment: 12,
    installmentValue: 9999
  },
]

export default function Home() {
  return (
    <main >
      <Navbar />
      <ImagesCarousel />
      <Featured />
      <div className="grid grid-cols-2 mt-8 px-2 gap-x-2 gap-y-6">
        {products.map((product, index) => (
          <Card key={index} productData={product} />
        ))}
      </div>

    </main>
  );
}
