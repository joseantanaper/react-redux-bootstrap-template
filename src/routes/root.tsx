// import logo from "../logo.svg"
// import { Counter } from "../features/menu/Counter"
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from '@components/nav/Navbar'

const Root = () => {
  useEffect(() => {}, [])

  return (
    <>
      {/* <div className="app-root"> */}
      <Navbar />
      <Outlet />
      {/* </div> */}
    </>
  )
}

export default Root
