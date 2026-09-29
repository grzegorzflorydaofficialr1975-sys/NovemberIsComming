import { useState } from 'react'
import { TrybKoloru, OcenyUcznia } from './04r.jsx'

function App() {

  return (
    <>
      <h1>zad1</h1>
      <TrybKoloru />
      <h1>zad2</h1>
      <OcenyUcznia tablica={[1, 2, 3]}/>
    </>
  )
}

export default App
