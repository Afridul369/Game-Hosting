import React from 'react'
import Flex from './Flex'
import Text from './Text'
import { FiPlusCircle } from 'react-icons/fi'

const QuestionBox = ({text1,text2}) => {
  return (
    <>
    <div className="w-[880px] border-b border-BorderBottom py-6 px-5 rounded-lg mx-auto bg-LoveCard bg-gradient-to-t from-Gradient">
        <Flex className={'items-center justify-between mb-4'}>
           <Text text={text1} className={'text-xl font-Plus text-white font-bold'}/>
           <FiPlusCircle className='text-white text-2xl' />
        </Flex>
        <Text className={'text-base font-Plus text-white font-semibold'} text={text2}/>
    </div>
    </>
  )
}

export default QuestionBox