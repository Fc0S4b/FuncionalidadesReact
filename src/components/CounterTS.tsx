import React from "react"
import { useState } from "react"


const CounterTS = () => {

  const [counter, setCounter] = useState(0)

  const incrementar = ( numero :number = 1):void=>{
    setCounter(counter + numero)
  }
  const reducir = ( numero :number = 1):void=>{
    setCounter(counter - numero)
  }

  
  return (
    <div>
      <h1>Contador : {counter}</h1>
      <button onClick={() => incrementar()}>+</button>
      <button onClick={() => reducir()}>-</button>
      <button onClick={() => setCounter(0)}>0</button>
    </div>
  )
}

export default CounterTS
