import React from 'react'
import './App.scss';
import Person3Icon from '@mui/icons-material/Person3';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
function StickyHeader() {
//   const icon = KeyboardArrowDownIcon;
//   icon.visibility = 'hidden' 
  return (
    <div className='sticky'>
        <img src='https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w' alt=''></img>
        <button className='sticky-btn'>Categories <span><KeyboardArrowDownIcon/></span> </button>
        <button className='sticky-btn'>Deals <span><KeyboardArrowDownIcon/></span> </button>
        <button className='sticky-btn'>What's New <span><KeyboardArrowDownIcon/></span> </button>
        <button className='sticky-btn'>Pickup & Delivery <span><KeyboardArrowDownIcon/></span> </button>
        <input  className='input' type='text' placeholder='Search' />
        <SearchIcon className='search-icon'/>
        <button className='sticky-btn'> <Person3Icon/> Sign in <span><KeyboardArrowDownIcon/></span> </button>

    </div>
  )
}

export default StickyHeader