

function createPage() {

    const content = document.getElementById("content");

    const firstDiv = document.createElement("div");

    const firstDivContent = document.createTextNode("Learn How To Code");

    firstDiv.appendChild(firstDivContent);

    content.appendChild(firstDiv);

    const secondDiv = document.createElement("div");

    const secondDivContent = document.createTextNode("Learn the languages of the web");

    secondDiv.appendChild(secondDivContent);
    
    content.appendChild(secondDiv);

    const thirdDiv = document.createElement("div");

    const thirdDivContent = document.createTextNode("HTML   CSS   JS");

    thirdDiv.appendChild(thirdDivContent);

    content.appendChild(thirdDiv);

}

export default createPage;