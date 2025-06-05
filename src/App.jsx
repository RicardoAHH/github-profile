import './App.css'
import Body from './components/body'
import Followers from './components/followers'
import Repos from './components/repos'
import { useState } from 'react'
import SearchBar from './components/searchBar'


function App() {
  const [search, setSearch] = useState("mojombo")

  return (
    <>

      <Body>
        <SearchBar
          setSearch={setSearch}
        />
        <Followers
          search={search}
        />
        <div className='w-full h-20 pl-5 mt-5'>
          <h1 className='text-white font-semibold text-[30px]'>GitHub</h1>
          <p className='text-white text-sm'>How people build software</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <Repos search={search} />
        </div>

      </Body>
    </>
  )
}

export default App
