var a= document.querySelector("h1");
a.textContent="New text content";

var heading =document.createElement("h2");
heading.textContent="created heding";

var divElement= document.getElementById("root");
divElement.appendChild(heading);