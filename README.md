ServerApp
A minimal skeleton for a NeoForge Minecraft server with a web‑based GUI, including HTML console buttons access and a searchable item dropdown with sprites.

Prerequisites
Enable RCON in your server.properties so external tools can communicate with the server. Set:

enable-rcon=true

rcon.port=<port>

rcon.password=<password>

Node.js is required for the GUI service. Install from nodejs.org.

Environment variables (optional) used by the GUI:

RCON_HOST – hostname of the running server (default localhost)

RCON_PORT – RCON port number

RCON_PASSWORD – password configured in server.properties

Starting the NeoForge server
Launch the server on Windows using:

bat
Copy
Edit
run.bat
The script passes necessary JVM arguments and starts NeoForge. Edit user_jvm_args.txt for custom options.

Planned / Current GUI features
Web console with HTML button controls for common actions.

Search bar for Minecraft items with inline item sprites in the dropdown.

RCON bridge to forward console commands and display output.

The gui/ directory holds placeholder files for the web interface. When implemented, gui/server.js will read the environment variables above, connect via RCON, and expose a web console.

To start the GUI (once developed):

bash
Copy
Edit
node gui/server.js
It will forward console commands and show output from the running server.

Item images
Item sprites used in the search dropdown are linked directly from minecraft.wiki. According to the site, textures are available under the Creative Commons Attribution‑NonCommercial‑ShareAlike 3.0 License (CC BY‑NC‑SA 3.0). Ensure compliance with that license when distributing this project.

License
This project is available under the MIT License. See LICENSE for details.