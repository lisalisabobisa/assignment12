

const recipe = {
    
    title: "Guacamole",
    servings: 4,
    arrIngredients: [
        '3 avocados', '1 lime', '1 teaspoon salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'
    ],
    recipeCard(title, servings, arrIngredients) {
        return `${title}<br> 
                ${servings}<br>
                ${arrIngredients}`;

    }
};

