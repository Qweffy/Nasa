import React from 'react'

export default function Asteroid(props) {
  return (
    <div>
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
        <span>{props.data.close_approach_data[0].relative_velocity.kilometers_per_hour}</span>
      </div>
      <div>
        <span>Tamaño:{' '}</span> 
        <span>Diametro minimo:{' '}</span> 
        <span>{props.data.estimated_diameter.kilometers.estimated_diameter_min}</span>
        <span>Diametro maximo:{' '}</span> 
        <span>{props.data.estimated_diameter.kilometers.estimated_diameter_max}</span>
      </div>

    </div>
  )
}


// data.map((e)=>console.log(e.estimated_diameter.kilometers.estimated_diameter_min))
// data.map((e)=>console.log(e.estimated_diameter.kilometers.estimated_diameter_max))
// data.map((e)=>console.log(e.id))
// data.map((e)=>console.log(e.close_approach_data[0].close_approach_date_full))
// data.map((e)=>console.log(e.close_approach_data[0].relative_velocity.kilometers_per_hour))
// data.map((e)=>console.log(e.estimated_diameter.kilometers.estimated_diameter_max))