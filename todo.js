
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
}

form.addEventListener('submit', function (e) {
    e.preventDefault();



    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
});

data.forEach(item => {
    liMaker(item);
});

button.addEventListener('click', function () {
localStorage.clear();
while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}
itemsArray = [];
});
