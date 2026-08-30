const products=[
  {
    "id": 1,
    "name": "ASUS ROG G22CH Gaming Desktop",
    "category": "PC",
    "price": 2499,
    "description": "Compact gaming beast desktop.",
    "image": "images/PCs/pc 1.jfif"
  },
  {
    "id": 2,
    "name": "MSI MEG Aegis Ti5",
    "category": "PC",
    "price": 3799,
    "description": "Extreme gaming tower.",
    "image": "images/PCs/pc 2.jfif"
  },
  {
    "id": 3,
    "name": "Alienware Aurora R16",
    "category": "PC",
    "price": 1999,
    "description": "Futuristic high-performance gaming desktop.",
    "image": "images/PCs/pc 3.jfif"
  },
  {
    "id": 4,
    "name": "HP OMEN 45L",
    "category": "PC",
    "price": 2299,
    "description": "Airflow-focused gaming beast.",
    "image": "images/PCs/pc 4.jfif"
  },
  {
    "id": 5,
    "name": "Lenovo Legion Tower 7i",
    "category": "PC",
    "price": 2199,
    "description": "Serious desktop gaming power.",
    "image": "images/PCs/pc 5.jfif"
  },
  {
    "id": 6,
    "name": "ASUS ROG Phone 9 Pro",
    "category": "Mobile",
    "price": 1199,
    "description": "Flagship dedicated gaming phone.",
    "image": "images/Phones/Phone 1.jfif"
  },
  {
    "id": 7,
    "name": "nubia REDMAGIC 10 Pro",
    "category": "Mobile",
    "price": 799,
    "description": "Performance-focused gaming smartphone.",
    "image": "images/Phones/Phone 2.jfif"
  },
  {
    "id": 8,
    "name": "Lenovo Legion Phone Duel 2",
    "category": "Mobile",
    "price": 699,
    "description": "Landscape gaming controls and performance.",
    "image": "images/Phones/Phone 3.jfif"
  },
  {
    "id": 9,
    "name": "Samsung Galaxy S25 Ultra",
    "category": "Mobile",
    "price": 1299,
    "description": "Premium flagship gaming performance.",
    "image": "images/Phones/Phone 4.jfif"
  },
  {
    "id": 10,
    "name": "ASUS ROG Zephyrus G16",
    "category": "Laptop",
    "price": 1799,
    "description": "Slim but powerful gaming laptop.",
    "image": "images/Laptops/Laptop 1.jfif"
  },
  {
    "id": 11,
    "name": "Lenovo Legion Pro 7i",
    "category": "Laptop",
    "price": 2299,
    "description": "Large performance gaming laptop.",
    "image": "images/Laptops/Laptop 2.jfif"
  },
  {
    "id": 12,
    "name": "MSI Titan 18 HX",
    "category": "Laptop",
    "price": 4999,
    "description": "Desktop-class gaming powerhouse.",
    "image": "images/Laptops/Laptop 3.jfif"
  },
  {
    "id": 13,
    "name": "Razer Blade 18",
    "category": "Laptop",
    "price": 3299,
    "description": "Premium aluminum gaming laptop.",
    "image": "images/Laptops/Laptop 4.jfif"
  },
  {
    "id": 14,
    "name": "PlayStation 5 Slim",
    "category": "Console",
    "price": 499,
    "description": "Next-generation PlayStation console.",
    "image": "images/Consoles/Console 1.jfif"
  },
  {
    "id": 15,
    "name": "Xbox Series X",
    "category": "Console",
    "price": 499,
    "description": "Powerful current-generation Xbox.",
    "image": "images/Consoles/Console 2.jfif"
  },
  {
    "id": 16,
    "name": "Nintendo Switch OLED",
    "category": "Console",
    "price": 349,
    "description": "Portable and TV gaming.",
    "image": "images/Consoles/Console 3.jfif"
  },
  {
    "id": 17,
    "name": "Steam Deck OLED",
    "category": "Console",
    "price": 549,
    "description": "Portable PC gaming.",
    "image": "images/Consoles/Console 4.jfif"
  },
  {
    "id": 18,
    "name": "Logitech G Pro X 2",
    "category": "Accessory",
    "price": 249,
    "description": "Wireless competitive gaming headset.",
    "image": "images/Accessories/Accessory 1.jfif"
  },
  {
    "id": 19,
    "name": "SteelSeries Apex Pro",
    "category": "Accessory",
    "price": 199,
    "description": "Premium mechanical keyboard.",
    "image": "images/Accessories/Accessory 2.jfif"
  },
  {
    "id": 20,
    "name": "Razer Basilisk V3 Pro",
    "category": "Accessory",
    "price": 159,
    "description": "Wireless gaming mouse.",
    "image": "images/Accessories/Accessory 3.jfif"
  },
  {
    "id": 21,
    "name": "Samsung Odyssey OLED G8",
    "category": "Accessory",
    "price": 999,
    "description": "High-end OLED gaming monitor.",
    "image": "images/Accessories/Accessory 4.jfif"
  },
  {
    "id": 22,
    "name": "Secretlab TITAN Evo",
    "category": "Accessory",
    "price": 549,
    "description": "Premium gaming chair.",
    "image": "images/Accessories/Accessory 5.jfif"
  },
  {
    "id": 23,
    "name": "Grand Theft Auto V",
    "category": "Game",
    "price": 29.99,
    "description": "Open-world crime action.",
    "image": "images/Games/Game 1.jfif"
  },
  {
    "id": 24,
    "name": "Red Dead Redemption 2",
    "category": "Game",
    "price": 59.99,
    "description": "Epic open-world western adventure.",
    "image": "images/Games/Game 2.jfif"
  },
  {
    "id": 25,
    "name": "Cyberpunk 2077",
    "category": "Game",
    "price": 59.99,
    "description": "Futuristic open-world RPG.",
    "image": "images/Games/Game 3.jfif"
  },
  {
    "id": 26,
    "name": "Elden Ring",
    "category": "Game",
    "price": 59.99,
    "description": "Fantasy action RPG.",
    "image": "images/Games/Game 4.jfif"
  },
  {
    "id": 27,
    "name": "Minecraft",
    "category": "Game",
    "price": 29.99,
    "description": "Build and explore endless worlds.",
    "image": "images/Games/Game 5.jfif"
  },
  {
    "id": 28,
    "name": "Forza Horizon 5",
    "category": "Game",
    "price": 59.99,
    "description": "Open-world racing.",
    "image": "images/Games/Game 6.jfif"
  },
  {
    "id": 29,
    "name": "DOOM: The Dark Ages",
    "category": "Game",
    "price": 69.99,
    "description": "Fast demon-slaying action.",
    "image": "images/Games/Game 7.jfif"
  },
  {
    "id": 30,
    "name": "God of War Ragnar\u00f6k",
    "category": "Game",
    "price": 59.99,
    "description": "Norse action adventure.",
    "image": "images/Games/Game 8.jfif"
  },
  {
    "id": 31,
    "name": "The Last of Us Part I",
    "category": "Game",
    "price": 59.99,
    "description": "Story-driven survival adventure.",
    "image": "images/Games/Game 9.jfif"
  },
  {
    "id": 32,
    "name": "Hogwarts Legacy",
    "category": "Game",
    "price": 59.99,
    "description": "Open-world wizarding adventure.",
    "image": "images/Games/Game 10.jfif"
  },
  {
    "id": 33,
    "name": "Baldur's Gate 3",
    "category": "Game",
    "price": 59.99,
    "description": "Choice-driven fantasy RPG.",
    "image": "images/Games/Game 11.jfif"
  },
  {
    "id": 34,
    "name": "Monster Hunter Wilds",
    "category": "Game",
    "price": 69.99,
    "description": "Hunt gigantic creatures.",
    "image": "images/Games/Game 12.jfif"
  },
  {
    "id": 35,
    "name": "Black Myth: Wukong",
    "category": "Game",
    "price": 59.99,
    "description": "Action RPG inspired by mythology.",
    "image": "images/Games/Game 13.jfif"
  },
  {
    "id": 36,
    "name": "Marvel's Spider-Man 2",
    "category": "Game",
    "price": 59.99,
    "description": "Superhero action adventure.",
    "image": "images/Games/Game 14.jfif"
  }
];