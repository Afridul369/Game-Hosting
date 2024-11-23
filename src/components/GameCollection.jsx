import React, { useEffect } from 'react'
import Text from './Text'
import Flex from './Flex'
import Button from './Button'
import Container from './Container'
import CollectionButton from './CollectionButton'
import CollectionCard from './CollectionCard'
import Cardimg1 from '../assets/CollCardimg1.jpg'
import Cardimg2 from '../assets/CollCardimg2.jpg'
import Cardimg3 from '../assets/CollCardimg3.jpg'
import Cardimg4 from '../assets/CollCardimg4.jpg'
import Cardimg5 from '../assets/CollCardimg5.jpg'
import Cardimg6 from '../assets/CollCardimg6.jpg'
import Cardimg7 from '../assets/CollCardimg7.jpg'
import Cardimg8 from '../assets/CollCardimg8.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Star from './Star'

const GameCollection = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          once: true,});
    })
  return (
    <>
   <div className="bg-Explorebg py-16 ">
   <Container>
   <div >
        <div className="text-center text-white mb-[70px]" data-aos="fade-down">
            <Text text={'Our Game Collection'} as='h1'  className={'animate__animated animate__backInDown  text-5xl font-Plus font-bold'}/>
        </div>
        <div className="mb-12">
            <Flex className={'justify-center gap-x-3'}>
                <CollectionButton text1={'All Games'}/>
                <CollectionButton text1={'Action'}/>
                <CollectionButton text1={'Strategy'}/>
                <CollectionButton text1={'Puzzle'}/>
                <CollectionButton text1={'Horror'}/>
                <CollectionButton text1={'MultiPlayer'}/>
            </Flex>
        </div>
        <div className="">
            <Flex className={'gap-x-8 flex-wrap'}>
            <CollectionCard imgSrc={Cardimg1} text1={'Legacy of the Stars'} text2={'$29.00'} text3={<del>$59.00</del>}/>
            <CollectionCard imgSrc={Cardimg2} text1={'Nebula Nexus'} text2={'$29.00'} icon={<Star className='pl-5'/>} />
            <CollectionCard imgSrc={Cardimg3} text1={'Shadowrealm Saga'} text2={'$29.00'} text3={<del>$59.00</del>}/>
            <CollectionCard imgSrc={Cardimg4} text1={'Warzone Assault'} text2={'$29.00'} text3={<del>$59.00</del>}/>
            <CollectionCard imgSrc={Cardimg5} text1={'Eternal Odyssey'} text2={'$29.00'} text3={<del>$59.00</del>}/>
            <CollectionCard imgSrc={Cardimg6} text1={'Magic and Mystery'}  text2={'$29.00'} icon={<Star className='pl-5'/>}/>
            <CollectionCard imgSrc={Cardimg7} text1={'Reign of Fire'} text2={'$29.00'} text3={<del>$59.00</del>} icon={<Star className='pl-5'/>}/>
            <CollectionCard imgSrc={Cardimg8} text1={'Guardians of the Cosmos'} text2={'$29.00'} text3={<del>$59.00</del>}/>
            </Flex>
        </div>
    </div>
   </Container>
   </div>
    </>
  )
}

export default GameCollection