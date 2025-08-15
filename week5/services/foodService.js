const foodItems = [
{ id: 1, name: "Italian", description: "Classic pasta, wood-fired pizzas, and slow-simmered sauces with tomatoes, olive oil, and herbs." },
{ id: 2, name: "Mexican", description: "Vibrant dishes like tacos, enchiladas, and moles featuring corn, chilies, beans, and fresh salsas." },
{ id: 3, name: "Japanese", description: "Refined flavors with sushi, ramen, tempura, and seasonal ingredients emphasizing umami and balance." },
{ id: 4, name: "Thai", description: "Bold sweet-sour-spicy-savory profiles with curries, stir-fries, and aromatic herbs like lemongrass and basil." },
{ id: 7, name: "Mediterranean", description: "Light, wholesome fare with grilled meats, fresh salads, legumes, olive oil, and citrus-forward flavors." }
];

function getAllFood() {
  return foodItems;
}

module.exports = {
  getAllFood,
};