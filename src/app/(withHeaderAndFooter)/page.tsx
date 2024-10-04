import React from 'react'
import Banner from '../components/Banner'
import CategorySlider from '../components/CategorySlider'
import AthletePortfolio from '../components/AthletePortfolio'
import CoachPortfolio from '../components/CoachPortfolio'
import SportsCenter from '../components/SportsCenter'

export default function page() {

  return (

    <>
      <Banner />
      <CategorySlider />
      <AthletePortfolio />
      <CoachPortfolio />
      <SportsCenter />
    </>
  )
}
