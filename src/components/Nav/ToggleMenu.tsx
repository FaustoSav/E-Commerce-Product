import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"


export const ToggleMenu = () => {
  const {showMenu, navArray, setShowMenu} = useContext(ProductContext)



  return (
    <ul className={`  toggleMenu ${showMenu ? 'visible' : 'invisible'}  `}>
        {
          navArray.map((item: string) => { return <li key={item} className='cursor-pointer ml-4 md:hover:text-veryDarkBlue md:ml-0'>  {item} </li> })
        }
      </ul>
  )
}
