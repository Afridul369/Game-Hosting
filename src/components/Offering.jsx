import React from 'react'
import Flex from './Flex'
import { FaCheck } from 'react-icons/fa6'
import Text from './Text'

const Offering = ({text1}) => {
  return (
    <>
    <div className="mb-6">
        <Flex className={'items-center gap-x-2'}>
         <FaCheck className='text-Check '/>
          <Text text={text1} className={'font-Inter text-base text-white font-bold'}/>
        </Flex>
    </div>
    </>
  )
}

export default Offering