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

/* VARIABLES */
const plus = document.querySelectorAll('.fa-plus');
const minus = document.querySelectorAll('.fa-minus');
const remove = document.querySelectorAll('.remove');

let shipping;

/* CART TOTAL */

function cartTotal (){
    const amounts = [];
    for (let i in data){
        amounts.push(data[i]['amount'])
    }
    amounts.some(amount => amount >= 1 ) ? shipping = 19 : shipping = 0;
    let total = 0;
    for (let i in data){
        total += data[i]['amount'] * data[i]['price'];
    }
    document.querySelector('.shipping').lastElementChild.innerText = `$${shipping.toFixed(2)}`;
    document.querySelector('.total').lastElementChild.innerText = `$${(total+shipping).toFixed(2)}`;
}

/* function cartTotal () {
    const amounts = [];
    for (let i in data){
        amounts.push(data[i]['amount'])
    }

    amounts.some(amount => amount >= 1 ) ? shipping = 19 : shipping = 0;
    total = data['Vintage Backbag']['amount'] * data['Vintage Backbag']['price'] + data['Levi Shoes']['amount'] * data['Levi Shoes']['price'];
    document.querySelector('.shipping').lastElementChild.innerText = `$${shipping.toFixed(2)}`
    document.querySelector('.total').lastElementChild.innerText = `$${(shipping + total).toFixed(2)}`
} */


/* DATA */

const data = {
    'Vintage Backbag':{'price':54.99, 'amount':1},
    'Levi Shoes' :{'price':74.99, 'amount':1}
};

/* PLUS */

plus.forEach((a) => a.addEventListener('click', increase));

function increase (){
    let product = this.parentElement.previousElementSibling.firstElementChild.innerText;
    data[product]['amount'] += 1;
    this.previousElementSibling.innerText = data[product]['amount'];
    cartTotal ();
}

/* MINUS */
minus.forEach((a) => a.addEventListener('click', decrease));

function decrease () {
    let product = this.closest('.right').querySelector('.item').firstElementChild.innerText;
    if (data[product]['amount'] > 0){
        data[product]['amount'] -=1;
        this.nextElementSibling.innerText = data[product]['amount'];
        cartTotal ();
    }
}


/* REMOVE */
remove.forEach((a) => a.addEventListener('click', remover));

function remover (){
    let product = this.previousElementSibling.previousElementSibling.firstElementChild.innerText;
    data[product]['amount'] = 0;
    this.closest('.backbag').style.display = 'none';
    cartTotal ();
}
