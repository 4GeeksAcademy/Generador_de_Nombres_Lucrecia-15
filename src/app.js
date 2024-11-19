/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Declaración de variables
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  //Declaración de dominio
  for (let i = 0; i < pronoun.length; i++) {
    for (let i2 = 0; i2 < adj.length; i2++) {
      for (let i3 = 0; i3 < noun.length; i3++) {
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li"); // create li element
        li.innerHTML = pronoun[i] + adj[i2] + noun[i3] + ".com";
        li2.innerHTML = pronoun[i] + adj[i2] + noun[i3] + ".net";
        li3.innerHTML = pronoun[i] + adj[i2] + noun[i3] + ".io";
        li4.innerHTML = pronoun[i] + adj[i2] + noun[i3] + ".us"; // assigning text to li using array value.
        let ul = document.getElementById("result");
        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4); // Agrega li a Ul.
      }
    }
  }
};
