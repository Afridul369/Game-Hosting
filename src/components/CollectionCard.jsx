import React from 'react'
import Image from './Image'
import Button from './Button'
import Flex from './Flex'
import { IoCartOutline } from 'react-icons/io5'
import Text from './Text'
import { Link } from 'react-router-dom'

const CollectionCard = ({imgSrc,text1,text2,text3,className,icon}) => {
  return (
    <>
    <div  className={`${className} relative group mb-6`}>
    <div className="py-1 px-3 absolute top-5 left-5 rounded-md bg-ButtonBg  hidden group-hover:block duration-700  ease-in-out">
       <Button text={'50% OFF'} className={'text-sm text-colltxt font-semibold font-Inter'}/>
    </div>
     <Image imgSrc={imgSrc} className={'rounded-lg border-2 border-transparent  hover:border-ButtonBg duration-500 mb-8'}/>
    <Link>
    <div className="py-3 px-9 w-[190px] absolute top-64 left-1/2 -translate-x-1/2 rounded-md bg-ButtonBg hidden ease-in-out group-hover:block duration-700  ">      
       <Button text={'Buy Now'} icon={<IoCartOutline className='text-2xl'/>} className={'text-base gap-x-2 text-NavBg font-semibold font-Plus'}/>   
    </div>
    </Link>
    <Link>
    <Text text={text1} as='h1' className={'text-white text-2xl font-Plus font-bold mb-4 hover:text-ButtonBg duration-500 inline-block'}/>
    </Link>
    <Flex className={' items-center'}>
      <Text text={text3} as='h1' className={'text-base font-Plus text-white font-medium mr-6'}/> 
      <Text text={text2} as='h1' className={'py-1 px-2 font-semibold bg-ButtonBg rounded-md text-[15px] font-Plus text-colltxt '}/>
       {icon}
    </Flex>
    </div>
    
    </>
  )
}

export default CollectionCard