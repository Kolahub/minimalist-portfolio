import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import PortfolioPageContent, { Loader as pageContentLoader } from './pages/PortfolioPageContent';
import PortfolioDetailPageContent, { Loader as PageDetailContentLoader } from './pages/PortfolioDetailPageContent';
import ContactPageContent from './pages/ContactPageContent';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorPage from './pages/ErrorPage';

// Define the router configuration for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Root layout component for the main structure
    errorElement: <ErrorPage />, // Error page component for handling route errors
    children: [
      { index: true, element: <HomePage /> }, // Home page route
      {
        path: "portfolio",
        children: [
          { index: true, element: <PortfolioPageContent />, loader: pageContentLoader }, // Portfolio page route with loader
          { path: ":projectId", id: 'project-detail', element: <PortfolioDetailPageContent />, loader: PageDetailContentLoader } // Portfolio detail page route with loader
        ]
      },
      {
        path: 'contactme',
        element: <ContactPageContent /> // Contact page route
      }
    ]
  }
]);

// App component serves as the entry point for the application
function App() {
  return (
    // RouterProvider sets up the routing context for the application
    // 'router' is the configuration object defining the routes
    // 'fallbackElement' displays a loading spinner while routes are being loaded
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  );
}

export default App;