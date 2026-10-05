/*	Zadanie 1 - Proste (Przełącznik trybu ciemnego)
	Stwórz komponent 'TrybKoloru', ktory:
	- Przechowuje stan 'ciemnyTryb' (boolean, domyślnie false)
	- Wyświetla przycisk "Włącz tryb ciemny" lub "Wyłącz tryb ciemny"
		w zależności od aktualnego stanu
	- Po kliknięciu przełącza tryb na przeciwny
	- Wyświetla tekst "Aktualny tryb: ciemny" lub "Aktualny tryb: jasny"

	Podpowiedz:
	- useState(false) dla wartości logicznej
	- setTryb(poprzedni => !poprzedni) do przełączania
*/

import { useState } from "react"

export function TrybKoloru({ ciemnyTryb=true }){
    const [tryb, setTryb] = useState(ciemnyTryb)
    let butText = tryb ? "Wyłącz tryb ciemny": "Włącz tryb ciemny"
    let pText = tryb ? "Aktualny tryb: ciemny": "Aktualny tryb: jasny"
    return (<>
        <button onClick={()=>{setTryb(!tryb)}}>{butText}</button>
        <p>{pText}</p>
    </>)
}

/*	Zadanie 2 - Łatwe (Oceny ucznia)
	Stwórz komponent 'OcenyUcznia', który:
	- Przechowuje tablice ocen (stan), np. [5, 4, 3]
	- Umożliwia dodanie oceny przez input numeryczny (wartosci 1-6)
	- Wyświetla wszystkie oceny jako listę
	- Wyświetla średnią ocen obliczoną na bieżąco
		(podpowiedź: suma / ilość, metoda reduce lub pętla) - zaokrąglona do 2 miejsc po przecinku

	Podpowiedź obliczania średniej (
		const srednia = oceny.length > 0
			? (oceny.reduce((suma, o) => suma + o, 0) / oceny.length).toFixed(2)
			: 0;
	)
*/

export function OcenyUcznia({ tablica = [] }){
    const [liczby, setLiczby] = useState(tablica)
    const [nowa, setNowa] = useState(Number)
	function WyliczSrednia(lista){
		let srednia =0 ;
		liczby.forEach(liczba => {srednia+= Number(liczba)});
		return (srednia/liczby.length)
	}
    return (<>
        <input type="number" placeholder="Podaj Ocene: " onChange={(element)=>{ setNowa(element.target.value)}}></input>
        <button onClick={()=>{if (toString(nowa).length>0 && nowa>=1 && nowa<=6){setLiczby((liczby.join(" ")+" "+nowa).split(" "))}}}>Dodaj Ocene: {nowa}</button>
        <p>oceny: {liczby.join(" ")}</p>
		<p>Średnia: {WyliczSrednia(liczby)}</p>
    </>)
}

/*	Zadanie 3 - Średnie (Lista obecności)
	Stwórz komponent 'ListaObecnosci', który:
	- Ma tablice uczniów (stan), każdy uczeń to obiekt: { id, imie, obecny: false }
	- Zaczyna z co najmniej 4 predefiniowanymi uczniami
	- Wyświetla listę uczniów z checkboxem przy każdym
	- Kliknięcie checkboxa przełącza pole 'obecny' dla danego ucznia
		(WAZNE: nie mutuj tablicy - użyj map() do stworzenia nowej wersji)
	- Na dole wyświetla: "Obecnych: X / Y" (X - obecni, Y - wszyscy)

	Podpowiedź do przełączania obecności (
		setUczniowie(poprzedni =>
			poprzedni.map(u =>
				u.id === id ? { ...u, obecny: !u.obecny } : u
			)
		);
	)
*/
export function ListaObecnosci({ ListaUczniow }){
	let [poprzedni, setPoprzedni] = useState(ListaUczniow)
	let count = 0;
	return(<>
	{poprzedni.map((element) =>{
		if (element.id && element.imie && (element.obecny==false || element.obecny==true)){
			return(<>
				<p><input type="checkbox" checked={element.obecny} onChange={() => setPoprzedni(aktualni => aktualni.map(u => u.id === element.id ? { ...u, obecny: !u.obecny } : u))}></input> {element.imie}</p>
			 </>)
		}
	})}
	<h3>Obecnych {poprzedni.map((element)=>{if (element.obecny){count+=1}})}{count}/{poprzedni.length}</h3>
	</>)

}

/*	Zadanie 4 - Średniozaawansowane (Koszyk ocen z usuwaniem)
	Stwórz komponent 'DziennikOcen', który symuluje dziennik:
	- Stan: tablica obiektów { id, przedmiot, ocena, data }
	- Formularz z polem select dla przedmiotu (min 4 przedmioty),
		polem number dla oceny (1-6) - data ustawiania automatycznie (new Date().toLocaleDateString())
	- Po kliknięciu "Dodaj ocenę" - dodaje wpis do stanu
	- Wyświetla wszystkie wpisy w tabeli HTML (kolumny: Przedmiot, Ocena, Data, Akcja)
	- Przycisk "Usuń" w każdym wierszu usuwa dany wpis
	- Na dole: średnia wszystkich ocen (lub komunikat "Brak ocen")
*/
export function DziennikOcen({ Tablica }){
	let przedmioty = ["Poliski", "Angielski", "Matematyka", "Programowanie"]
	let [inpOcena, setInpOcena] = useState(Number)
	let [listaWpisow, setListaWpisow] = useState(Tablica)
	return(<>
	<div>
		<select>
			{przedmioty.map(przedmiot => (
				<option key={przedmiot} value={przedmiot}>
				{przedmiot}
				</option>
			))}
		</select><br/>
		Wsaw ocene: <input type="number" onChange={e=>{setInpOcena(e.target.value)}} />
		<button >Wstaw ocene</button>

	</div>
	</>)
}