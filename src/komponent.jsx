import React from "react";
export function Welcome({ name, age }) {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>You are {age} years old.</p>
        </div>
    );
}
export function PrzywirajFedzahe({czy_fedz}) {
    const fedz = czy_fedz ? "Witam ukochany Fedżuśiu" : "Spłyń";
    return (
        <h1> {fedz} </h1>
    )
}