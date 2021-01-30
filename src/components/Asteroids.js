import React from 'react'
import Style from './Asteroids.module.css'
import { useState, useEffect } from "react";
import {apiKeyNasa } from '../config'
import Asteroid from './Asteroid';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Asteroids() {

  const [data, setData] = useState();
  
  // ver si se puede agregar un picker para la fecha. con hoy como valor por default
  let date = Date()
  

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-01-30&end_date=2021-01-31&api_key=${apiKeyNasa}`
      );
      const info = await res.json();
      console.log(info)
      setData(info['near_earth_objects']['2021-01-30']);
    }
  }, []);
  console.log(data)
  // data.map((e)=>console.log(e))

  return (
    <div className={Style.constainer}>
      <div>objetos</div>
      <p>Please type a day:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
      <div>hoy
        {data && data.map((e)=> 
          <Asteroid key={e.id} data={e}/>
        )}
      </div>
    </div>
  )
}
