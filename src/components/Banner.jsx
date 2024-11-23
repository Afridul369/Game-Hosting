import React, { useEffect } from 'react'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import { IoGameControllerOutline } from "react-icons/io5";
import Image from './Image';
import BannerImage from '../assets/bannerrightimg.png';
import Gamebanner from '../assets/gamebanner.png';
import Button from './Button';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true, 
  })
}, [])
  return (
    <>
   <div className="py-52 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full  after:bg-gradient-to-r after:from-BorderBottom after:from-25% after:z-10 bg-Banner bg-no-repeat bg-center bg-cover ">
   <Container>
    <Flex>
      <div className="w-3/5 z-20">
        <div className="text-white border w-[46%] px-3 py-2 rounded-3xl mb-4">
            <Flex className={'items-center gap-x-2'}>
            <IoGameControllerOutline className='text-3xl'/>
            <Text  text={'30% Discount first month purchase'} as='h1' className={'text-[18px] font-Inter font-semibold'}/>
            </Flex>
        </div>
        <div className="relative mb-10" data-aos="fade-down">
            <Text text={'Power Up with Our Premium Game Hosting Solutions '} as='h1' className={'text-[64px] text-white font-bold font-Plus leading-[80px]'}/> 
            <Image imgSrc={Gamebanner} imgAlt={'Gamebanner'} className={'absolute left-[304px] bottom-0'}/>
        </div>
        <div className="text-white">
            <Flex className={'gap-x-4'}>
                <Link>
                <Button text={'Get Started'} className={'text-base font-Inter px-9 py-4 rounded-lg text-Bannerbtntxt bg-ButtonBg  font-bold cursor-pointer'}/>
                </Link>
               <Link>
               <Button text={'Buy Now    '} className={'text-base font-Inter px-9 py-4 rounded-lg hover:text-Bannerbtntxt hover:bg-ButtonBg hover:border-ButtonBg hover:font-bold text-white bg-NavBg border border-white duration-500 cursor-pointer'}/>
               </Link> 
            </Flex>
        </div>
      </div>
      <div className="w-2/5 z-20 ">
        <Image imgSrc={BannerImage} imgAlt={'BannerGame'} />
      </div>
    </Flex>
  </Container> 
   </div>
   </>
  )
}

export default Banner