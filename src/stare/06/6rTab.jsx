import { use } from "react";
import { useState, useEffect} from "react";


/*	Zadanie 1 - Latwe
	Stwórz komponent 'ZegarCyfrowy', który wyświetla aktualny czas (godziny, minuty, sekundy).
	Wymagania:
	- Użyj useEffect z [] do uruchomienia interwalu co 1 sekundę
	- Użyj useState do przechowywania aktualnego czasu
	- Wyświetl czas w formacie HH:MM:SS
	- W cleanup zatrzymaj interval (clearInterval)
	- Wskazówka: new Date().toLocaleTimeString()
*/
export function ZegarCyfrowy() {
    const [czas, setCzas] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCzas(new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    return <p>{czas}</p>;
}

/*	Zadanie 2 - Latwe
	Stwórz komponent 'PowitanieZBazy', który:
	- Przy montowaniu (useEffect z []) "pobiera" imię ucznia z localStorage
		(klucz: 'imie-ucznia') lub ustawia domyślne "Nieznajomy"
	- Wyświetla "Witaj, [imie]!"
	- Ma pole input i przycisk "Zapisz imię"
	- Po kliknieciu przycisku zapisuje imie do localStorage i aktualizuje stan
	- Przy ponownym otwarciu strony pamięta zapisane imię
*/

export function PowitanieZBazy(){
    const [imie, setImie] = useState("")
    const [nowe, setNowe] = useState("")
    useEffect(()=>{
        setImie(localStorage.getItem("imie-ucznia") || "Nieznajomy")
    }, [])
    return(<>
    <p>Witaj, {imie}</p>
    <input type="text" onChange={(element)=>{setNowe(element.target.value)}} /> 
    <button onClick={()=> {localStorage.setItem("imie-ucznia", nowe) ; setImie(nowe)}}>Zapisz imię</button>
    </>)  
}

/*	Zadanie 3 - Średnie
	Stwórz komponent 'PodgladTypowania', który implementuje efekt "ktos pisze...":
	- Ma pole tekstowe
	- Gdy użytkownik zaczyna pisać, wyświetla "użytkownik pisze..."
	- Jeśli użytkownik nie pisał przez 1,5 sekundy, komunikat znika
	- Użyj useEffect z [tekst] i clearTimeout w cleanup
	- To częsty pattern w komunikatorach (np. WhatsApp)
*/
export function PodgladTypowania(){
    const [pisze, setPisze] = useState("")
    const [informacja, setInformacja] = useState("")
    useEffect(()=>{
        if (pisze.length==0){return}
        setInformacja("użytkownik pisze...")
        const interval = setTimeout(() => {
            setInformacja("")
        }, 1500);
    }, [pisze])
    return(<>
    <input type="text" onChange={(element)=>{setPisze(element.target.value)}} />
    <p>{informacja}</p>
    </>)
}

/*	Zadanie 4 - Średnie
	Stwórz system 'OcenySzkolne' z komponentami:
	- Komponent 'DodajOcene': formularz z polem na ocene (1-6) i przyciskiem "Dodaj"
	- Komponent 'StatystykiOcen': przyjmuje tablice ocen przez propsy i wyświetla średnią
	- W komponencie głównym:
		- Przechowyj tablicę ocen w stanie
		- Użyj useEffect ([oceny]) żeby zapisywać oceny do localStorage przy każdej zmianie
		- Przy montowaniu wczytaj oceny z localStorage
		- Wyświetl średnią ocen i liczbę ocen
*/

export function OcenySzkolne(){
    const [listaOcen, setListaOcen] = useState([])

    useEffect(()=>{
        if (localStorage.getItem("listaOcen").length!=0 && listaOcen.length==0){
            setListaOcen(localStorage.getItem("listaOcen").split(" "))
        }
        localStorage.setItem("listaOcen", listaOcen.join(" "))
        
    }, [listaOcen])

    function DodajOcene(){
        const [nowaOcena, setNowaOcena] = useState(Number)
        return(<>
        <input type="number" onChange={
            (element) => {
                setNowaOcena(Number(element.target.value))
            }
        }/>
        <button onClick={() => {
                if (1 <= nowaOcena && nowaOcena <= 6){
                    setListaOcen([...listaOcen, nowaOcena])
                }
            }
        }>Dodaj</button>
        </>)
    }
    function StatystykiOcen({ TablicaOcen }){
        let liczbaOcen = TablicaOcen.length
        let srednia
        if (liczbaOcen!=0){
            let suma = 0
            TablicaOcen.forEach(element => {
                suma+=Number(element)
            });
            srednia = suma / liczbaOcen
        }
        return(<p>Liczba ocen: {liczbaOcen} | średnia: {srednia||"Brak"}</p>)
    }
    return(<>
    <DodajOcene />
    <StatystykiOcen TablicaOcen={listaOcen} />
    </>)
}

/*	Zadanie 5 - Trudne
	Stwórz komponent 'WyszukiwarkaUczniowApi', który symuluje wyszukiwanie z opóznieniem (debounce):
	- Ma pole input do wpisywania imienia ucznia
	- Użyj useEffect ([fraza]) - ale dane pobieraj dopiero po 400ms od ostatniej zmiany frazy
		(Użyj setTimeout + clearTimeout w cleanup - to własnie jest debounce)
	- Gdy fraza jest krótsza niz 2 znaki, nie wyszukuj
	- Symuluj "pobieranie z API" przez setTimeout (300ms) i wbudowaną listę uczniów
	- Wyświetl stan: "Wpisz imię", "Szukam...", lista wyników lub "Brak wyników"
	- Lista uczniów do wyszukiwania: ['Anna Kowalska', 'Bartek Nowak', 'Anna Wiśniowa',
		'Celina Dąbrowska', 'Daniel Witek', 'Ewa Kowalczyk', 'Filip Adamski']
*/
export function WyszukiwarkaUczniowApi(){
    const [fraza, setFraza] = useState("")
    const [output, setOutput] = useState("Wpisz imię")
    const [resoults, setResoults] = useState([])
    useEffect(()=>{
        if (fraza.length <= 2){
            setResoults([])
            setOutput("Wpisz imię")
            return
        }

        setOutput("Szukam...")
        setResoults([])

        let apiTimeout
        const debounceTimeout = setTimeout(()=>{
            const listaZAPI = ['Anna Kowalska', 'Bartek Nowak', 'Anna Wiśniowa',
                'Celina Dąbrowska', 'Daniel Witek', 'Ewa Kowalczyk', 'Filip Adamski']
            const wyniki = listaZAPI.filter((uczen) =>
                uczen.toLocaleLowerCase().includes(fraza.toLocaleLowerCase())
            )

            apiTimeout = setTimeout(()=>{
                setResoults(wyniki)
                setOutput(wyniki.length === 0 ? "Brak wyników" : "Znaleziono")
            }, 300)
        },400)

        return () => {
            clearTimeout(debounceTimeout)
            clearTimeout(apiTimeout)
        }
    }, [fraza])
    return(<>
    <input type="text" placeholder="Imie ucznia" onChange={(element)=>{
        setFraza(element.target.value.trim())
    }}/>
    <p>{output}</p>
    {resoults.map((element)=>{
        return(<p>{element}</p>)
    })}
    </>)
}