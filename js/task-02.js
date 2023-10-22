const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Select the ul#ingredients element
const ingredientsList = document.getElementById("ingredients");

// Crearea și inserarea elementelor <li> pentru fiecare ingredient
ingredients.forEach((ingredient) => {
  // Creează un element li
  const listItem = document.createElement("li");

  // Adaugă conținutul text (numele ingredientului)
  listItem.textContent = ingredient;

  // Adaugă clasa "item" la element
  listItem.classList.add("item");

  // Inserează elementul <li> în lista ul#ingredients
  ingredientsList.appendChild(listItem);
});
