import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);
  if (!photoData) return <div />;
  return (
    <div>
      {console.log(photoData)}
      <NavBar />
      <div className="nasaphoto">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} className="photo" />
        ) : (
          <iframe
            title=""
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}

        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.data}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}
