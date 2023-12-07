import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/Carousel.css"
export default function Caroussel() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
            <div className='flex'>
              <div className='flex justify-center items-center mt-[20px]'>
                <h3 className='h3'>VOUS AVEZ UN COLIS? <br />
                  Si vous avez des bagages à expédier à vos proches, SenGP simplifie <br /> la mise en contact avec les GPs.</h3>
                <img src="./colis.webp" className='w-[350px]' alt="" />
              </div>
          </div>
          <div className='flex'>
            <div className='flex justify-center items-center mt-[20px]'>
              <h3 className='h3'>
                CHOISISSEZ VOTRE GP <br />
                Vous disposez d'une liste de GPs triés par <br /> nom et emplacement géographique. Coordonnez-vous avec...
              </h3>
              <img src="./colis.webp" className='w-[350px] ml-[px]' alt="" />
            </div>
          </div>
          <div className='flex'>
              <div className='flex justify-center items-center mt-[20px]'>
                <h3 className='h3'>VOUS AVEZ UN COLIS? <br />
                  Si vous avez des bagages à expédier à vos proches, SenGP simplifie <br /> la mise en contact avec les GPs.</h3>
                <img src="./colis.webp" className='w-[350px]' alt="" />
              </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
