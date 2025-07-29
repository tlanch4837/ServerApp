document.addEventListener('DOMContentLoaded', () => {
    loadCommands();
    loadPlayers();

    const search = document.getElementById('itemSearch');
    if (search) {
        search.addEventListener('input', () => searchItems(search.value));
    }

    const sendBtn = document.getElementById('sendButton');
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const currentCommand = sendBtn.dataset.command || '';
            sendCommand(currentCommand);
        });
    }
});

function loadCommands() {
    fetch('/commands')
        .then(r => r.json())
        .then(cmds => {
            const container = document.getElementById('commandButtons');
            container.innerHTML = '';
            cmds.forEach(cmd => {
                const btn = document.createElement('button');
                btn.textContent = cmd;
                btn.addEventListener('click', () => {
                    document.getElementById('sendButton').dataset.command = cmd;
                });
                container.appendChild(btn);
            });
        })
        .catch(err => console.error('Failed to load commands', err));
}

function loadPlayers() {
    fetch('/players')
        .then(r => r.json())
        .then(players => {
            const sel = document.getElementById('playerSelect');
            sel.innerHTML = '';
            players.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p;
                opt.textContent = p;
                sel.appendChild(opt);
            });
        })
        .catch(err => console.error('Failed to load players', err));
}

function searchItems(q) {
    if (!q) {
        document.getElementById('itemSelect').innerHTML = '';
        return;
    }
    fetch('/items?search=' + encodeURIComponent(q))
        .then(r => r.json())
        .then(items => {
            const sel = document.getElementById('itemSelect');
            sel.innerHTML = '';
            items.forEach(item => {
                const opt = document.createElement('option');
                opt.value = item.id || item;
                opt.textContent = item.name || item;
                sel.appendChild(opt);
            });
        })
        .catch(err => console.error('Item search failed', err));
}

function sendCommand(cmd) {
    const param = document.getElementById('paramInput').value;
    const player = document.getElementById('playerSelect').value;
    const item = document.getElementById('itemSelect').value;

    fetch('/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd, param, player, item })
    })
    .then(r => r.text())
    .then(res => console.log(res))
    .catch(err => console.error('Command failed', err));
}
=======
const items = [
  {
    name: 'Stone',
    id: 'minecraft:stone',
    image: 'https://minecraft.wiki/images/Stone_JE2_BE2.png'
  },
  {
    name: 'Oak Planks',
    id: 'minecraft:oak_planks',
    image: 'https://minecraft.wiki/images/Planks_JE3_BE2.png'
  },
  {
    name: 'Diamond',
    id: 'minecraft:diamond',
    image: 'https://minecraft.wiki/images/Diamond_JE3_BE2.png'
  },
  {
    name: 'Iron Ingot',
    id: 'minecraft:iron_ingot',
    image: 'https://minecraft.wiki/images/Iron_Ingot_JE5_BE2.png'
  },
  {
    name: 'Block of Gold',
    id: 'minecraft:gold_block',
    image: 'https://minecraft.wiki/images/Block_of_Gold_JE5_BE2.png'
  }
];

const searchInput = document.getElementById('item-search');
const results = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  results.innerHTML = '';

  if (!query) {
    results.style.display = 'none';
    return;
  }

  const matched = items.filter(item =>
    item.name.toLowerCase().includes(query) || item.id.includes(query)
  );

  matched.forEach(item => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    li.appendChild(img);
    const span = document.createElement('span');
    span.textContent = `${item.name} (${item.id})`;
    li.appendChild(span);
    results.appendChild(li);
  });

  results.style.display = matched.length ? 'block' : 'none';
});
