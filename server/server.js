// Add your server code here.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { backendRouter } from './routes/api.js';
import { getRestaurants } from './data/restaurants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;  // Change to 3001 becuase on my end a different port was assigned with the default port.

// parse urls, ex. like images for the new resturant
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// deafult initialization to allow static files to appear on the client side.
app.use(express.static('public'));

// The EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// Routes the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the attractions page
app.get('/attractions', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// The ejs to render the page
app.get('/restaurants', (req, res) => {
  const restaurants = getRestaurants();
  res.render('restaurants', { restaurants });
});

app.get('/restaurants/:id', (req, res) => {
  const restaurant = getRestaurants().find(r => r.id === parseInt(req.params.id));
  if (restaurant) {
    res.render('restaurant-details', restaurant);
  } else {
    res.status(404).send('Restaurant not found');
  }
});

// The ejs to render the apge
app.get('/new-restaurant', (req, res) => {
  res.render('new-restaurant-form');
});

app.use('/api', backendRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
