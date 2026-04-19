import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product.card";

function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
      </main>
        < ProductCard/>
    </>
  );
}
export default Home;
