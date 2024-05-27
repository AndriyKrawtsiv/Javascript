for (let i = 0; i < 11; i++) {
    document.write(`<div>Lorem ipsum dolor.</div>`);
}
/////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 11; i++) {
    document.write(`<div style="color: gold" >${i} Lorem ipsum dolor.</div>`);
}
////////////////////////////////////////////////////////////////////////////////////////
let i = 0;
while (i < 21) {
    document.write(`<h1 style="margin: -10px">Lorem ipsum dolor.</h1>`)
    i++;
}
////////////////////////////////////////////////////////////////////////////////////////

let h1 = 0;
while (h1 < 21) {
    document.write(`<h1 style="color: rgb(54,217,38); margin: -10px"> ${h1} Lorem ipsum dolor.</h1>`)
    h1++;
}
//////////////////////////////////////////////////////////////////////////////////////////////
let listOfItems = ["html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js"];

document.write("<ul>");
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);

    document.write("</ul>");}
////////////////////////////////////////////////////////////////////////////////////////////////////
let products = [
    {
        title: "milk",
        price: 22,
        image: "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg"
    },
    {
        title: "juice",
        price: 27,
        image: "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg"
    },
    {
        title: "tomato",
        price: 47,
        image: "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74"
    },
    {
        title: "tea",
        price: 15,
        image: "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png"
    },
];

document.write("<div class=\"products\">");
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img style="width: 50px" src="${product.image}" alt="product image" class="product-image">
        </div>
    `);
}
document.write("</div>");
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write();
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write(`${i + 1} - ${users[i].name}`);
    }
}

document.write();
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`<p>${i + 1} - ${users[i].name}</p>`);
    }
}

document.write();
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write(`<p>${i + 1} - ${users[i].name}, ${users[i].age} y.o.</p>`);
    }
}

