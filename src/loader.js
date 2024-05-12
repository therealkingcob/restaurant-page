

function createPage() {

    const content = document.getElementById("content");

    const firstDiv = document.createElement("div");

    const firstDivContent = document.createTextNode("Learn How To Code");

    firstDiv.appendChild(firstDivContent);

    content.appendChild(firstDiv)

    

}

export default createPage;