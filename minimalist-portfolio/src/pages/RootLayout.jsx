import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

/**
 * RootLayout component serves as the main layout structure for the application.
 * It includes the MainNavigation component at the top, followed by a dynamic
 * content area represented by the Outlet component, and concludes with the
 * Footer component at the bottom.
 */

// RootLayout component serves as the main layout structure for the application
function RootLayout() {
  return (
    <>
      {/* Main navigation bar at the top of the layout */}
      <MainNavigation />
      
      {/* Outlet component renders the matched child route components */}
      <Outlet />
      
      {/* Footer component at the bottom of the layout */}
      <Footer />
    </>
  );
}

export default RootLayout;