import React from 'react'
import {Outlet} from 'react-router-dom'

const PostLayOut = () => {
  return (
    <div>
          <h1>Post layout</h1>
          <Outlet/>
    </div>
  )
}

export default PostLayOut
