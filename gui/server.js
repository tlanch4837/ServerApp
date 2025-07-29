const express = require('express');
const { Rcon } = require('rcon-client');

const app = express();
app.use(express.json());

let rcon;
let availableCommands = [];

async function connectRcon() {
  rcon = await Rcon.connect({
    host: process.env.RCON_HOST || 'localhost',
    port: parseInt(process.env.RCON_PORT, 10) || 25575,
    password: process.env.RCON_PASSWORD || 'minecraft',
  });
  await loadCommands();
}

async function loadCommands() {
  try {
    const help = await rcon.send('help');
    availableCommands = help
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line.startsWith('/'))
      .map(line => line.split(/\s+/)[0].replace('/', ''));
  } catch (err) {
    console.error('Failed to fetch commands from RCON', err);
  }
}

app.post('/command', async (req, res) => {
  const { command } = req.body;
  if (!command) {
    return res.status(400).json({ error: 'No command provided' });
  }
  try {
    const response = await rcon.send(command);
    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/players', async (req, res) => {
  try {
    const output = await rcon.send('list');
    const match = output.match(/players online:\s*(.*)/i);
    const players = match && match[1] ? match[1].split(/,\s*/) : [];
    res.json({ players });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/commands', (req, res) => {
  res.json({ commands: availableCommands });
});

const port = process.env.APP_PORT || 3000;

connectRcon()
  .then(() => {
    app.listen(port, () => {
      console.log(`GUI server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to RCON server:', err);
  });

module.exports = app;
