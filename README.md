# ServerApp

ServerApp is a minimal skeleton for running a [NeoForge](https://neoforged.net/) Minecraft server together with a simple web interface. The GUI communicates with the server over RCON so you can send commands from your browser and search for items with images.

## Prerequisites

1. **Enable RCON** in your `server.properties` so external tools can talk to the server. Set:
   ```
   enable-rcon=true
   rcon.port=<port>
   rcon.password=<password>
   ```
2. **Install Node.js** from [nodejs.org](https://nodejs.org/) – required for the GUI service.

The GUI also respects the following optional environment variables:

- `RCON_HOST` – hostname of the server (default `localhost`)
- `RCON_PORT` – RCON port number
- `RCON_PASSWORD` – password from `server.properties`
- `APP_PORT` – port for the web interface (default `3000`)

## Starting the NeoForge server

On **Windows 11** you can launch the server with:

```bat
run.bat
```

Double click `run.bat` or execute it from Command Prompt/PowerShell. The script
passes the necessary JVM arguments. Edit `user_jvm_args.txt` for custom options.

## Starting the GUI

1. Open a new **Windows Terminal** or **PowerShell** window and change to the
   `gui` directory:
   ```powershell
   cd gui
   ```
2. Install dependencies (only required once):
   ```bash
   npm install
   ```
3. Start the web server:
   ```bash
   npm start
   ```
   or run `node server.js` directly.

4. Open your browser and navigate to `http://localhost:3000` (or whatever
   `APP_PORT` you configured). The interface will display command buttons and
   drop-down selectors.

The server fetches the list of available commands over RCON and renders a button
for each one so you can trigger them with a click.

## Example button commands

The exact buttons depend on what commands your server exposes, but typical useful commands include:

- `say <message>` – broadcast a chat message
- `stop` – stop the server safely
- `save-all` – force a world save
- `weather clear` / `weather rain`
- `time set day`
- `gamemode creative <player>`
- `gamemode survival <player>`
- `give <player> <item>`
- `tp <player> <target>`
- `kick <player>`
- `ban <player>` and `pardon <player>`
- `whitelist add <player>` / `whitelist remove <player>`
- `op <player>` / `deop <player>`
- `difficulty peaceful` / `difficulty hard`
- `effect give <player> minecraft:night_vision 30`
- `kill <player>`
- `locate biome <biome>`
- `setblock <x> <y> <z> minecraft:stone`
- `summon minecraft:zombie`
- `title <player> title {"text":"Hello"}`
- `xp add <player> 10 levels`
- `clear <player>`
- `defaultgamemode survival`
- `seed`

Commands can be combined with the player and item selectors where appropriate. The search field shows item sprites sourced from minecraft.wiki for convenience.

## Item images

Item sprites used in the search dropdown are linked directly from <https://minecraft.wiki>. According to the site, textures are available under the Creative Commons Attribution‑NonCommercial‑ShareAlike 3.0 License (CC BY‑NC‑SA 3.0). Ensure compliance with that license when distributing this project.

## License

This project is available under the MIT License. See [LICENSE](LICENSE) for details.
