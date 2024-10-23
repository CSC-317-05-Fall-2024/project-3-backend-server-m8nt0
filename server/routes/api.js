import express from 'express';
import { createRestaurant, deleteRestaurant, getRestaurants, getRestaurant } from '../data/restaurants.js';



const router = express.Router();

// Route to create a new restaurant
// This is the route that will be used to create a new restaurant
router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body;
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
});

// Route to delete a restaurant
router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    deleteRestaurant(id);
    res.status(204).send();
});

// This is the route for all restaurants
router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);
});

// This is the route that will be used to get a specific restaurant
router.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).send('Restaurant not found');
    }
});

export { router as backendRouter };
