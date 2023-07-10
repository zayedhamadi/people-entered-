



let countEl = document.getElementById("count-el")
count = 0
function add() {
    count += 1
countEl.textContent=count    
}


 function dec() {
     count -= 1
     countEl.textContent = count
 }



let saveEl = document.getElementById("save-el")
function save() {
    variable = count + " - "
    
    saveEl.textContent += variable
    countEl.innerText =count=0
   
}

//the DOM:Document object model: use javascript to modify a website

