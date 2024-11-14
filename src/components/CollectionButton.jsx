
import React from 'react'
import Button from './Button'

const CollectionButton = ({text1}) => {
  return (
    <>
    <Button text={text1} className={'py-2 px-3 text-sm font-Plus font-semibold text-white bg-Explorebg hover:bg-ButtonBg hover:text-NavBg duration-500 rounded-md border border-NavBg'}/>
    </>
  )
}

export default CollectionButton