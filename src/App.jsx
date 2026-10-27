import { useState } from 'react'
import { FormularzImienia, FormularzOceniania, Zad3, Zad4 } from './10r.jsx'
function App() {
  return (
    <>
      <h1>Zad1</h1>
      <FormularzImienia />
      <h1>Zad 2</h1>
      <FormularzOceniania />
      <h1>Zad 3</h1>
      <Zad3 />
      <h1>Zad 4</h1>
      <Zad4 />
    </>
  )
}

export default App
