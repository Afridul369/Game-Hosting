import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Menu from './Menu'
import NavLogo from '../assets/menulogo.png'
import { FaAngleDown } from "react-icons/fa6";
import Button from './Button'
import { Link } from 'react-router-dom'
console.log(NavLogo);
const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full   py-6 justify-between items-center " id='StikyNav'>
        <Container>
            <Flex>
                <div className="py-2">
                    <Image imgSrc={NavLogo} imgAlt={'Logo'} className={''}/>
                </div>
                <div className="px-44 text-white py-2">
                  <ul className={'gap-x-10  flex'}>
                      <Link>
                      <div className="flex items-center gap-x-2"><Menu menuname={'Home' } className={'text-base font-semibold font-Inter'} /><FaAngleDown /></div>
                      </Link>
                      <Link>
                      <div className="flex items-center gap-x-2"><Menu menuname={'Pages' } className={'text-base font-semibold font-Inter'}/><FaAngleDown /></div>
                      </Link>
                      <Link>
                      <div className="flex items-center gap-x-2"><Menu menuname={'Hosting'} className={'text-base font-semibold font-Inter'} /><FaAngleDown /></div>
                      </Link>
                      <Link>
                      <div className="flex items-center gap-x-2"><Menu menuname={'Domain' } className={'text-base font-semibold font-Inter'}/><FaAngleDown /></div>
                      </Link>
                      <Link>
                      <div className="flex items-center gap-x-2"><Menu menuname={'Technology' } className={'text-base font-semibold font-Inter'}/><FaAngleDown /></div>
                      </Link>
                      <Link>
                      <div className="flex items-center gap-x-2"><Menu menuname={'Help Center' } className={'text-base font-semibold font-Inter'}/><FaAngleDown /></div>
                      </Link>                     
                  </ul>
                </div>
                <div className="">
                  <Button text={'login'} className={'text-base px-8 py-2 bg-NavBg border-2 duration-500 cursor-pointer border-white rounded-3xl text-white font-semibold hover:bg-ButtonBg hover:border-transparent hover:text-Buttontext hover:font-bold'}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Navbar