import React, { useEffect, useState } from 'react';
import { Planet, MarsWeather } from '../types';

const PLANETS_URL = 'https://api.le-systeme-solaire.net/rest/bodies?filter%5BisPlanet%5D=1';
const MARS_WEATHER_URL = 'https://api.maas2.apollorion.com/';

const PlanetExplorer: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [marsWeather, setMarsWeather] = useState<MarsWeather | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(PLANETS_URL)
      .then(res => res.json())
      .then(data => setPlanets(data.bodies))
      .catch(err => console.error(err));
  }, []);

  const selectPlanet = (planet: Planet) => {
    setSelectedPlanet(planet);
    if (planet.englishName.toLowerCase() === 'mars') {
      setLoading(true);
      fetch(MARS_WEATHER_URL)
        .then(res => res.json())
        .then(data => {
          setMarsWeather(data); // data is the latest weather
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setMarsWeather(null);
    }
  };

  return (
    <div>
      <ul>
        {planets.map(p => (
          <li key={p.id} onClick={() => selectPlanet(p)} style={{ cursor: 'pointer' }}>
            {p.englishName}
          </li>
        ))}
      </ul>
      {selectedPlanet && (
        <div>
          <h2>{selectedPlanet.englishName}</h2>
          <p>Gravity: {selectedPlanet.gravity} m/s²</p>
          <p>Mean Radius: {selectedPlanet.meanRadius} km</p>
          <p>Moons: {selectedPlanet.moons ? selectedPlanet.moons.length : 0}</p>
          {selectedPlanet.englishName.toLowerCase() === 'mars' && (
            <div>
              <h3>Latest Mars Weather</h3>
              {loading && <p>Loading weather...</p>}
              {marsWeather && (
                <div>
                  <p>Sol: {marsWeather.sol}</p>
                  <p>Date: {marsWeather.terrestrial_date}</p>
                  <p>Min Temp: {marsWeather.min_temp} °C</p>
                  <p>Max Temp: {marsWeather.max_temp} °C</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlanetExplorer;
