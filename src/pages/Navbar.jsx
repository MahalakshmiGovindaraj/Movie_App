import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {
   const {watchList} = useContext(WatchListContext)
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-between w-full top-0 z-10 fixed'>
        <Link to='/' className='text-xl font-bold'>Movie App</Link>
        <Link to='/watchlist' className='text-xl'>WatchList({watchList.length})</Link>
    </div>
  )
}

export default Navbar