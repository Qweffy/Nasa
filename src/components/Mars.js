import React from "react";
import { useState, useEffect } from "react";
import MARSCss from "./Mars.module.css";
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Mars() {
  const [marsWeather, setMarsWeather] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
      );
      const data = await res.json();
      setMarsWeather(data);
      console.log(marsWeather);
    }
  }, []);

  return (
    <div className={MARSCss.background}>
      <main className={MARSCss.marscurrentweather}>
        <h1 className={MARSCss.maintitle}>
          Latest weather at Elysium Planitia
        </h1>

        <div className={MARSCss.date}>
          <h2 className={`${MARSCss.sectiontitle} ${MARSCss.sectiontitledate}`}>
            Sol
            <span data-current-sol>375</span>
          </h2>
          <p className={MARSCss.dateday} data-current-date></p>
        </div>

        <div className={MARSCss.temp}>
          <h2 className={MARSCss.sectiontitle}>Temperature</h2>
          <p className={MARSCss.reading}>
            High:
            <span data-current-temp-high></span>°<span data-temp-unit></span>
          </p>
          <p className={MARSCss.reading}>
            Low:
            <span data-current-temp-low></span>°<span data-temp-unit></span>
          </p>
        </div>

        <div className={MARSCss.wind}>
          <h2 className={MARSCss.sectiontitle}>Wind</h2>
          <p className={MARSCss.reading}>
            <span data-wind-speed></span>
            <span data-speed-unit></span>
          </p>

          <div className={MARSCss.wind__direction}>
            <p className={MARSCss.sronly} data-wind-direction-text></p>

            <div
              className={MARSCss.wind__arrow}
              data-wind-direction-arrow
            ></div>
          </div>
        </div>

        <div className={MARSCss.info}>
          <p>
            InSight is taking daily weather measurements (temperature, wind,
            pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
            plain near Mars’ equator.
          </p>
          <p>
            This is only a part of InSight’s mission.{" "}
            <a href="https://mars.nasa.gov/insight/mission/overview/">
              Click here
            </a>{" "}
            to find out more.
          </p>
        </div>

        <div className={MARSCss.unit}>
          <label for="cel">°C</label>
          <input type="radio" id="cel" name="unit" checked />
          <button className={MARSCss.unit__toggle} data-unit-toggle></button>
          <label for="fah">°F</label>
          <input type="radio" id="fah" name="unit" />
        </div>
      </main>

      <div className={MARSCss.previous_weather}>
        <button for="weather-toggle" className={MARSCss.show_previous_weather}>
          <span>&#8593;</span>{" "}
          <span className={MARSCss.sronly}>Show previous weather</span>
        </button>

        <h2
          className={`${MARSCss.maintitle} ${MARSCss.previous_weather__title}`}
        >
          Previous 7 days
        </h2>

        <div className={MARSCss.previous_days} data-previous-sols></div>
      </div>

      <template data-previous-sol-template>
        <div className={MARSCss.previous_days}>
          <h3 className="previous-day__sol">
            Sol
            <span data-sol></span>
          </h3>
          <p className={MARSCss.previous_day__date} data-date></p>
          <p className="previous-day__temp">
            High:
            <span data-temp-high></span>°<span data-temp-unit></span>
          </p>
          <p className="previous-day__temp">
            Low:
            <span data-temp-low></span>°<span data-temp-unit></span>
          </p>
          <button
            className={MARSCss.previous_day__more_info}
            data-select-button
          >
            more info
          </button>
        </div>
      </template>
    </div>
  );
}
