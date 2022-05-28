function mailValidator(){
    const mail = document.getElementById("email").value;

    const pattern1 = /[.][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]$/;
    const pattern2 = /[.][a-zA-Z0-9][a-zA-Z0-9]$/;

    if ((pattern1.test(mail) || pattern2.test(mail)) && (mail.indexOf('@', 1) != -1) && (mail.indexOf('@') == mail.lastIndexOf('@')) && (!/[@][.]/.test(mail)) && (!mail.includes(' '))) {
        alert("Your e-mail address is valid!");
    } else {
        alert("Your e-mail address is not valid!");
    }
}


const data = {
    'Vintage Backbag': {'price':54.99, 'amount':1}, 
    'Levi Shoes': {'price':74.99, 'amount':1}
};

let total;
let shipping;

let plus = document.querySelectorAll('.fa-plus');
let minus = document.querySelectorAll('.fa-minus');
let removeButton = document.querySelectorAll('.remove');

/* THIS FUNCTION CALCULATES SHIPPING AND TOTAL AMOUNTS */

function cartTotal () {
    data['Vintage Backbag']['amount'] || data['Levi Shoes']['amount'] ? shipping = 19 : shipping = 0;
    total = data['Vintage Backbag']['amount'] * data['Vintage Backbag']['price'] + data['Levi Shoes']['amount'] * data['Levi Shoes']['price'];
    document.querySelector('.shipping').lastElementChild.innerText = `$${shipping.toFixed(2)}`
    document.querySelector('.total').lastElementChild.innerText = `$${(shipping + total).toFixed(2)}`
}

/* PLUS */
plus.forEach((item) => 
    item.addEventListener('click', increase
));

function increase (item){
    let product = this.parentElement.previousElementSibling.firstElementChild.innerText;
    data[product]['amount'] += 1;
    this.nextElementSibling.innerText = data[product]['amount'].toString();
    cartTotal ();
};

/* MINUS */

minus.forEach((item) => 
    item.addEventListener('click', decrease)
    );

function decrease (item){
    let product = this.parentElement.previousElementSibling.firstElementChild.innerText;
    if (data[product]['amount'] > 0) {
        data[product]['amount'] -= 1;
        this.previousElementSibling.innerText = data[product]['amount'].toString();
    }
    cartTotal ();
};

/* REMOVE BUTTON */

removeButton.forEach((item) => item.addEventListener('click', remover))
    
function remover (item) {
    let product = this.previousElementSibling.previousElementSibling.firstElementChild.innerText;
    data[product]['amount'] = 0;
    cartTotal ();
    this.parentElement.parentElement.style.display = 'none';
}
