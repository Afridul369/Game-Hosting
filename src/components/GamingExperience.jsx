import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Feature1 from '../assets/feature1.png'
import Feature2 from '../assets/feature2.png'
import Feature3 from '../assets/feature3.png'
import Experienceimg from '../assets/experienceimg.png'
import Text from './Text'
import ExperienceContent from './ExperienceContent'

const GamingExperience = () => {
  return (
    <>
    <div className="py-14 bg-Explorebg">
        <Container>
            <Flex>
                <div className="w-1/2">
                    <div className='w-[90%] rounded-xl bg-[#ffd8bf]'>
                        <Image imgSrc={Experienceimg} imgAlt={'Experienceimg'} /></div>
                </div>
                <div className="w-1/2 px-24 ">
                    <Text text={'Game Server Solution Powering Your Online Gaming Experience'} as='h1' className={'text-[40px] font-Plus font-bold leading-[46px] text-white mb-14 '}/>
                    <ExperienceContent imgSrc={Feature1} text={'High-Performance Hardware'}/>
                    <ExperienceContent imgSrc={Feature2} text={'Customization Options'}/>
                    <ExperienceContent imgSrc={Feature3} text={'24/7 Technical Support'}/>
                </div>
                
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default GamingExperience