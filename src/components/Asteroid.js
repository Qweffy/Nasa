import React from 'react'
import Style from './Asteroid.module.css'


export default function Asteroid(props) {
  
  function toKilometers(num){
    return (' ' +  num.toFixed(2) + ' ' + 'Km.' + ' ');
  }

  function toKilometersPerHour(num){
    num = parseInt(num)
    return (' ' +  num.toFixed(2) + ' ' + 'Km/hr.' + ' ');
  }

  return (
    <div className={Style.container}>
      <div>
        <span>ID:{' '}</span> 
        <span>{props.data.id}</span>
      </div>
      <div>
        <span>hora de aproximacion:{' '}</span> 
        <span>{props.data.close_approach_data[0].close_approach_date_full}</span>
      </div>
      <div>
        <span>velocidad de aproximacion:{' '}</span> 
        <span>{toKilometersPerHour(props.data.close_approach_data[0].relative_velocity.kilometers_per_hour)}</span>
      </div>
      <div>
        <span>Tamaño:{' '}</span> 
        <span>Diametro minimo:{' '}</span> 
        <span>{toKilometers(props.data.estimated_diameter.kilometers.estimated_diameter_min)}</span>
        <span>Diametro maximo:{' '}</span> 
        <span>{toKilometers(props.data.estimated_diameter.kilometers.estimated_diameter_max)}</span>
      </div>

    </div>
  )
}
