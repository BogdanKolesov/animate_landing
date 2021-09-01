import React, { useState } from 'react'
import { GlobalTheme } from '../../themes/';
import Navbar from '../../organismes/Navbar/';
import Hero from '../../organismes/Hero/';
import { SliderData } from '../../../data/SliderData';
import Dropdown from '../../organismes/Dropdown/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalTheme />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
