import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import { Welcome } from './komponent.jsx'
// import { PrzywirajFedzahe } from './komponent.jsx'
// import Zadanie from './propsy.jsx'
import { Article, PersonCard, MovieList, Counter } from './03r.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [czy_fedz, setCzyFedz] = useState(false)
  const movies = [
        { id: 1, title: "Inception", year: 2010, rating: 8.8 },
        { id: 2, title: "Avatar", year: 2009, rating: 8.5 }
    ]
  function onIncrement(getter){
    return getter+1
  }
  function onDecrement(getter){
    return getter-1
  }
  return (
    <>
      <h1>Zad1</h1>
      <Article title="React 18" author="Jan" content="React jest super!" />
      <h1>Zad2</h1>
      <PersonCard  firstName="Franciszek" lastName="Kliszko" age="17" />
      <h1>Zad3</h1>
      <MovieList movies={movies} />
      <h1>Zad4</h1>
      <Counter initialValue={10} onIncrement={onIncrement} onDecrement={onDecrement} />
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <br/><br/><br/>
        <h1> Czy jesteś Fedżem? </h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCzyFedz((czy_fedz) => !czy_fedz)}
        >
          {czy_fedz ? "Tak" : "Nie"}
        </button>

        <PrzywirajFedzahe czy_fedz={czy_fedz} />

        <Zadanie />

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
