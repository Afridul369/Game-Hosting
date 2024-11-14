import React from 'react'
import Image from './Image'
import Button from './Button'
import Flex from './Flex'
import { IoCartOutline } from 'react-icons/io5'

const CollectionCard = ({imgSrc}) => {
  return (
    <>
    <div className="relative group">
     <Image imgSrc={imgSrc} className={'rounded-lg border-2 border-transparent hover:border-ButtonBg duration-500'}/>
    <div className="py-3 px-9 absolute bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-white  group-hover:block ">
     <Flex className={'justify-center items-center gap-x-2'}>
       <IoCartOutline className='text-2xl'/>
       <Button text={'Buy Now'} className={'text-base text-NavBg font-semibold font-Plus'}/>
     </Flex>
    </div>
    </div>
    </>
  )
}

export default CollectionCard