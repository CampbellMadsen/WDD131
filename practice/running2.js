const ingredientData = ['Pinto Beans', 'Corn', 'Spices', 'Tortillas'];
const portionData = ["1 15oz can", "1 15oz can", "1 tbsp", "8"];
const beans = document.createElement('ul');
function ingredientTemplate(index) {
    return `<li>${portionData[index]} ${ingredientData[index]}</li>`
}
ingredientData.forEach(function(item,index) {
    beans.innerHTML += ingredientTemplate(index)
})
document.body.appendChild(beans);