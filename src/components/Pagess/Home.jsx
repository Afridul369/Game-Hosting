import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import GameServer from '../GameServer'
import Explore from '../Explore'
import GamingExperience from '../GamingExperience'
import Budget from '../Budget'
import BudgetCard from '../BudgetCard'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <GameServer/>
    <Explore/>
    <GamingExperience/>
    <Budget/>
    
    </>
  )
}

export default Home