import React from 'react'
import Text from './Text'
import QuestionBox from './QuestionBox'

const Question = () => {
  return (
    <>
    <div className="pt-16 bg-Explorebg text-center">
        <Text text={'Frequently asked questions'} as='h1' className={'text-5xl text-white font-bold font-Plus mb-12'}/>
        <QuestionBox text1={'Why buy a domain name from hostie?'}/>
        <QuestionBox text1={'How does domain registration work?'}/>
        <QuestionBox text1={'Why is domain name registration required?'}/>
        <QuestionBox text1={'Why is domain name registration required?'}/>
        <QuestionBox text1={'Why is domain name registration required?'}/>
    </div>
    </>
  )
}

export default Question