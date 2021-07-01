window.onload = function(){

displayGame()

}

const displayGame = function () {

let bingoContainer = document.querySelector("body")

for (let field = 1; field <= 76; field++) {

  let newField = document.createElement("div")
  newField.innerText = field
  newField.classList.add("eachField")

  bingoContainer.appendChild(newField)
}

}