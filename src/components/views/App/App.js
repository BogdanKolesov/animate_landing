import React from 'react'
import { GlobalTheme } from '../../themes/';
import Navbar from '../../organismes/Navbar/';
import Hero from '../../organismes/Hero/';
import { SliderData } from '../../../data/SliderData';

function App() {
  return (
    <>
      <GlobalTheme />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
