let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLead.push(inputEl.value)
    //ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    renderLead()
    inputEl.value = ""
})

// function renderLead() {
//     let listItems = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML += listItems
// }

function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLead.length; i++) {
        listItems += `
        <li> 
        <a target='_blank' href='${myLead[i]}'>
        ${myLead[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

