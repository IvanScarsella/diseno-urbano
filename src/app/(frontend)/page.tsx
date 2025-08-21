import Image from "next/image";
import Navbar from "../components/Navbar";
import ImagesCarousel from "../components/ImagesCarousel";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <main >
      <Navbar />
      <ImagesCarousel />
      <Featured />
    </main>
  );
}
