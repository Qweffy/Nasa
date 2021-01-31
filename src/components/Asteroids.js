import React from 'react'
import Style from './Asteroids.module.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {apiKeyNasa } from '../config'
import Asteroid from './Asteroid';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';

export default function Asteroids() {

  const [data, setData] = useState();
  const [day, setDay] = useState();
  
  // ver si se puede agregar un picker para la fecha. con hoy como valor por default
  // setDate(Date())
  

  // useEffect(() => {
  //   fetchPhoto();
  //   async function fetchPhoto() {
  //     const res = await fetch(
  //       `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-01-30&end_date=2021-01-31&api_key=${apiKeyNasa}`
  //     );
  //     const info = await res.json();
  //     console.log(info)
  //     setData(info['near_earth_objects']['2021-01-30']);
  //   }
  // }, []);

  function handleDayClick(day){
    let options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let dayFormat = day.toLocaleDateString('et', options).split('.').reverse().join('-');
    setDay(dayFormat)

    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dayFormat}&end_date=${dayFormat}&api_key=${apiKeyNasa}`
      );
      const info = await res.json();
      setData(info['near_earth_objects'][dayFormat]);
    }
  }

  return (
    <div className={Style.constainer}>
      <Link className="link" to="">
            back to earth
      </Link>
      <p>Please pick a day:</p>
      <DayPicker onDayClick={handleDayClick} />
      <div> Lista de asteroides que pasaran cerca de la tierra el {day} </div>
      <div>
        {data && data.map((e)=> 
          <Asteroid key={e.id} data={e}/>
        )}
      </div>
    </div>
  )
}
