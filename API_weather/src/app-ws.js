import { WebSocketServer } from 'ws';

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {
  console.log(`onMessage: ${data}`);
  const payload = {
    event: 'update',
    data: { humidity: '00', temperature: '00' },
  };
  ws.send(JSON.stringify(payload));
}

function onConnection(ws, req) {
  ws.on('message', (data) => onMessage(ws, data));
  ws.on('error', (error) => onError(ws, error));
  console.log(`onConnection`);
}

const setupWebSocketServer = (server) => {
  const wss = new WebSocketServer({ server });

  wss.on('connection', onConnection);

  console.log('App Web Socket Server is running!');

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(data);
      }
    });
  };

  return wss;
};

export default setupWebSocketServer;
