import './App.css'
import { createContext, useState } from 'react';
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import Layout from './components/Layout';
import TrainingsPage from './pages/TrainingsPage';
import AboutPage from './pages/AboutPage';

export const ThemeContext = createContext(null)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='training' element={<TrainingsPage />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
)

function App() {

  const [theme, setTheme] = useState('dark')

  // ContextApi is going to enable us implement the light and dark mode switching by letting us move the switching functionality throughout our application.

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light'? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
