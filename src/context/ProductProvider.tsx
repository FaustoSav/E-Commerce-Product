import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext';


interface Iprops {
  children: JSX.Element | JSX.Element[];
}

export const ProductProvider = ({ children }: Iprops) => {


  const navArray: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact']
  const [cartCount, setCartCount] = useState<number>(0)
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cantAdd, setCantAdd] = useState<number>(0)
  const [showSlider, setShowSlider] = useState<boolean>(false)

  useEffect(() => {
    window.innerWidth >= 720 ? setShowMenu(true) : setShowMenu(false)
    window.innerWidth < 720 ? setShowSlider(true) : setShowSlider(false)

  }, [window.innerWidth])


  const handleAdd = (action: string) => {
    switch (action) {
      case 'suma':
        setCantAdd(cantAdd + 1)
        break;
      case 'resta':
        if (cantAdd > 0) {
          setCantAdd(cantAdd - 1)
        }
        break;
      case 'submit':
        setCartCount(cartCount + cantAdd)
        break;
      default:
        break;
    }
  }
  const handleMenu = (action: string) => {
    setShowCart(false)
    switch (action) {
      case 'open':
        setShowMenu(true)
        break;
      case 'close':
        setShowMenu(false)
        break;
      default:
        setShowMenu(false)
        break;
    }
  }
  const handleCart = (action: string) => {

    switch (action) {
      case 'open':
        setShowCart(true)
        break;
      case 'close':
        setShowCart(false)
        break;
      default:
        setShowMenu(false)
        break;
    }
  }

  return (
    <ProductContext.Provider value={{
      handleMenu,
      showMenu,
      showCart,
      setShowCart,
      navArray,
      setCartCount,
      cartCount,
      setCantAdd,
      cantAdd,
      handleAdd,
      handleCart,
      setShowMenu,
      showSlider,
      setShowSlider
    }}>

      {children}
    </ProductContext.Provider>

  )
}



