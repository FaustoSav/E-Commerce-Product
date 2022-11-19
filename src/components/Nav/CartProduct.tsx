import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import images from '../Images'



export const CartProduct = () => {

  const { cartCount, setCartCount } = useContext(ProductContext)
  return (
    <>

      {
        cartCount > 0
          ? <div className="w-full p-5 flex flex-col gap-5 ">
                <div className="flex items-center gap-3">
                      <img src={images.productSmall[0].src} alt="img-product" className='w-10  rounded-[3px]' />
                      <div className='font-medium text-darkGrayBlue  overflow-hidden  flex flex-col  '> 
                          <span className="truncate md:text-base ">Autumn Limited Edition Sneakers</span> 
                          <span className="md:text-base"> $125.00 x {cartCount}  <span className="font-bold text-veryDarkBlue"> ${125  * cartCount} </span>  </span>
                      </div>
                      <div >
                          <img onClick={ () => setCartCount(cartCount - 1)} src={images.icons.delete }  alt="delete-icon"  className="w-4 md:w-5 cursor-pointer md:ml-6"/>
                      </div>
                </div>
                <div onClick={ () => setCartCount(0)}
                className="checkout">
                  Checkout
                </div>
            </div>
          : <p className="text-darkGrayBlue md:text-base ">Your cart is empty</p>
      }

    </>
  )
}
