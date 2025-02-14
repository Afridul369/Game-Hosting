import React from 'react'
import Image from './Image'
import ExploreBg from '../assets/exploreBg.png'
import ExploreLeftImg from '../assets/explorerightimg.png'
import Container from './Container'
import Flex from './Flex'
import { IoGameControllerOutline } from 'react-icons/io5'
import Text from './Text'
import Button from './Button'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <>
    <div className="bg-Explorebg ">
    <Container className={''}>
    <div className="relative rounded-xl after:absolute after:content-[''] after:w-full after:h-full after:bg-gradient-to-r after:from-BorderBottom after:from-20% after:z-[1] after:left-0 after:top-0">
    <Image imgSrc={ExploreBg} className={''}/>
    <div className="w-2/5 absolute top-[70px] left-[80px] z-20">
    <div className="text-white border w-[38%] px-5 py-2 rounded-3xl mb-6">
            <Flex className={'items-center gap-x-2'}>
            <IoGameControllerOutline className='text-3xl'/>
            <Text text={'Purchase Game'} as='h1' className={'text-base font-Inter font-semibold'}/>
            </Flex>
        </div>
        <div className="relative mb-10">
            <Text text={'Explore New Worlds: Create Your Own Saga'} as='h1' className={'text-5xl text-white font-bold font-Plus'}/> 
        </div>
        <div className="relative mb-10">
            <Text text={'Welcome to a world where adventure awaits at every turn. Immerse yourself in epic battles, thrilling challenges, and boundless excitement as you embark on a journey like no other.'} as='h1' className={'text- text-white font-bold font-Plus'}/> 
        </div>
        <div className="text-white">
            <Flex className={'gap-x-4'}>
               <Link>
               <Button text={'Purchase Now'} className={'text-base font-Inter px-8 py-4 rounded-[32px] text-Bannerbtntxt bg-ButtonBg font-semibold'}/>
               </Link>                 
            </Flex>
        </div>
    </div>
    <Image imgSrc={ExploreLeftImg} className={'absolute top-[-60px] right-10 z-20'}/>
    </div>
    </Container>
    </div>
    </>
  )
}

export default Explore