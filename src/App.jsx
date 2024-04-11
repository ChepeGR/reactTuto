//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import SudamovieCardRenderer from './components/sudaMovieCardRenderer/SudamovieCardRenderer'
import movies from './assets/movies.json'



function App() {

  return (
    <>
      <SudamovieCardRenderer 
      movies={movies}></SudamovieCardRenderer>
    </>
  )
}

export default App
