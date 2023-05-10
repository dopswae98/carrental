import React from 'react'
import FooterSection from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import NavbarSection from '../components/NavbarSection'
//import NavbarSection from '../components/NavbarSection'
import TheNavbar from '../components/TheNavbar'

const MainPage = () => {
  return (
    <div className='MainPage vh-100'>
        <TheNavbar/>
        {/* <NavbarSection/> */}
        <HeroSection/>
        <FooterSection className=''/>
    </div>
  )
}

export default MainPage
