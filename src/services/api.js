const baseURL = "https://www.themealdb.com/api/json/v1/1";

// Categories
export const getCategory = async () => {
  const res = await fetch(`${baseURL}/categories.php`);
  return res.json();
};

// Meals By Category
export const getMealCategory = async (category) => {
  const res = await fetch(`${baseURL}/filter.php?c=${category}`);
  return res.json();
};

// Meal By ID
export const getMealById = async (id) => {
  const res = await fetch(`${baseURL}/lookup.php?i=${id}`);
  return res.json();
};

// Search
export const searchMealByName = async (name) => {
  const res = await fetch(`${baseURL}/search.php?s=${name}`);
  return res.json();
};

// Areas
export const getAreas = async () => {
  const res = await fetch(`${baseURL}/list.php?a=list`);
  return res.json();
};

// Meals By Area
export const getMealsByArea = async (area) => {
  const res = await fetch(`${baseURL}/filter.php?a=${area}`);
  return res.json();
};
