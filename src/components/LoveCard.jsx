import React from 'react'
import Star from './Star'
import Text from './Text'
import Flex from './Flex'
import Image from './Image'


const LoveCard = ({text1,text2,text3,imgSrc}) => {
  return (
    <>
    <div className="p-10 mr-8 bg-LoveCard rounded-lg  bg-gradient-to-tl from-Gradient">
        <Star />
        <Text text={text1} as='h1' className={'mt-6 text-white text-xl font-Inter font-semibold '}/>
        <Flex className={'mt-6 gap-x-4'}>
           <Image imgSrc={imgSrc}/>
           <div className="">
            <Text text={text2} as='h1' className={'text-xl text-white font-Plus font-bold'}/>
            <Text text={text3} as='h1' className={'text-base text-white font-Plus font-semibold'}/>
           </div>
        </Flex>
        
    </div>
    </>
  )
}

export default LoveCard