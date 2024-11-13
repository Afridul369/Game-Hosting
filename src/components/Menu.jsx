import React from 'react'

const Menu = ({menuname,className}) => {
  return (
    <div className={`${className}`}>{menuname}</div>
  )
}

export default Menu