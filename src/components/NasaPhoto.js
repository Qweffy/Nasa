import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Style from './NasaPhoto.module.css'
import {apiKeyNasa } from '../config'
// const apiKey = process.env.REACT_APP_NASA_KEY;


export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKeyNasa}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div>
      {console.log(photoData)}
      {/* <NavBar /> */}
      <Link className="link" to="">
            back to earth
      </Link>
      <div className="nasaphoto">
        {/* {photoData.media_type === "image" ? (
          <img src={photoData.url} className={Style.photo} alt='nice'/>
        ) : (
          <iframe
            title="Picture of the day"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )} */}

        <div className={Style.container}>
          <img src={photoData.url} className={Style.photo} alt='nice'/>
          <h1 className={Style.title}>{photoData.title}</h1>
          <p className={Style.date}>{photoData.date}</p>
          <p className={Style.explanation}>{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}
