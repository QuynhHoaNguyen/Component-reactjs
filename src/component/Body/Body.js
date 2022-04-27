import React from 'react'
import '../../index'
import Siderbar from './BodySiderbar'
import Content from './BodyContent'
import Friends from './BodyFriends'
const Body = () => {
  return (
    <body className='App-body'>
        <Siderbar />
        <Content />
        <Friends />        
    </body>
  )
}

export default Body