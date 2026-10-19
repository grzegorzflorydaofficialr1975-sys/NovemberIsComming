import { useState } from 'react'
import { TrybKoloru, OcenyUcznia, ListaObecnosci, DziennikOcen } from './04r.jsx'

function App() {
  const Uczniowie = [{id: 1, imie: "Bartek", obecny: false},
    {id: 2, imie: "Franek", obecny: false},
    {id: 3, imie: "Paw", obecny: true},
    {id: 4, imie: "Dominik", obecny: false},
    {id: 5, imie: "Pyra", obecny: false},
    {id: 6, imie: "Lelelelena", obecny: false},
    {id: 7, imie: "Krzysiu", obecny: false},
    {id: 8, imie: "Oskar", obecny: false}
  ]
  return (
    <>
      <h1>zad1</h1>
      <TrybKoloru />
      <h1>zad2</h1>
      <OcenyUcznia tablica={[1, 2, 3]}/>
      <h1>Zad 3</h1>
      <ListaObecnosci ListaUczniow={Uczniowie} />
      <h1>Zad 4</h1>
      <DziennikOcen Lista={[]} />
    </>
  )
}

export default App
