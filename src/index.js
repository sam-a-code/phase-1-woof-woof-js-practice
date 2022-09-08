fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then(data => data.forEach((pup) => {
    renderDogs(pup)
}))


const dogInfo = document.querySelector("#dog-info")
const dogImage = document.createElement("img")
const dogName = document.createElement("h2")
const dogButton = document.createElement("button")
const clapCount = document.querySelector("#clap-count")

dogInfo.append(dogImage, dogName, dogButton)

function renderDogs(pup){
    const dogBar = document.querySelector("#dog-bar")
    const spanElement = document.createElement("span")
    spanElement.textContent = pup.name
    dogBar.append(spanElement)

    spanElement.addEventListener("click", () => {
        dogImage.src = pup.image;
        dogName.textContent = pup.name;
        clapCount.textContent = pup.claps
        if(pup.isGoodDog === true){
            dogButton.textContent = "Good Dog!"
        } else {
            dogButton.textContent = "Bad Dog!"
        }
    })
    
    // spanElement.addEventListener("click", () => {
    //     dogImage.src = pup.image
    //     dogName.textContent = pup.name
    //     dogButton.textContent = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"

    }  

  function handleClick(){
    dogButton.addEventListener("click", () => {
        if(dogButton.textContent === "Good Dog!") {
            dogButton.textContent = "Bad Dog!"
        } else {
            dogButton.textContent = "Good Dog!"
        }
    })
  }
  
  function handleForm(){
    const form = document.querySelector("#form")
    form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newClaps = e.target["claps"].value;
    clapCount.textContent = parseInt(clapCount.textContent) + parseInt(newClaps)

    })
}


  handleClick()
  handleForm()
