// Fill this in
let restaurantData = [
    {
        id: 0,
        name: "Restaurant 1",
        phone: "123-456-7890",
        photo: "/images/res1.webp",
        address: "Address of Restaurant 1."
    },
    {
        id: 1,
        name: "Restaurant 2",
        phone: "234-567-8901",
        photo: "/images/res2.webp",
        address: "Address of Restaurant 2."
    },
    {
        id: 2,
        name: "Restaurant 3",
        phone: "234-567-8901",
        photo: "/images/res3.webp",
        address: "Address of Restaurant 3."
    },
    {
        id: 3,
        name: "Restaurant 4",
        phone: "234-567-8901",
        photo: "/images/res4.webp",
        address: "Address of Restaurant 4."
    },
    {
        id: 4,
        name: "Restaurant 5",
        phone: "234-567-8901",
        photo: "/images/res5.webp",
        address: "Address of Restaurant 5."
    },
    {
        id: 5,
        name: "Restaurant 6",
        phone: "234-567-8901",
        photo: "/images/res6.webp",
        address: "Address of Restaurant 6."
    }   
];

// last id
let lastId = restaurantData.length - 1;

// get next id
const getNextId = () => {
    lastId += 1;
    return lastId;
}

// get all restaurants
const getRestaurants = () => {
    return restaurantData;
};

// get a specific restaurant
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === parseInt(id));
};

// create a new restaurant
const createRestaurant = (newRestaurant) => {
    const id = getNextId();
    const restaurantWithId = { 
        ...newRestaurant, 
        id,
        photo: newRestaurant.photo || '/images/default-restaurant.jpg'
    };
    restaurantData.push(restaurantWithId);
    return restaurantWithId;
};

// delete a restaurant
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== parseInt(id));
};

export { restaurantData, getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
