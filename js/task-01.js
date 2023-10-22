const categoriesList = document.querySelector("#categories");

// Select all li.item elements
const categoryItems = categoriesList.querySelectorAll("li.item");

// Display the total number of categories
console.log("Number of categories: " + categoryItems.length);

// Iterate through each category item and display the category name and the number of elements
categoryItems.forEach((categoryItem) => {
    const categoryName = categoryItem.querySelector("h2").textContent;
    const categoryElements = categoryItem.querySelectorAll("li").length;
    console.log("Category: " + categoryName);
    console.log("Elements: " + categoryElements);
});