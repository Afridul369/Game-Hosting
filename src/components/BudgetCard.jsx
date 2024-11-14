import React from 'react'
import Image from './Image'

import Text from './Text'
import Offering from './Offering'

const BudgetCard = ({text2,text3,imgSrc}) => {
  return (
    <>
    <div className="group">
    <div className="p-16 border border-BorderBottom group-hover:border-ButtonBg duration-500 rounded-2xl">
        <div className="border-b border-NavBg group-hover:border-ButtonBg duration-500 inline-block mb-10">
        <Image imgSrc={imgSrc} className={'mb-10'}/>
        <Text text={text2} className={'text-2xl font-bold font-Plus text-white mb-5'}/>
        <Text text={'Added privacy and security features'} className={'text-base font-medium font-Inter text-white mb-10'}/>
        </div>
        <div className="mb-10">
            <Offering text1={'Free Domain ($9.99 value)'}/>
            <Offering text1={'Staging Environment'}/>
            <Offering text1={'24/7/365 Support'}/>
            <Offering text1={'Free Domain ($9.99 value)'}/>
       </div>
       <div className="w-[260px] py-3.5 bg-white group-hover:bg-ButtonBg duration-500 rounded-md text-center mx-5">
         <Text text={text3} className={'text-base font-Plus text-BorderBottom font-semibold '}/>
       </div>
    </div>
    </div>
    </>
        )
}

export default BudgetCard