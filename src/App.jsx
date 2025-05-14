import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import WorkInProgress from './components/WorkInProgress'
import CountryList from './pages/countries/CountryList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path='/countryList' element={<CountryList/>}/>
          <Route path="*" element={<WorkInProgress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
