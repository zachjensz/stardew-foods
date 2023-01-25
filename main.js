import { recipes, animal } from './foods.js'

recipes.forEach((recipe) => {
  const recipeElement = document.querySelector('#recipe-template').content.cloneNode(true).querySelector('.recipe')
  document.querySelector('#recipes').appendChild(recipeElement)

  recipeElement.querySelector('.name').innerText = recipe.name
  recipeElement.querySelector('.energy').innerText = recipe.energy
  recipeElement.querySelector('.health').innerText = recipe.health
  recipeElement.querySelector('.sell').innerText = recipe.sell

  recipe.ingredients.forEach((ingredient) => {
    const ingredientElement = document.createElement('li')
    ingredientElement.classList.add('ingredient')
    const quantity = ingredient[1]
    ingredientElement.innerText = `${ingredient[0]} ${(quantity > 1) ? `(${quantity})` : ''}`
    recipeElement.querySelector('.ingredients').appendChild(ingredientElement)
  })
  recipe.sources.forEach((source) => {
    const sourceElement = document.createElement('li')
    sourceElement.classList.add('source')
    sourceElement.innerText = `${source[0]} ${source[1]}`
    recipeElement.querySelector('.sources').appendChild(sourceElement)
  })
  if (recipe.stats === undefined) return
  recipe.stats.forEach((stat) => {
    const statElement = document.createElement('li')
    statElement.classList.add('stat')
    const strength = (stat[1]) ? `(+${stat[1]})` : ''
    const duration = `⏲ ${Math.floor(stat[2] / 60)}m ${(stat[2] % 60 > 0) ? `${stat[2] % 60}s` : ''}`
    statElement.innerText = `${stat[0]} ${strength} ${duration}`
    recipeElement.querySelector('.stats').appendChild(statElement)
  })
})

console.log(recipes)
console.log(animal)
