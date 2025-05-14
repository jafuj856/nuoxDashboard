import React from 'react'
import Sidebar from './Sidbar';
import Topbar from './Topbar';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Layout() {
    const toggleSidebar = useSelector((state) => state.root.toggleSidebar);
 
  return (
    <>
      <div className="flex min-h-screen  overflow-x-hidden  w-full">
        <Sidebar />
        <main
          className={`sm:ml-62 ml-0 w-full p-6 relative ${
            toggleSidebar ? "sm:ml-62 ml-0" : "sm:ml-62 ml-0"
          }`}
        >
          <div
            className={`fixed sm:left-62 right-0 top-0 z-40 ${
              toggleSidebar ? "sm:left-62 left-0" : "sm:left-62 left-0"
            }`}
          >
            <Topbar />
          </div>
          <div className="mt-[100px]" />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout
