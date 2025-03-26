import React from 'react'
import Banner from '../components/Banner'
import TabSection from '../components/TabSection'
import Brand from '../components/Brand'
import Choose  from '../components/Choose'
import Platform from '../components/Platform'
import Footer from '../components/Footer'


const MainPage = () => {
  return (
      <div>
          <Banner />
       <TabSection />
      <Brand />
      <Choose/>
      <Platform/>
      <Footer/>
    </div>
  )
}

export default MainPage