import React from 'react'
import {  NavLink,Outlet } from 'react-router-dom'
import '../App.css'

const Layout = () => {
  return (
    <nav>
          <h1>React Router V6</h1>
          <ul>
              <li><NavLink to="/"  style={({isActive})=>{return {color: isActive?'red':'blue'}}} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return {color: isActive?'red':'blue'}}} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
              <li><NavLink to="/contact" style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></li>
              <li><NavLink to="/post" style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Post</NavLink></li>
              
      </ul>
      <section>
        <Outlet/>
      </section>
    </nav>
  )
}

export default Layout
