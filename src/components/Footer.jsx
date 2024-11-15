import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Footerlogo from '../assets/menulogo.png'
import Text from './Text'

const Footer = () => {
  return (
    <>
    <div className="bg-Explorebg">
        <Container>
        <Flex className={'gap-x-[280px]'}>
            <div className="">
                <Image imgSrc={Footerlogo} className={'mb-10'}/>
                <Text text={'We’re on a mission make life easier for web developers & small businesses.'} className={'text-base font-Inter text-Servertxt'}/>
            </div>

        </Flex>
        </Container>
    </div>
    </>
  )
}

export default Footer