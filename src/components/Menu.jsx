import React from 'react'

const Menu = ({menuname,className}) => {
  return (
    <li className={`${className}`}>{menuname}</li>
  )
}

export default Menu