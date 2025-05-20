import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1001, marca: "Hyundai", km: 10.6, cor: "Preto", ano: 2005},
    {id: 1002, marca: "Ford", km: 22.3, cor: "Cinza", ano: 2010},
    {id: 1003, marca: "Renault", km: 0, cor: "Azul", ano: 2025, },
  
  ]

  return (
    <>
      <div>
        {cars.map((car)=>(<CarDetails key={car.id} marca = {car.marca} km = {car.km} cor = {car.cor} ano = {car.ano}/>))}
      </div>
    </>
  )
}

export default App
