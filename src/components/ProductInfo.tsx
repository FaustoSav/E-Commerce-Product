import { useContext, useState } from 'react'
import images from '../components/Images'
import { ProductContext } from '../context/ProductContext'

export const ProductInfo = () => {

  const { handleAdd, cantAdd, showSlider, setShowSlider } = useContext(ProductContext);

  const [showIMG, setShowIMG] = useState(0)

    
  return (


    <section className='product-container '>
      <div className="hero-container hidden md:block">
        <div className='img-container' onClick={ () => setShowSlider(true)}>
          <img src={images.productBig[showIMG].src} alt="img" className='hero-img' />
        </div>

        <div className='footer-hero'>
          {
            images.productSmall.map((product, i) =>
              <article className={`sub-img ${i == showIMG ? ' border-customOrange opacity-60' : '' }`}  onClick={() => setShowIMG(i)}  >
                <img src={product.src} alt="small-img" className='w-full' />
              </article>
            )
          }
        </div>
      </div>

      <div className='info-container'>

        <div >
          <h3 className=' text-customOrange font-bold text-[10px] mb-2 tablet:text-[14px] md:mb-5' >SNEAKER COMPANY</h3>
          <h2 className='font-bold  text-veryDarkBlue text-xl leading-5 mb-3 md:text-3xl'>Fall Limited Edition Sneakers</h2>
          <p className='text-xs text-darkGrayBlue mb-4 leading-[18px]  tablet:text-sm'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll witstand everything the weather can offer.
          </p>
        </div>



        <div className='flex items-center text-center w-full justify-between md:flex-col md:items-start'>
          <div className='flex  items-center'>
            <span className='font-bold text-xl text-veryDarkBlue mr-3'> $125.00</span>
            <span className='  bg-paleOrange  text-customOrange font-bold text-sm  px-2 rounded-md'>50%</span>
          </div>
          <span className=' text-grayBlue  font-bold text-sm  line-through '>$250.00</span>
        </div>


        <div className='md:flex md:gap-3'>
          <div className='addContainer'>
            <span className='changeAdd' onClick={() => handleAdd('resta')}>-</span>
            <div className='font-bold text-sm'> {cantAdd} </div>
            <span className='changeAdd' onClick={() => handleAdd('suma')}>+</span>
          </div>
          <div className='addCartButton' onClick={() => handleAdd('submit')}>
            <img className='w-[14px] h-[14px]' src={images.icons.cartWhite} alt="cart-logo" />
            <span className='text-xs font-bold  '>Add to cart</span>
          </div>
        </div>

      </div>


    </section>

  )
}
