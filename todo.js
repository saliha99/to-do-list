
const input = document.getElementById("item");
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');


// localStoragede tutulabilmesi için obje olarak saklmamız lazım = JSON.parse ile
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


// localstorage'e gönderilen obje türündeki verileri yeniden string formatına çevirir.
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
// data sabitini tanımlayıp items verisini yeniden nesneye çevirerek değişkene atıyoruz.


const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    li.addEventListener('click', ()=>{
        li.classList.toggle("completed")
    })

    li.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        li.remove();
    })

}

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

data.forEach(item => {
    liMaker(item);
});

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

function myFunc() {
    if(input.value!="")
    {
        var y = document.getElementById("add-snackbar");
        y.className = "show";
        setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
    }

}

function myFunction() {
    if(itemsArray.length!=0 && input.value =="") {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

}

