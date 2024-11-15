import React from 'react'
import Image from './Image'
import Button from './Button'
import Flex from './Flex'
import { IoCartOutline } from 'react-icons/io5'
import Text from './Text'

const CollectionCard = ({imgSrc,text1,text2}) => {
  return (
    <>
    <div className="relative group mb-6">
    <div className="py-1 px-3 absolute top-5 left-5 rounded-md bg-ButtonBg  opacity-0 group-hover:opacity-100  ">
     <Flex className={'justify-center items-center gap-x-1'}>
       <Text text={'50%'} className={'text-sm text-colltxt font-semibold font-Inter'}/>
       <Button text={'OFF'} className={'text-sm text-colltxt font-semibold font-Inter'}/>
     </Flex>
    </div>
     <Image imgSrc={imgSrc} className={'rounded-lg border-2 border-transparent hover:border-ButtonBg duration-500 mb-8'}/>
    <div className="py-3 px-6 absolute top-64 left-1/2 -translate-x-1/2 rounded-md bg-ButtonBg hidden opacity-0 group-hover:opacity-100 group-hover:block ">
     <Flex className={'justify-center items-center gap-x-2'}>
       <IoCartOutline className='text-2xl'/>
       <Button text={'Buy Now'} className={'text-base text-NavBg font-semibold font-Plus'}/>
     </Flex>
    </div>
    <Text text={text1} className={'text-white text-2xl font-Plus font-bold mb-4'}/>
    <Flex className={'gap-x-6 items-center'}>
      <Text text={'$59.00'} className={'text-base font-Plus text-white font-semibold border-t border-white '}/> 
      <Text text={text2} className={'py-1 px-2 font-semibold bg-ButtonBg rounded-md text-[15px] font-Plus text-colltxt '}/>
      
    </Flex>
    </div>
    
    </>
  )
}

export default CollectionCard