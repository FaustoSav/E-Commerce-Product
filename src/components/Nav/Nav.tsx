
import { useContext } from 'react'
import images from '../Images'
import { ProductContext } from '../../context/ProductContext'
import { ToggleMenu } from './ToggleMenu'
import { Cart } from './Cart'

export const Nav = () => {


  const { handleMenu, showMenu, } = useContext(ProductContext)



  return (

    <nav className='nav'>

      <div onClick={() => handleMenu('close')}
        className={` menuBackdrop ${showMenu ? 'visible' : 'invisible'}`} >
      </div>
      <div className=' self-center md:hidden' onClick={() => handleMenu('open')}>
        <img src={images.icons.menu} alt="menu"
          className='ml-4 mr-4 w-[13px] ' />
      </div>
      <div className='self-center '><img src={images.icons.logo} alt="Logo-img" className='w-[110px] md:w-[130px] lg:w-[180px] md:mr-10' /></div>

      <ToggleMenu />

      <div className={` closeMenu ${showMenu ? 'visible' : 'invisible'} md:hidden  `}
        onClick={() => handleMenu('close')}  >
        <img src={images.icons.close} alt="close" className=' w-10' />
      </div>

      <Cart />



    </nav >

  )
}
