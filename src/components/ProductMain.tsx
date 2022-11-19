import { ProductInfo } from "./ProductInfo"
import { Sliders } from "./Slider"

import 'pure-react-carousel/dist/react-carousel.es.css';

export const ProductMain = () => {
  return (
    <main>
      <Sliders />
      <ProductInfo />
    </main>
  )
}
