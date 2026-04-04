import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navigation/Navbar'
import { Footer } from '../../components/layout/Footer'
import './MainLayout.css'

export function MainLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
