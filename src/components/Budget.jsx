import React, { useEffect } from 'react'
import Container from './Container'
import Text from './Text'
import Flex from './Flex'
import Button from './Button'
import Offer from '../assets/offersign.png'
import Image from './Image'
import BudgetCard from './BudgetCard'
import BudgetCardimg1 from '../assets/budgetcardimg1.png'
import BudgetCardimg2 from '../assets/budgetcardimg2.png'
import BudgetCardimg3 from '../assets/budgetcardimg3.png'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Budget = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration (milliseconds)
      once: true, // Animation হবে একবার
    });
  }, []);

  
 
  return (
    <>
    <div className="bg-Explorebg py-14">
      <Container>
        <div className="text-center px-96 mb-20" data-aos="fade-down">
            <Text text={'Unleash Online Growth Not Budgets.'} as='h1' className={'text-5xl font-Plus text-white font-bold  leading-[60px] '}/>
        </div>
        <div className="flex justify-center gap-x-10 mb-14">          
        <div className="text-white bg-BorderBottom w-[210px] py-1 rounded-lg relative ">
        <Image imgSrc={Offer} id='offer' className='absolute -top-3 -right-16 '/>
          <Flex className={'justify-center items-center gap-x-2'}>           
            <Link>
            <Button text={'Monthly'} className={'text-base font-Plus font-semibold py-2.5 px-5 bg-NavBg duration-500 text-ButtonBg  hover:bg-ButtonBg hover:text-BorderBottom rounded-lg'}/>
            </Link>
          <Link>
            <Button text={'Yearly'} id='yearly' className={' text-base font-Plus font-semibold py-2.5 px-5 bg-NavBg duration-500 text-ButtonBg hover:bg-ButtonBg hover:text-BorderBottom rounded-lg'}/>           
          </Link>         
          </Flex>
        </div>
        <Text text={'20% save'} as='h1' id='save' className={'text-base font-Plus font-semibold text-white mt-2 '}/>
        </div>
        <div className=" ">
          <Flex className={'gap-x-2 justify-between'}>
          <BudgetCard imgSrc={BudgetCardimg1} text2='Basic Plan' text3='Price: $144.36'/>
          <BudgetCard imgSrc={BudgetCardimg2} text2='Premium Plan' text3='Price: $1000.36' className={'bg-BudgetBg'}/>
          <BudgetCard imgSrc={BudgetCardimg3} text2='Cloud Startup' text3='Price: $448.36'/>
          </Flex>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Budget