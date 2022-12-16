const input = document.getElementById("item");
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');


// It must be stored as an object in order to be kept in a local variable (with JSON.parse)
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


// Converted object type data sent to local storage back to string format
localStorage.setItem('items', JSON.stringify(itemsArray));

// Defining the data constant and assigning it to the data variable by converting the items data back into an object
const data = JSON.parse(localStorage.getItem('items'));

// creating item
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    
    // adding mark as a complete 
    li.addEventListener('click', ()=>{
        li.classList.toggle("completed")
    })

    // removing the item
    li.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
        li.remove();
    })

}

// adding item to list
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(input.value!=""){
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(input.value);
        console.log("Adding process complete!")
        input.value = ""
    }
    else {
        console.log("You can not adding process!")
    }
});

// adding local storage to each item
data.forEach(item => {
    liMaker(item);
});

// removing item from list
button.addEventListener('click', function () {
    if(input.value=="")
    {
        localStorage.clear();
        console.log("List cleared!")
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        itemsArray = [];
    }
    else {
        console.log("You cannot clear the list while typing!")
    }
    
});

// adding snackbar for add button
function myFunc() {
    if(input.value!="")
    {
        var y = document.getElementById("add-snackbar");
        y.className = "show";
        setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
    }

}

// adding snackbar for clear button
function myFunction() {
    if(itemsArray.length!=0 && input.value =="") {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

}

