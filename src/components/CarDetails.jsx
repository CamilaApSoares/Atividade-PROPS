import React from 'react'

const CarDetails = ({marca, km, cor, ano}) => {
  return (
    <div><h3>As informações do carro são</h3>
    <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
    </ul>
    {km == 0 ? (<p>O carro é novo</p>):(<p>O carro é usado</p>)}
    </div>
  )
}

export default  CarDetails