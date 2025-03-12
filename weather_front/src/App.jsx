import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import search from './assets/search.svg';
import sun from './assets/sun.svg';
import rain from './assets/rain.svg';
import sun_big_cloud from './assets/sun-big-cloud.svg';
import sun_small_cloud from './assets/sun-small-cloud.svg';
import cloud from './assets/cloud.svg';
import CardVisualizator from './components/CardVisualizator';

export default function ViewWeather() {
  const [historic, setHistoric] = useState([
    {
      date: 'currentDate',
      hour: 'currentHour',
      humidity: 'humidity',
      temperature: 'temperature',
      icon: sun,
    },
    {
      date: 'currentDate',
      hour: 'currentHour',
      humidity: 'humidity',
      temperature: 'temperature',
      icon: rain,
    },
    {
      date: 'currentDate',
      hour: 'currentHour',
      humidity: 'humidity',
      temperature: 'temperature',
      icon: sun_big_cloud,
    },
    {
      date: 'currentDate',
      hour: 'currentHour',
      humidity: 'humidity',
      temperature: 'temperature',
      icon: sun_big_cloud,
    },
    {
      date: 'currentDate',
      hour: 'currentHour',
      humidity: 'humidity',
      temperature: 'temperature',
      icon: sun_big_cloud,
    },
    {
      date: 'currentDate',
      hour: 'currentHour',
      humidity: 'humidity',
      temperature: 'temperature',
      icon: sun_big_cloud,
    },
  ]);

  const handleSearch = async () => {
    const response = await axios.get(
      `http://localhost:3004/buscar?date=${dataSearch}&hour=${hourSearch}`
    );
    setHistoric(response.data);
  };

  useEffect(() => {
    const connectionWs = () => {
      const ws = new WebSocket('ws://localhost:3004');
      ws.onmessage = (event) => {
        try {
          const { event: eventType } = JSON.parse(event.data);
          if (eventType === 'update') {
            // fetchData();
          }
        } catch (err) {
          console.error('Erro ao processar mensagem real time:', err);
        }
      };
      return () => {
        ws.close();
      };
    };

    connectionWs();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Visualizador de dados - Humidade e Temperatura esp8266</h1>

        <div className="container_content">
          <div className="container__history">
            <div className="container__history-data">
              <h2>Histórico</h2>
              <form className="container__history-search">
                <input
                  placeholder=" Buscar por data ou hora"
                  onKeyDown={handleSearch}
                />
                <img src={search} alt="" onClick={handleSearch} />
              </form>
              {historic?.map((item, key) => (
                <CardVisualizator item={item} key={key} />
              ))}
            </div>
          </div>

          <div className="container__realtime">
            <div className="container__realtime-">
              <h2>Tempo real</h2>
              {historic?.map((item, key) => (
                <CardVisualizator item={item} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
