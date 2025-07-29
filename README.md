# ServerApp

A minimal skeleton for a NeoForge Minecraft server with a web-based GUI.

## Prerequisites

- **Enable RCON** in your `server.properties` so external tools can communicate with the server. Set `enable-rcon=true`, specify `rcon.port` and `rcon.password`.
- **Node.js** is required for the planned GUI service. Install it from [nodejs.org](https://nodejs.org/).
- **Environment variables** (optional) used by the GUI:
  - `RCON_HOST` – hostname of the running server (default `localhost`).
  - `RCON_PORT` – RCON port number.
  - `RCON_PASSWORD` – password configured in `server.properties`.

## Starting the NeoForge server

Launch the server on Windows using `run.bat`:

```bat
run.bat
```

The script passes necessary JVM arguments and starts NeoForge. Edit `user_jvm_args.txt` for custom options.

## Planned GUI interaction

The `gui/` directory holds placeholder files for a future web interface. When implemented, `gui/server.js` will read the environment variables above, connect via RCON, and expose a web console.

To start the GUI (once developed):

```bash
node gui/server.js
```

It will forward console commands and show output from the running server.

## License

This project is available under the MIT License. See [LICENSE](LICENSE) for details.
