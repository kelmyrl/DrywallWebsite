import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from '../pages/home/HomePage'
import { ServicesPage } from '../pages/services/ServicesPage'
import { GalleryPage } from '../pages/gallery/GalleryPage'
import { ContactPage } from '../pages/contact/ContactPage'
import { AboutPage } from '../pages/about/AboutPage'
import { RouteErrorPage } from '../pages/error/RouteErrorPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
