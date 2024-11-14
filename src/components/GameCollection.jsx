import React from 'react'
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

const GameCollection = () => {
  return (
    <>
   <div className="bg-Explorebg py-16 ">
   <Container>
   <div >
        <div className="text-center text-white mb-[70px]">
            <Text text={'Our Game Collection'} className={'text-5xl font-Plus font-bold'}/>
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
            <Flex className={'justify-between'}>
            <CollectionCard imgSrc={Cardimg1}/>
            <CollectionCard imgSrc={Cardimg2}/>
            <CollectionCard imgSrc={Cardimg3}/>
            <CollectionCard imgSrc={Cardimg4}/>
            </Flex>
        </div>
    </div>
   </Container>
   </div>
    </>
  )
}

export default GameCollection