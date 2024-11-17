import React from 'react'
import Container from './Container'
import Text from './Text'
import LoveCard from './LoveCard'
import Flex from './Flex'
import Author from '../assets/author.png'
import Author2 from '../assets/author2.png'
import Author3 from '../assets/author3.png'

const CustomerLove = () => {
  return (
    <>
    <div className="py-16 bg-Explorebg">
        <Container>
            <div className="text-center text-white">
                <Text text={'Our Customers Love Us'} as='h1' className={'text-4xl font-Plus font-bold mb-6'}/>
                <Text text={'From 24/7 support that acts as your extended team to incredibly fast website performance'} as='h1' className={'text-base font-Inter font-medium mb-12 px-96 '}/>               
            </div>
            <Flex className={'gap-x-10 mb-10'}>
            <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author} text2={'Jamie Knop'} text3={'Business Owner'}/>
            <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author2} text2={'Jahed Khan'} text3={'Business Owner'}/>
            <LoveCard text1={'Excellent option for those looking for High-End WordPress Hosting. I have been using Cloud ways.'} imgSrc={Author3} text2={'Samira Khan'} text3={'Digital Marketer'}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default CustomerLove