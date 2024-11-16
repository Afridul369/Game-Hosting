import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Footerlogo from '../assets/menulogo.png'
import Text from './Text'
import List from './List'
import ListItems from './ListItems'
import Visa from '../assets/visa.png'
import Mastercard from '../assets/mastercard.png'
import Paypal from '../assets/paypal.png'
import American from '../assets/american.png'
import Wise from '../assets/wise.png'
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <div className="bg-Explorebg ">
        <Container>
        <Flex className={'mb-32 justify-between'}>
            <div className="">
                <Image imgSrc={Footerlogo} className={'mb-12'}/>
                <Text text={'We’re on a mission make life easier for '} className={'text-base font-Inter text-Servertxt '}/>
                <Text text={'web developers & small businesses. '} className={'text-base font-Inter text-Servertxt mb-14'}/>
                <Text text={'Payment Method'} className={'text-xl font-Inter text-white font-bold mb-4'}/>
                <Flex className={'gap-x-2'}>
                  <Image imgSrc={Visa} className={'rounded'}/>
                  <Image imgSrc={Mastercard} className={'rounded'}/>
                  <Image imgSrc={Paypal} className={'rounded'}/>
                  <Image imgSrc={American}  className={'rounded'}/>
                  <Image imgSrc={Wise} className={'rounded'}/>
                </Flex>
            </div>
            <div className="pl-[76px] pr-[90px]">
              <Text text='Company' className={'mb-10 text-xl font-Inter text-white font-bold'}/>
              <List>
                <ListItems item={'About Us'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'News Feed'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Contact'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Affiliate Program'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Our Technology'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Knowledgebase'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
              </List>
            </div>
            <div className="pr-10">
              <Text text='Feature' className={'mb-10 text-xl font-Inter text-white font-bold'}/>
              <List>
                <ListItems item={'Domain Checker'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Domain Transfer'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Domain Registration'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Data Centers'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Whois'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Support'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
              </List>
            </div>
            <div className="pr-[75px]">
              <Text text='Hosting' className={'mb-10 text-xl font-Inter text-white font-bold'}/>
              <List>
                <ListItems item={'Shared Hosting'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Wordpress Hosting'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'VPS Hosting'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Reseller Hosting'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Dedicated Hosting'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
                <ListItems item={'Cloud Hosting'} className={'mb-6 font-Inter text-base text-Servertxt hover:text-ButtonBg duration-500'}/>
              </List>
            </div>
            <div className="">
              <Text text={'Join Our Newsletter'} className={'text-xl font-Inter text-white font-bold mb-10'}/>
              <Text text={"We'll send you news and offers."} className={'text-base font-Inter text-white font-semibold mb-10'}/>
              <input type='text' placeholder=' Enter Mail' className='w-[320px] mb-10 py-4 px-3 bg-white rounded-3xl'/>
              <Text text={'Social Media'} className={'text-xl font-Inter text-white font-bold mb-7'}/>
              <Flex className={'gap-x-3'}>
                <div className="p-2 border border-BorderBottom rounded bg-Explorebg text-white">
                <FaFacebookF />
                </div>
                <div className="p-2 border border-BorderBottom rounded bg-Explorebg text-white">
                <FaInstagram />
                </div>
                <div className="p-2 border border-BorderBottom rounded bg-Explorebg text-white">
                <FaLinkedin />
                </div>
                <div className="p-2 border border-BorderBottom rounded bg-Explorebg text-white">
                <FaXTwitter />
                </div>
                <div className="p-2 border border-BorderBottom rounded bg-Explorebg text-white">
                <FaBehance />
                </div>
              </Flex>
            </div>

        </Flex>
        <div className="text-white text-center">
          <Text text={'© Copyright 2024. All Rights Reserved.'} className={'text-base font-Plus text-Servertxt pb-10'}/>
        </div>
        </Container>
    </div>
    </>
  )
}

export default Footer