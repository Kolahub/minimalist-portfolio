// import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import PortfolioPageContent from './pages/PortfolioPageContent';
import PortfolioDetailPageContent from './pages/PortfolioDetailPageContent';
import ContactPageContent from './pages/ContactPageContent';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "portfolio",
        element: <PortfolioPageContent />,
        children: [
          {index: true, element: <PortfolioDetailPageContent />}
        ]
      },
      {
        path: 'contactme',
        element: <ContactPageContent />
      }
    ]
  }
])

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App