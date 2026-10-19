	// Zadanie praktyczne 1: Komponent Article
	// Utwórz komponent Article, który przyjmuje props:
	// - title (string, wymagane)
	// - author (string, wymagane)
	// - content (string, opcjonalne)

import { useState } from "react";

	// Komponent powininen wyświetlić artykuł w formacie:
	// <h2>Tytuł</h2>
	// <p>Autor: imię autora</p>
	// <p>Zawartość artykułu</p>

	// Dodaj PropTypes do walidacji danych.
	// Użycie: <Article title="React 18" author="Jan" content="React jest super!" />

export function Article({ title, author, content= ""}){
    return (<>
    <h2>{title}</h2>
    <p>Autor: {author}</p>
    <p>{content}</p>
    </>)
}

	// Zadanie praktyczne 2: Komponent Person Card
	// Utwórz komponent PersonCard z destrukturyzacją props:
	// - firstName (string)
	// - lastName (string)
	// - age (number)
	// - occuption (string, domyślnie "Bez zawodu")

	// Wyświetl dane w karcie osoby.
	// Waliduj wszystkie props za pomocą PropTypes.

	// Śledź: W Angularze byłaby to @Input property - tutaj to props!

export function PersonCard({ firstName, lastName, age, occupation= "Bez zawodu"}){
    return (<>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
        <p>{occupation}</p>
    </>)
}

    // Zadanie praktyczne 3: Komponent Lista filmów
    // Utwórz komponent MovieList, który przyjmuje:
    // - movies (tablica obiektów z polami: id, title, year, rating)

    // Komponent powinien:
    // - Iterować przez tablicę filmów
    // - Wyświetlić każdy film na liście
    // - Walidować że movies to tablica obiektów z wymaganymi polami

    // Przykład użycia:
    // <MovieList movies={[
    //     { id: 1, title: "Inception", year: 2010, rating: 8.8 },
    //     { id: 2, title: "Avatar", year: 2009, rating: 8.5 }
    // ]} />
// id, title, year, rating
export function MovieList(props) {
    const { movies } = props;
    return (
        <div>
            {movies.map((element) => {
                if (element.id && element.title && element.year && element.rating) {
                    return (
                        <div id={element.id}>
                            <p>{element.title}</p>
                            <p>rok: {element.year}</p>
                            <p>rating: {element.rating}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

//  Zadanie praktyczne 4: Komponent z callback props
// 	Utwórz komponent Counter z props:
// 	- initialValue (number, opcjonalne, domyślnie 0)
// 	- onIncrement (function, wymagane)
// 	- onDecrement (function, wymagane)

// 	Komponent wyświetli:
// 	- Bieżącą wartość licznika
// 	- Przycisk "Zwiększ" i "Zmniejsz" które wywołują callback'i

// 	Waliduj że onIncrement i onDecrement to funkcje (PropTypes.func)

export function Counter({ initialValue=0, onIncrement, onDecrement }){
    const [counter, setCounter]  = useState(initialValue)
    return (<>
    <p>Licznik: {counter}</p>
    <button onClick={()=>{setCounter(onDecrement(counter))}}>Zmniejsz</button>
    <button onClick={()=>{setCounter(onIncrement(counter))}}>Zwiększ</button>
    </>)
    
}


