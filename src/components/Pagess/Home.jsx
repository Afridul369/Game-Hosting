import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import GameServer from '../GameServer'
import Explore from '../Explore'
import GamingExperience from '../GamingExperience'
import Budget from '../Budget'
import BudgetCard from '../BudgetCard'
import GameCollection from '../GameCollection'
import CustomerLove from '../CustomerLove'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <GameServer/>
    <Explore/>
    <GamingExperience/>
    <Budget/>
    <GameCollection/>
    <CustomerLove/>
    </>
  )
}

export default Home