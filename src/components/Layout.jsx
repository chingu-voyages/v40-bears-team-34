import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className='bg-[#f2f2f2] min-h-[100%] flex flex-col justify-center'>
      <Navbar />
      <main className='min-h-[90vh] flex flex-col items-center justify-center'>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout