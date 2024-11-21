import React, { useEffect } from 'react'
import Container from './Container'
import Text from './Text'
import LoveCard from './LoveCard'
import Flex from './Flex'
import Author from '../assets/author.png'
import Author2 from '../assets/author2.png'
import Author3 from '../assets/author3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/style.css'

const CustomerLove = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    });
  })
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'custom_dots',  
    autoplay: true
  };
  return (
    <>
    <div className="py-16 bg-Explorebg">
        <Container>
            <div className="text-center text-white" data-aos="fade-down">
              <Text text={'Our Customers Love Us'} as='h1' className={'text-4xl font-Plus font-bold mb-6'}/>
              <Text text={'From 24/7 support that acts as your extended team to incredibly fast website performance'} as='h1' className={'text-base font-Inter font-medium mb-12 px-[450px] '}/>               
            </div>
            
            <div className={'gap-x-10 mb-10'}>
              <Slider {...settings}>
                <div>
                <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author} text2={'Jamie Knop'} text3={'Business Owner'}/>
                </div>
                <div>
                <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author2} text2={'Jahed Khan'} text3={'Business Owner'}/>
                </div>
                <div>
                <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author3} text2={'Samira Khan'} text3={'Digital Marketer'}/>
                </div>
                <div>
                <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author} text2={'Jamie Knop'} text3={'Business Owner'}/>
                </div>
              </Slider>
            </div>

        </Container>
    </div>
    </>
  )
}

export default CustomerLove

