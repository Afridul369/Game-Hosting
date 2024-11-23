import React from 'react'
import Image from './Image'

import Text from './Text'
import Offering from './Offering'
import { FaCheck } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const BudgetCard = ({text2,text3,imgSrc,className}) => {
  return (
    <>
    <div className={`group hover:bg-BudgetBg bg-no-repeat bg-center bg-cover ${className}`}>
    <div className="p-16 border border-BorderBottom group-hover:border-ButtonBg duration-500 rounded-2xl">
        <div className="border-b border-NavBg group-hover:border-ButtonBg duration-500  mb-10">
        <Image imgSrc={imgSrc} className={'mb-10'}/>
        <Text text={text2} as='h1' className={'text-2xl font-bold font-Plus text-white mb-5'}/>
        <Text text={'Added privacy and security features'} as='h1' className={'text-base font-medium font-Inter text-white mb-10'}/>
        </div>
        <div className="mb-10">
            <Offering Icon={<FaCheck className='text-Check group-hover:text-white duration-500'/>} text1={'Free Domain ($9.99 value)'}/>
            <Offering Icon={<FaCheck className='text-Check group-hover:text-white duration-500'/>} text1={'Staging Environment'}/>
            <Offering Icon={<FaCheck className='text-Check group-hover:text-white duration-500'/>} text1={'24/7/365 Support'}/>
            <Offering Icon={<RxCross2 className='text-red-600 text-xl group-hover:text-white duration-500'/>} text1={'Free Domain ($9.99 value)'}/>
       </div>
       <Link>
       <div className="w-[260px] py-3.5 bg-white group-hover:bg-ButtonBg duration-500 rounded-md text-center mx-5">
         <Text text={text3} as='h1' className={'text-base font-Plus text-BorderBottom font-semibold '}/>
       </div>
       </Link>
    </div>
    </div>
    </>
        )
}

export default BudgetCard