import React from 'react'

const ListItems = ({className,item}) => {
  return (
    <>
    <div className={`${className}`}>{item}</div>
    </>
  )
}

export default ListItems