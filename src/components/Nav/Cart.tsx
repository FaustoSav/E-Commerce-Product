import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import images from '../Images'
import { CartProduct } from "./CartProduct"

export const Cart = () => {

  const { showCart, setShowCart, cartCount, showMenu } = useContext(ProductContext)
  return (
    <>

      <div className='flex ml-12 gap-3 items-center mr-4 relative md:ml-18 md:gap-10 ' >

        {
          cartCount > 0 && <span className="cartCount"> {cartCount} </span>
        }

        <div onClick={() => showCart ? setShowCart(false) : setShowCart(true)}
          className={`  ${showCart ? 'opacity-100' : 'opacity-50'} md:hover:opacity-100`} >
          <img src={images.icons.cart} alt="cart-icon" className={`w-5 ${showCart} md:w-7 hover:cursor-pointer`} />
        </div>
        <div>
          <img src={images.avatar} alt="avatar"
            className={`w-6 mr-2 rounded-full  hover:border-2 hover:border-customOrange  md:w-11`} />
        </div>
      </div>

      <div className={`toggleCart  ${!showCart ? 'invisible' : 'visible'}`}>

        <div className="text-veryDarkBlue font-bold h-[25%] flex items-center  ">
          <span className="ml-4 md:text-base">Cart</span>
        </div>
        <div className="flex justify-center items-center  h-[75%] ">
          <CartProduct />
        </div>

      </div>
    </>

  )
}
