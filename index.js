let myLeads = []

const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-el")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
localStorage.clear()

saveEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()
    inputEl.focus()
})

function renderLeads() {
let listItems = ""
for(let i = 0; i < myLeads.length; i++){
    listItems += ` 
    <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
    </li>
    ` //template string
}
ulEl.innerHTML = listItems
}

