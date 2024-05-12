import createPage from './loader'

const homeButton = document.getElementById("home");
const scheduleButton = document.getElementById("schedule");
const contactButton = document.getElementById("contact");

createPage();

homeButton.addEventListener("click");
scheduleButton.addEventListener("click");
contactButton.addEventListener("click");

