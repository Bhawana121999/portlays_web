import React from 'react'
import Banner from '../components/Banner'
import CategorySlider from '../components/CategorySlider'
import AthletePortfolio from '../components/AthletePortfolio'
import CoachPortfolio from '../components/CoachPortfolio'
import SportsCenter from '../components/SportsCenter'
import VideoGallery from '../components/VideoGallery'
import Brands from '../components/Brands'

export default function page() {

  return (

    <>
      <Banner />
      <CategorySlider />
      <AthletePortfolio />
      <CoachPortfolio />
      <SportsCenter />
      <VideoGallery />
      <Brands />
    </>
  )
}
