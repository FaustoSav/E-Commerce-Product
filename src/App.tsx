import { Nav } from "./components/Nav/Nav";
import { ProductMain } from "./components/ProductMain";



function App() {
  return (
    <div className="md:mx-auto md:px-[40px] lg:px-[150px]  xl:px-[250px] xl:max-w-[1400px]  2xl:px-[400px] 2xl:max-w-[1900px]">
      <Nav />
      <ProductMain/>
    </div>



  );
}

export default App;
