import React from 'react'
import './App.scss'; 

function First() {
  return (
   <div className='NavBar' >
        <nav className='NavBar-wrapper'> 
            <div className='leftbar'>
                <u className='left'>
                    <li className='store'>MyStore</li>
                    <li>close at 10pm</li>
                </u>
                <u className='bottomLeft'>
                    <li>San Jose North</li>
                </u>
            </div>
            <div className='rightbad'>
                <ul className='list'>
                    <li>Registry</li>
                    <li>Weekly Ad</li>
                    <li>RedCard</li>
                    <li>Target Circle</li>
                    <li>Find Stores</li>
                </ul>
            </div>
        </nav>
        
        
    </div>
  )
}

export default First