import { useState } from 'react'
import { ZegarCyfrowy, PowitanieZBazy, PodgladTypowania, OcenySzkolne, WyszukiwarkaUczniowApi } from './6rTab'

function App() {
  return (
    <>
      <h1>zad1</h1>
      <ZegarCyfrowy />
      <h1>zad 2</h1>
      <PowitanieZBazy />
      <h1>Zad 3</h1>
      <PodgladTypowania />
      <h1>zad 4</h1>
      <OcenySzkolne />
      <h1>zad 5</h1>
      <WyszukiwarkaUczniowApi />
    </>
  )
}

export default App
