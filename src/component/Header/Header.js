import React from 'react'

const Header = ({flex}) => {
    
  return (
    <header className="App-header">
        <div className='logoSearch'>
            <p>this is logo</p>
            <input type='text' placeholder='search'></input>
        </div>
        <div className='options'>
            <p>Home</p>
            <p>Watch</p>
            <p>Group</p>
            <p>Marketplace</p>
            <p>Game</p>
        </div>
        <div className='account'>
            <p>Account</p>
            <p>Menu</p>
            <p>Messenger</p>
            <p>Notification</p>
            <p>Option</p>
        </div>
    </header>
  )
}

export default Header