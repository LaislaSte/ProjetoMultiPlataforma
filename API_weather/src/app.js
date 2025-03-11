import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {
  setupWebSocketServer,
  addCurrentWeather,
  listWeather,
  searchFilter,
} from './services';

const app = express();
const PORT = process.env.PORT || 3004;
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.status(200).send({ status: 'ok' }));
app.get('/ready', (req, res) => res.status(200).send({ status: 'ok' }));
app.get('/live', (req, res) => res.status(200).send({ status: 'ok' }));

app.get('/listWeather', async (req, res) => {
  try {
    const weatherData = await listWeather();
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(404).send('Não é possível listar as temperaturas');
  }
});

app.get('/buscar', async (req, res) => {
  try {
    const { search } = req.query;

    function parseDateTime(search) {
      const regex = /^(?:(\d{2}\/\d{2}\/\d{4})\s*)?(?:(\d{2}:\d{2}))?$/;
      const match = search?.match(regex);
      if (!match) {
        res.status(500).send('Erro ao buscar dados!');
      }

      const date = match[1] || null; // Data capturada
      const time = match[2] || null; // Hora capturada
    }

    const response = await searchFilter(date, hour);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar dados');
  }
});

app.post('/addWeather', async (req, res) => {
  try {
    const { humidity, temperature } = req.body;
    if (!humidity || !temperature) {
      return res
        .status(500)
        .json({ message: 'Todos os campos devem ser preenchidos' });
    }
    const response = await addCurrentWeather(humidity, temperature);
    const message = JSON.stringify({
      event: 'update',
      data: response,
    });
    wss.broadcast(message);
    res.status(201).send(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Não é possível cadastrar ao banco.',
    });
  }
});

const server = app.listen(PORT);
const wss = setupWebSocketServer(server);
