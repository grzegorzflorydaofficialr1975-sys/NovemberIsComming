import { useState } from "react";

/*	Zadanie 1 (proste) - Lista przedmiotów szkolnych
	Stwórz komponent 'ListaPrzedmiotow'.
	Dane: tablica stringów z nazwami przedmiotów: Matematyka, Polski, Angielski, Historia, Fizyka, Chemia, Biologia.
	Wyświetl je jako listę nieuporządkowaną <ul>.
	Ponieważ są to stringi (nie obiekty z id), możesz użyć indeksu jako klucza
	- lista jest statyczna i się nie zmienia.

	Oczekiwany wynik:
	Lista przedmiotów:
	- Matematyka
	- Polski
	- Angielski
	- (i tak dalej...)
*/
export function ListaPrzedmiotow(){
    const tab = ["Matematyka", "Polski", "Angielski", "Historia", "Fizyka", "Chemia", "Biologia"]
    return(<>
    <ul>
        {tab.map((element, index) => {
            return(<li key={index}>{element}</li>)
        })}
    </ul>
    </>)
}

/*	Zadanie 2 (lekko trudniejsze) - Karta klasy
	Stwórz komponent 'KartaKlasy'.
	Dane: tablica obiektów uczniów, każdy z polami: id, imie, nazwisko, nrDziennika.
	Wyświetl uczniów jako tabelę HTML z kolumnami: Nr dziennika, Imię, Nazwisko.
	Posortuj uczniów po nrDziennika przed wyświetleniem.
	Użyj id ucznia jako klucza.

	Przykładowe dane do użycia:
	const uczniowie = [
		{ id: 1, imie: 'Celina', nazwisko: 'Wiśniowska', nrDziennika: 3 },
		{ id: 2, imie: 'Anna', nazwisko: 'Kowalska', nrDziennika: 1 },
		{ id: 3, imie: 'Bartek', nazwisko: 'Nowak', nrDziennika: 2 },
	];
*/

export function KartaKlasy(){
    const uczniowie = [
		{ id: 1, imie: 'Celina', nazwisko: 'Wiśniowska', nrDziennika: 3 },
		{ id: 2, imie: 'Anna', nazwisko: 'Kowalska', nrDziennika: 1 },
		{ id: 3, imie: 'Bartek', nazwisko: 'Nowak', nrDziennika: 2 },
	];
    return(<table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>imie</th>
                <th>nazwisko</th>
                <th>nr w dzinnku</th>
            </tr>
        </thead>
        <tbody>
            {uczniowie.map((element)=>{
                return(
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.imie}</td>
                        <td>{element.nazwisko}</td>
                        <td>{element.nrDziennika}</td>
                    </tr>
                )
            })}
            </tbody>
    </table>)
}


/*	Zadanie 3 (średnie) - Dziennik ocen z filtrami
	Stwórz komponent 'DziennikOcen'.
	Dane: tablica ocen z polami: id, przedmiot, ocena (1-6), data.
	Wymagania:
	- Wyświetl listę ocen
	- Dodaj filtr (select) pozwalający wybrać konkretny przedmiot lub 'Wszystkie'
	- Wyświetl średnią ocen z aktualnie wyświetlanych przedmiotów
	- Użyj id jako klucza
	- Jeśli po filtrowaniu nie ma żadnych ocen, wyświetl tekst 'Brak ocen z tego przedmiotu'

	Wskazówka: listę unikalnych przedmiotów do selecta możesz stworzyć używając:
	[...new Set(oceny.map(o => o.przedmiot))]
*/

export function DziennikOcen(){
    const oceny = [{id: 1, przedmiot: "Matematyka", ocena: 1},
		{id: 2, przedmiot: "Geografia", ocena: 6},
		{id: 3, przedmiot: "Matematyka", ocena: 3 },
		{id: 4, przedmiot: "Polski", ocena: 5},
		{id: 5, przedmiot: "Programowanie", ocena: 5}]
	const [show, setShow] = useState(oceny)
	let przedmioty = []
	oceny.map((element)=>{
		if (!przedmioty.includes(element.przedmiot))
			przedmioty = [...przedmioty, element.przedmiot]
	})
	return(<>
	Sortuj po: 
	<select onChange={
		(element)=>{
			if (element.target.value == "Wszystkie"){
				setShow(oceny)
			}else{
				setShow(oceny.filter((wszystkie) => wszystkie.przedmiot == element.target.value))
			}
		}
	}>
		<option defaultValue={"selected"} key={"Wszystkie"} value={"Wszystkie"}>Wszystkie</option>
		{przedmioty.map((element)=>{
			return(<option key={element} value={element}>{element}</option>)
		})}
	</select>
	<ul>
		{show.sort((a, b) => a.przedmiot.localeCompare(b.przedmiot)).map((element) => {
			return(<li key={element.id}>{element.przedmiot} | {element.ocena}</li>)
		})}
	</ul>
	<p>średnia ocen: {(() => {
		let suma = 0
		show.map((element)=>{
			suma+= element.ocena
		})
		return(suma/show.length)
	})()}</p>
	</>)
}