import React from "react";

function PropsyDziecko1({ zmienna = '' }){
    return (<div>Zmienna to {zmienna}</div>)
}

function PropsyRodzic(){
    const jakazZmienna = "rodzic"
    return (<>
    <PropsyDziecko1 zmienna={jakazZmienna} />
    </>)
}

export default function Zadanie(){
    return(<div>
        <p> zad 1 </p>
        <PropsyRodzic/>
    </div>)
}