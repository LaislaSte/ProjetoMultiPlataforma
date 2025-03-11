import { WebSocketServer } from 'ws';

const setupWebSocketServer = (server) => {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws, req) => {
    console.log(`host ${req.headers.host} connected on websocket server`);
  });

  wss.on('message', (data) => {
    const payload = {
      event: 'update',
      data: { humidity: '00', temperature: '00' },
    };
    wss.send(JSON.stringify(payload));
  });

  wss.on('error', (error) => {
    console.log(`Error on websocket server ${error}`);
  });

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(data);
      }
    });
  };

  console.log('App Web Socket Server is running!');

  return wss;
};

export default setupWebSocketServer;
