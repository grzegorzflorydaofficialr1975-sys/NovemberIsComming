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
    return (<>
        <input type="number" placeholder="Podaj Ocene: " onChange={(e)=>{ setNowa(e.target.value)}}></input>
        <button onClick={()=>{if (toString(nowa).length>0 && nowa>=1 && nowa<=6){setLiczby((liczby.join(" ")+" "+nowa).split(" "))}}}>Dodaj Ocene: {nowa}</button>
        <p>oceny: {liczby.join(" ")}</p>
    </>)
}