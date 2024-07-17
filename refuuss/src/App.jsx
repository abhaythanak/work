import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Work from './Components/Work/Work';

const App = () => {
  return (
    <div className=' w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
    </div>
  )
}

export default App;
