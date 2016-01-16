"use strict";

console.log("well shit i forgot how to code")

Array.prototype.myRandom = function () {
    return this[(Math.floor(Math.random()*(this.length)))];
}

var theories = ["Feminism",
                "Marxism",
                "Psycohanalysis",
                "Biographicalism",
                "Historicalism",
                "Structuralism",
                "Deconstruction",
                "LGBTQ + general sexuality"]

var works = ["Slaughterhouse Five",
             "The Iliad",
             "The Odyssey",
             "Cat's Cradle",
             "Lolita",
             "Hamlet"]

var theory, work;

var theoryElement = document.getElementById("theory");
var workElement = document.getElementById("work");
var rerollButton = document.getElementById("reroll");

var roll = function () {
    theory = theories.myRandom();
    work = works.myRandom();
    theoryElement.innerHTML = theory;
    workElement.innerHTML = work;
}

rerollButton.addEventListener("click", roll);
