import { useRef, useState } from "react"
import { useForm } from 'react-hook-form';




// Zadanie 1 — Łatwe
// Stwórz prosty komponent FormularzImienia, który:
// ma jedno pole tekstowe input[type="text"] dla imienia
// pod polem wyświetla na bieżąco wpisany tekst jako: Witaj, [imie]!
// gdy pole jest puste, wyświetl: Wpisz swoje imię
// Wskazówka: użyj jednego useState i warunkowego renderowania (operator || lub ternary)

export function FormularzImienia(){
    const [imie, setImie] = useState(String)
    return (
		<div>
            <input type="text" onChange={(element) => {setImie(element.target.value)}} />
            {imie ? <p>Witaj, {imie}!</p> : <p>Wpisz swoje imię</p>}
        </div>
    )
}


// Zadanie 2 — Łatwe/Średnie
// Stwórz formularz oceniania ucznia dla Systemu Zarządzania Szkołą. Formularz ma zawierać:

// pole tekstowe: imię i nazwisko ucznia
// lista rozwijana (select): ocena od 1 do 6
// pole select: przedmiot (matematyka, polski, angielski, historia, biologia)
// przycisk Dodaj ocenę
// Po wysłaniu formularza wyświetl pod nim listę dodanych ocen w formacie:

// [Imie Nazwisko] - [Przedmiot]: [Ocena]

// Wskazówka: użyj tablicy w stanie do przechowywania listy wpisów.

export function FormularzOceniania(){
    const [wpisy, setWpisy] = useState([])
    const imieRef = useRef()
    const nazwRef = useRef()
    const ocenaRef = useRef()
    const przedmiotRef = useRef()
    const [id, setId] = useState(1)

    function Submit_handler(e){
        e.preventDefault()
        setWpisy([...wpisy, {
            id: id,
            imie: imieRef.current.value,
            nazwisko: nazwRef.current.value,
            ocena: ocenaRef.current.value,
            przedmiot: przedmiotRef.current.value
        }])
        setId(id+1)
    }

    return(<>
        <form onSubmit={Submit_handler}>
            Imię: <input type="text" ref={imieRef} /><br />
            Nazwisko: <input type="text" ref={nazwRef} /><br />
            Ocena: <select ref={ocenaRef}>
                {[6, 5, 4, 3, 2, 1].map((numer) => {
                    return(<option key={numer} value={numer}>{numer}</option>)
                })}
            </select><br />
            Przednimot: <select ref={przedmiotRef}>
                {["matematyka", "polski", "angielski", "historia", "biologia"].map((przedmiot) => {
                    return(<option key={przedmiot} value={przedmiot}>{przedmiot}</option>)
                })}
            </select><br />
            <button type="submit">Dodaj ocene</button>
        </form>
        <div>
            {wpisy.map((element) => {
                return(<p key={element.id}>{element.imie} {element.nazwisko} - {element.przedmiot}: {element.ocena}</p>)
            })}
        </div>
    </>)
}


// Zadanie 3 — Średnie
// Zbuduj formularz rejestracji ucznia z walidacją (bez bibliotek — tylko useState i własna logika).

// Pola formularza:

// Imie (wymagane, min. 2 znaki)
// Nazwisko (wymagane, min. 2 znaki)
// Email (wymagane, musi zawierać @ i .)
// Hasło (wymagane, min. 8 znaków)
// Powtórz hasło (wymagane, musi być identyczne jak hasło)
// Wymagania:

// pokaż czerwony komunikat błędu pod każdym niepoprawnym polem
// walidacja ma uruchamiać się przy próbie wysłania formularza
// po poprawnym wypełnieniu wyświetl zielony komunikat Rejestracja zakończona pomyślnie!
// wyczyść formularz po pomyślnej rejestracji
// Wskazówka: użyj jednego obiektu stanu dla danych i jednego dla błędów.

export function Zad3(){
    const imieRef = useRef()
    const nazwRef = useRef()
    const emailRef = useRef()
    const hasloRef = useRef()
    const ponowhasRef = useRef()
    const [info, setInfo] = useState(String)
    const [blad, setBlad] = useState()
    function SubmitHandler(e){
        e.preventDefault()
        let bledy = {}
        if (imieRef.current.value.length < 2){
            bledy.imie = "Imie musi mieć przynajmiej 2 znaki"
        }
        if (nazwRef.current.value.length < 2){
            bledy.nazwisko = "Nazwisko musi mieć przynajmiej 2 znaki"
        }
        if (!(emailRef.current.value).split("").includes("@") && !(emailRef.current.value).split("").includes(".")){
            bledy.email = "Email musi mieć @ i ."
        }
        if (hasloRef.current.value.length < 8){
            bledy.haslo = "haslo musi mieć przynajmiej 8 znaki"
        }
        if (ponowhasRef.current.value != hasloRef.current.value){
            bledy.ponhal = "haslo musi być takie samo jak to drugie co nie"
        }
        if (Object.keys(bledy).length ==0){
            setInfo(<p style={{color: "green"}}>Rejestracja zakończona pomyślnie!</p>)
            setBlad()
        }else{
            setBlad(bledy)
            setInfo(<p style={{color: "red"}}>są błędy bor</p>)

        }
    }

    function CheckForError(jaki){
        if (blad && blad[jaki]){
            return(<><p style={{color: "red"}}>{blad[jaki]}</p></>)
        }
        return null
    }
    return(<>
    <form onSubmit={SubmitHandler}>
        Imie: <input type="text" ref={imieRef}/> <br /> {CheckForError("imie")}
        Nazwisko: <input type="text" ref={nazwRef}/> <br /> {CheckForError("nazwisko")}
        Email: <input type="text" ref={emailRef}/> <br /> {CheckForError("email")}
        Hasło: <input type="password" ref={hasloRef}/> <br /> {CheckForError("haslo")}
        Powtórz hasło: <input type="password" ref={ponowhasRef}/> <br /> {CheckForError("ponhal")}
        <button type="submit">Zarejestruj</button>
    </form>
    {info}
    </>)
}

