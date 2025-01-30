const menuButton = document.querySelector(".menu-button");
function togglemenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("hide");
}
menuButton.addEventListener("click", togglemenu)
function handleResize() {
    const menu = document.querySelector("nav");
    if (window.innerWidth >= 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    let chosenImage = event.target
	// get the src attribute from that element and 'split' it on the "-"
    let source = chosenImage.src.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let newURL = source[0] + "-full.jpeg";
    console.log(newURL)
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const body= document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", viewerTemplate(newURL));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const close = document.querySelector(".close-viewer");
    close.addEventListener("click", closeViewer);
}
const imageGallery = document.querySelector(".gallery");
imageGallery.addEventListener("click", viewHandler);
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}