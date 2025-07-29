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
