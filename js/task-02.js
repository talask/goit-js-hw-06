const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArr = ingredients.map(elem => {

  const elLi = document.createElement('li');
  elLi.textContent = elem;
  elLi.classList.add('item');
 
  return elLi;
});

const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...newArr);