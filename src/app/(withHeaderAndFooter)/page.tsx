import React from 'react'
import Banner from '../components/Banner'
import CategorySlider from '../components/CategorySlider'
import AthletePortfolio from '../components/AthletePortfolio'
import CoachPortfolio from '../components/CoachPortfolio'
import SportsCenter from '../components/SportsCenter'
import VideoGallery from '../components/VideoGallery'
import Brands from '../components/Brands'
import Community from '../components/Community'
import SportsCalender from '../components/SportsCalender'
import SearchInputs from '../components/SearchInputs'

export default function page() {

  return (

    <>
      <Banner />
      <SearchInputs />
      <CategorySlider />
      <AthletePortfolio />
      <CoachPortfolio />
      <SportsCenter />
      <VideoGallery />
      <Brands />
      <SportsCalender />
      <Community />
    </>
  )
}
