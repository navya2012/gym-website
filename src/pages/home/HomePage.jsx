import React from 'react'
import FAQ from '../faq/Faq'
import ContactUs from '../contact/ContactUs'
import Header from './components/Header'
import Plans from './components/Plans'
import Workouts from '../workouts/Workouts'


const HomePage = () => {
  return (
    <>
      <Header />
      <Plans />
      <Workouts />
      <FAQ />
      <ContactUs />
    </>
  )
}

export default HomePage