import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Work from './Components/Work/Work';
import Stripes from './Components/Stripes/Stripes';
import Products from './Components/Products/Products';
import Marquees from './Components/Marquees/Marquees';
import Cards from './Components/Cards/Cards';

const App = () => {
  return (
    <div className=' w-full h-full bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
    </div>
  )
}

export default App;
