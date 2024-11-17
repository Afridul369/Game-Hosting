import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'


const ExperienceContent = ({imgSrc,text}) => {
  return (
    <>
    <div >
    <Flex className={'gap-x-16 mb-10 border-b  '}>
        <div className="w-[60px] mt-2">
        <Image imgSrc={imgSrc}/>
        </div>
        <Text text={text} as='h1' className={'text-white text-2xl font-Plus font-semibold leading-8 pr-28 mb-6'}/>
    </Flex>
    </div>
    </>
  )
}

export default ExperienceContent


// className="after:content-[''] after:absolute relative after:w-96 after:h-1 after:bg-BorderBottom after:bottom-[-40px] after:left-0 "