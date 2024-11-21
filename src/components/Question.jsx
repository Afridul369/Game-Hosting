import React, { useEffect } from 'react'
import Text from './Text'
import QuestionBox from './QuestionBox'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Question = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  })
  return (
    <>
    <div className="" data-aos="fade-down">
    <div className="pt-16 bg-Explorebg text-center" >
        <Text text={'Frequently asked questions'} as='h1' className={'text-5xl text-white font-bold font-Plus mb-12'}/>
        <QuestionBox text1={'Why buy a domain name from hostie?'}/>
        <QuestionBox text1={'How does domain registration work?'}/>
        <QuestionBox text1={'Why is domain name registration required?'}/>
        <QuestionBox text1={'Why is domain name registration required?'}/>
        <QuestionBox text1={'Why is domain name registration required?'}/>
    </div>
    </div>
    </>
  )
}

export default Question