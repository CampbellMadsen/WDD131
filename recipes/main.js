import { recipes } from "./recipes.mjs";


function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = [];
    for (let i = 0; i <= tags.length-1; i += 1) {
        html+=(`<h4 class="tag">${tags[i]}</h4>`);
    }
	return html;
}
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i=1; i<=5; i +=1) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		// else output an empty star
        } else {
        html +=`<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}
function recipeTemplate(recipe) {
    return `<div class="recipeDiv">
            <img src="${recipe.image}">
            <div class="recipeInfo">
            <div class="tags">
            ${tagsTemplate(recipe.tags)}</div>
            <h2>${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
    <p class="hide description">${recipe.description}</p>
</div>

</span>
        </div>`
}
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeDiv = document.querySelector('#recipes');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const HTML = recipeList.map(recipeTemplate)
	// Set the HTML strings as the innerHTML of our output element.
    recipeDiv.innerHTML = HTML.join("");
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
  handleResize();
}
init();


function filter(query) {
    const filtered = []
    for (let i=0; i<recipes.length; i++) {
        if (recipes[i].name.toLowerCase().includes(query) == true || recipes[i].description.toLowerCase().includes(query) == true ||
        recipes[i].tags.find((item) => item.toLowerCase().includes(query))) {
            filtered.push(recipes[i])
        }
    }
    console.log(filtered)
	// sort by name
	const sorted = filtered.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return sorted
    console.log(sorted)

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
    const searchInput = document.querySelector("#searchInput");
    let query = searchInput.value;
  // convert the value in the input to lowercase
  query = query.toLowerCase()
  console.log(query)
  // use the filter function to filter our recipes
  const sorted = filter(query)
  // render the filtered list
  renderRecipes(sorted)
  handleResize();
}
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchHandler);
function handleResize() {
    const descriptions = document.querySelectorAll(".description");
    console.log(descriptions)
    descriptions.forEach(description => {
        if (window.innerWidth >= 600) {
            description.classList.remove("hide");
        } else {
            description.classList.add("hide");
        } 
    });
    
}
window.addEventListener("resize", handleResize);
