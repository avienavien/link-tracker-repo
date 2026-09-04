let myLeads = []

const inputEl = document.getElementById("input-el")
const saveEl = document.getElementById("save-el")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-el")
const saveTabEl = document.getElementById("savetab-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

saveTabEl.addEventListener("click", function(){
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //save said item to local storage
    render(myLeads)
    inputEl.focus()
    })
})


function render(leads) {
let listItems = ""
for(let i = 0; i < leads.length; i++){
    listItems += ` 
    <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
    </li>
    ` //template string
}
ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function() {
    console.log("")
    localStorage.clear()
    myLeads = []
    inputEl.value = ""
    render(myLeads)
})
saveEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render(myLeads)
    inputEl.focus()
})