// Zadanie 4 — Średnie/Trudne
// Używając React Hook Form, stwórz formularz „Zgłoszenie nieobecności ucznia”.

// Pola:

// Imie ucznia (wymagane, min. 2 znaki)
// Nazwisko ucznia (wymagane, min. 2 znaki)
// Klasa (select: 1A, 1B, 2A, 2B, 3A, 3B) — wymagane
// Data nieobecności (input type="date") — wymagana
// Powód nieobecności (textarea) — wymagany, min. 10 znaków, max. 300 znaków
// Imie i nazwisko rodzica/opiekuna (wymagane)
// Wymagania:

// pełna walidacja z odpowiednimi komunikatami
// po poprawnym wysłaniu wyświetl podsumowanie zgłoszenia (imię, klasa, data)
// dodaj przycisk „Wyczyść formularz”, który resetuje wszystkie pola
// Wskazówka: użyj hooka reset() z useForm() i stanu do przechowywania podsumowania.

export function Zad4(){
    const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm()
    const [info, setInfo] = useState()
    function onSubmit(data){
        setInfo(<p>Wysłano zgłoszeie o nieobecności ucznia {data.imie} 
         z klasy {data.klasa} w dniu {data.dataNieobecnosci}</p>)
        reset()
    }
    return(<>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Imię:</label>
            <input
                {...register('imie', {
                    required: 'Imię jest wymagane',
                    minLength: {
                        value: 2,
                        message: 'Imię musi mieć co najmniej 2 znaki'
                    }
                })}
                type="text"
                placeholder="Twoje imię"
            />
            <br />
            {errors.imie && <span style={{ color: 'red' }}>{errors.imie.message}</span>}
        </div>

        <div>
            <label>Nazwisko:</label>
            <input
                {...register('nazwisko', {
                    required: 'Nazwisko jest wymagane',
                    minLength: {
                        value: 2,
                        message: 'Nazwisko musi mieć co najmniej 2 znaki'
                    }
                })}
                type="text"
                placeholder="Twoje Nazwisko"
            />
            <br />
            {errors.nazwisko && <span style={{ color: 'red' }}>{errors.nazwisko.message}</span>}
        </div>

        <div>
            <label>Klasa:</label>
            <select
                {...register('klasa', {
                    required: 'klasa jest wymagane',
                })}
            >
            {["1A", "1B", "2A", "2B", "3A", "3B"].map((element) => {
                return(<option key={element} value={element}>{element}</option>)
            })}
            </select>
            {errors.klasa && <span style={{ color: 'red' }}>{errors.klasa.message}</span>}
        </div>

        <div>
            <label>Data nieobecności:</label>
            <input
                {...register('dataNieobecnosci', {
                    required: 'Data Nieobecnosci jest wymagane',
                })}
                type="date"
            />
            <br />
            {errors.dataNieobecnosci && <span style={{ color: 'red' }}>{errors.dataNieobecnosci.message}</span>}
        </div>

        <div>
            <label>Powód nieobecności:</label>
            <textarea
                {...register('powod', {
                    required: 'Powód nieobecności jest wymagany',
                    minLength: {
                        value: 10,
                        message: 'Powód nieobecności musi mieć co najmniej 10 znaków'
                    },
                    maxLength: {
                        value: 300,
                        message: 'Powód nieobecności musi mieć maksymalnie 300 znaków'
                    }
                })}
                placeholder="Powód"
            />
            <br />
            {errors.powod && <span style={{ color: 'red' }}>{errors.powod.message}</span>}
        </div>

        <div>
            <label>Imię i nazwisko opiekuna:</label>
            <input
                {...register('opiekun', {
                    required: 'Imię i nazwisko opiekuna jest wymagane',
                })}
                type="text"
                placeholder="Imię i nazwisko opiekuna"
            />
            <br />
            {errors.opiekun && <span style={{ color: 'red' }}>{errors.opiekun.message}</span>}
        </div>
        <br />
        <button type="submit">Zatwierdź</button> | <button type="reset">Wyczyść</button>
    </form>
    {info && info}
    </>)
}


// Zadanie 5 — Trudne
// Stwórz interaktywny „Kreator profilu ucznia” z wieloma krokami (multi-step form).

// Formularz ma mieć 3 kroki:

// Krok 1 — Dane podstawowe
// Imię, Nazwisko, Data urodzenia, Płeć (radio button: mężczyzna, kobieta, nie chcę podawać)
// Krok 2 — Dane kontaktowe
// Email rodzica, Telefon rodzica (9 cyfr), Adres zamieszkania
// Krok 3 — Dane szkolne
// Klasa (select), Poprzednia szkoła (opcjonalne), Uwagi dodatkowe (textarea, opcjonalne)
// Wymagania:

// przyciski „Dalej” i „Wstecz” do nawigacji między krokami
// wyświetl aktualny krok (np. Krok 1 z 3)
// walidacja każdego kroku przed przejściem dalej
// na końcu wyświetl podsumowanie wszystkich wpisanych danych
// możliwość powrotu do wcześniejszego kroku i edycji danych
// Wskazówka: użyj useState do śledzenia aktualnego kroku i osobnego stanu dla danych z każdego kroku lub jednego dużego obiektu.