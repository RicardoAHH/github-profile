import { useState } from 'react'
import './App.css'
import Body from './components/body'
import Followers from './components/followers'


function App() {


  return (
    <>

      <Body>
        <div className='flex flex-wrap mt-25 ml-5 gap-5'>
          <Followers desc={'Followers'} num={'12345'} />
          <Followers desc={'Following'} num={'0'} />
          <Followers desc={'Location'} num={'San Francisco CA'} />
        </div>
        <div className='w-full h-20 pl-5 pt-5'>
          <h1 className='text-white font-semibold text-[30px]'>GitHub</h1>
          <p className='text-white text-sm'>How people build software</p>
        </div>

      </Body>
    </>
  )
}

export default App
