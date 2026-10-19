import { createContext, useContext, useState } from "react";

/*	Zadanie 1 - Poziom: Łatwy
	Temat: Pierwszy własny Context

	Stwórz Context o nazwie SchoolNameContext przechowujący nazwę szkoły.
	Wymagania:
	1. Utwórz SchoolNameContext używając createContext()
	2. Stwórz komponent SchoolNameProvider który w stanie przechowuje
		nazwę szkoły "Liceum Ogólnokształcące nr 1 im. Jana Kochanowskiego"
	3. Stwórz komponent SchoolHeader który pobiera nazwę z Context
		i wyświetla ją w tagu <h1>
	4. Złóż wszystko w App i uruchom

	Oczekiwany wynik:
	Na stronie widoczny nagłówek z pełną nazwą szkoły.

	Wskazówka: Pamiętaj o "owinięciu" SchoolHeader w SchoolNameProvider!
*/
export function Zad1(){
    return(
        <div>
            <SchoolNameProvider />
            <SchoolHeader />
        </div>
    )
}

const SchoolNameContext = createContext(null)

function SchoolNameProvider(){
    const nazwaSzkoly = "Liceum Ogólnokształcące nr 1 im. Jana Kochanowskiego"
    return(<SchoolNameContext.Provider value={nazwaSzkoly}>
        <SchoolHeader />
    </SchoolNameContext.Provider>)
}

function SchoolHeader(){
    const nazwaSzkoly = useContext(SchoolNameContext)
    return(<h1>{nazwaSzkoly}</h1>)
}

/*	Zadanie 2 - Poziom: Łatwy
	Temat: Context z możliwością zmiany danych

	Stwórz system zmiany klasy dla ucznia.
	Wymagania:
	1. Utwórz StudentContext przechowujący obiekt { name: 'Jan Kowalski', class: '1A' }
	2. Dodaj do Providera funkcję changeClass(newClass) która aktualizuje klasę ucznia
	3. Stwórz komponent StudentInfo wyświetlający imię i klasę ucznia
	4. Stwórz komponent ClassChanger z przyciskami: "1A", "2B", "3C"
		- Kliknięcie przycisku zmienia klasę ucznia w Contexcie
	5. Oba komponenty mają działać bez przekazywania props

	Oczekiwany wynik:
	Wyświetla się "Jan Kowalski - Klasa: 1A"
	Po kliknięciu "2B" zmienia się na "Jan Kowalski - Klasa: 2B"
*/

const StudentContext = createContext(null)

export function Zad2(){
    return(
        <SudentProvider>
            <StudentInfo />
            <ClassChanger />
		</SudentProvider>
    )
}

const SudentProvider = ({ children }) => {
    const [student, setStudent] = useState({
        name: "Jan Kowalski",
        class: "1A"
    })
    function changeClass(klasa){
        console.log(klasa)
        setStudent({name: student.name, class: klasa})
    }
    return (
    <StudentContext.Provider value={{ student, changeClass }}>
        {children}
    </StudentContext.Provider>
	);
}
function StudentInfo(){
    const {student , changeClass} = useContext(StudentContext)
    return(<div>
        <p>Imię: {student.name} | Klasa: {student.class}</p>
    </div>)
}
function ClassChanger(){
    const {student , changeClass} = useContext(StudentContext)
    return(<div>
        <p>Zmień klase</p>
        <button onClick={()=>changeClass("1A")}>1A</button>
        <button onClick={()=>changeClass("2B")}>2B</button>
        <button onClick={()=>changeClass("3C")}>3C</button>
    </div>)
}

/*	Zadanie 3 - Poziom: Sredni
	Temat: Custom Hook dla Context

	Stwórz system zarządzania listą obecności z custom hookiem.
	Wymagania:
	1. Utwórz AttendanceContext z listą uczniów:
		[
			{ id: 1, name: 'Anna Nowak', present: false },
			{ id: 2, name: 'Piotr Kowalski', present: false },
			{ id: 3, name: 'Maria Wiśniewska', present: false }
		]
	2. Dodaj funkcję toggleAttendance(id) przełączającą obecność ucznia
	3. Stwórz custom hook useAttendance() z sprawdzaniem czy Provider jest aktywny
	4. Stwórz komponent AttendanceList wyświetlający listę z checkboxami
		(checkbox zaznaczony jeśli present === true)
	5. Stwórz komponent AttendanceSummary wyświetlający:
		"Obecnych: X z Y uczniów"

	Oczekiwany wynik:
	Lista uczniów z checkboxami. Kliknięcie checkboxa zmienia status.
	Podsumowanie aktualizuje się automatycznie.
*/

const AttendanceContext = createContext(null)
