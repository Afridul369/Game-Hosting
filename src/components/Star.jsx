import React from 'react'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const Star = ({className}) => {
  return (
    <>
    <Flex className={`gap-x-1 text-xl text-ButtonBg ${className}`}>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    </Flex>
    </>
  )
}

export default Star