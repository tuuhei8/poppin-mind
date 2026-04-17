import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ serviceLinks }) {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer serviceLinks={serviceLinks} />
    </>
  )
}
