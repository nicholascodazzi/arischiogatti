import Navbar from "./templates/Navbar";
import Carousel from "./components/Carousel";
import Sections from "./components/Sections";
import Adoptions from "./components/Adoptions";
import Footer from "./templates/Footer";

export default function Home() {
  return (
    <>
      <meta name="author" content="Codazzi Nicholas" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />
      <Carousel />
      <Sections />
      <Adoptions />
      <Footer />
    </>
  );
}
