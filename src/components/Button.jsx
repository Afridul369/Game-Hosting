import React from 'react'

const Button = ({className,text,icon}) => {
  return (
    <div className={`${className} flex`}>{icon}{text}</div>
  )
}

export default Button