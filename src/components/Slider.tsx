import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import images from './Images';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
export const Sliders = () => {


  const { showSlider, setShowSlider } = useContext(ProductContext);

  return (
    <>
      <div className={` ${showSlider ? 'slider-bakground' : 'hidden'}`}>
        
      </div>

      <div className={` ${showSlider ? 'slider-desktop' : 'hidden'}`}>
        <div className=' cursor-pointer ' onClick={ () => setShowSlider(false)}>
          <img className='absolute -top-10 right-2 z-30 w-[20px]' src={images.icons.closeCustom} alt="close" />
        </div>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={80}
          totalSlides={4}
          className='relative'
        >

          <Slider className='md:rounded-2xl'>
            <Slide index={0}><img src={images.productBig[0].src} alt="Slide-1" /> </Slide>
            <Slide index={1}><img src={images.productBig[1].src} alt="Slide-2" /></Slide>
            <Slide index={2}><img src={images.productBig[2].src} alt="Slide-3" /></Slide>
            <Slide index={2}><img src={images.productBig[3].src} alt="Slide-4" /></Slide>
          </Slider>


          <ButtonBack className='left-[3%] sliderButton'>
            <img className='w-[7px] h-[10px]' src={images.icons.previus} alt="Back" />
          </ButtonBack>
          <ButtonNext className='right-[3%] sliderButton'>
            <img className='w-[7px] h-[10px]' src={images.icons.next} alt="Back" />
          </ButtonNext>
        </CarouselProvider>
      </div>

    </>
  );
}
