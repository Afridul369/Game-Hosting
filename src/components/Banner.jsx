import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import { IoGameControllerOutline } from "react-icons/io5";
import Image from './Image';
import BannerImage from '../assets/bannerrightimg.png';
import Gamebanner from '../assets/gamebanner.png';
import Button from './Button';

const Banner = () => {
  return (
    <>
   <div className="py-60 bg-NavBg">
   <Container>
    <Flex>
      <div className="w-3/5">
        <div className="text-white border w-[46%] px-3 py-2 rounded-3xl mb-4">
            <Flex className={'items-center gap-x-2'}>
            <IoGameControllerOutline className='text-3xl'/>
            <Text text={'30% Discount first month purchase'} className={'text-[18px] font-Inter font-semibold'}/>
            </Flex>
        </div>
        <div className="relative mb-10">
            <Text text={'Power Up with Our Premium Game Hosting Solutions '} className={'text-[64px] text-white font-bold font-Plus leading-[80px]'}/> 
            <Image imgSrc={Gamebanner} imgAlt={'Gamebanner'} className={'absolute left-[304px] bottom-0'}/>
        </div>
        <div className="text-white">
            <Flex className={'gap-x-4'}>
                <Button text={'Get Started'} className={'text-base font-Inter px-9 py-4 rounded-lg hover:text-Bannerbtntxt hover:bg-ButtonBg hover:border-transparent hover:font-bold text-white bg-NavBg border-2 border-white duration-500 cursor-pointer'}/>
                <Button text={'Buy Now'} className={'text-base font-Inter px-9 py-4 rounded-lg hover:text-Bannerbtntxt hover:bg-ButtonBg hover:border-transparent hover:font-bold text-white bg-NavBg border-2 border-white duration-500 cursor-pointer'}/>
            </Flex>
        </div>
      </div>
      <div className="w-2/5">
        <Image imgSrc={BannerImage} imgAlt={'BannerGame'}/>
      </div>
    </Flex>
  </Container> 
   </div>
   </>
  )
}

export default Banner