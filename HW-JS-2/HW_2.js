let arr=['blue','yellow','red', 'black', 'white', 'gray', 'green', 'orange', 'pink' ,'purple' ];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
////////////////////////////////////////////
let book = {
    title: 'Witcher',
    pageCount: 2000,
    genre: 'Fantasy'
}
let book2 = {
    title: 'Game of thrones',
    pageCount: 864,
    genre: 'Fantasy'
}
let book3 = {
    title: 'Atlas Shrugged',
    pageCount: 1500,
    genre: 'Novel'
}

console.log(book,book2,book3)
///////////////////////////////////////////////////////

let Witcher = {
    title: 'Witcher',
    pageCount: 2000,
    genre: 'Fantasy',
    author: [{name:'Andrzej Sapkowski', age: 75}, ]
}
console.log(Witcher);
let Gameofthrone = {
    title: 'Game of thrones',
    pageCount: 864,
    genre: 'Fantasy',
    author: [{name:'George Raymond Richard Martin', age: 75}]
}
console.log(Gameofthrone);
let AtlasShrugged = {
    title: 'Atlas Shrugged',
    pageCount: 1500,
    genre: 'Novel',
    author: [{name:'Ayn Rand', age: 77}]
}
console.log(AtlasShrugged);
////////////////////////////////////////////////////////
let users = [
    {
        name: "Olexandr",
        username: "sasha",
        password: "sasha-sasha"
    },
    {
        name: "Katerina",
        username: "katya",
        password: "katya1995"
    },
    {
        name: "Iruna",
        username: "ira",
        password: "ira9999"
    },
    {
        name: "Rostislav",
        username: "rostik",
        password: "1234567890"
    },
    {
        name: "Olga",
        username: "olya",
        password: "0987654321"
    },
    {
        name: "Mykhailo",
        username: "misha",
        password: "+380956514958"
    },
    {
        name: "Valentina",
        username: "valya",
        password: "12valya12"
    },
    {
        name: "Roman",
        username: "romanuch",
        password: "Romnanuch99"
    },
    {
        name: "Lubov",
        username: "luba",
        password: "lubava"
    },
    {
        name: "Sergey",
        username: "Serg",
        password: "Seriy1231421312312647587"
    },
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//////////////////////////////////////////////////////////////
let temp = [
    {
        day: "Monday",
        morning: '+1°C',
        afternoon: '+10°C',
        evening: '+10°C',
    },
    {
        day: "Tuesday",
        morning: '+4°C',
        afternoon: '+14°C',
        evening: '+9°C'
    },
    {
        day: "Wednesday",
        morning: '+19°C',
        afternoon: '+19°C',
        evening: '+15°C'
    },
    {
        day: "Thursday",
        morning: '+7°C',
        afternoon: '+12°C',
        evening: '+8°C'
    },
    {
        day: "Friday",
        morning: '+14°C',
        afternoon: '+15°C',
        evening: '+16°C'
    },
    {
        day: "Saturday",
        morning: '+11°C',
        afternoon: '+19°C',
        evening: '+12°C'
    },
    {
        day: "Sunday",
        morning: '+11°C',
        afternoon: '+17°C',
        evening: '+12°C'
    }
];
console.log(temp)
/////////////////////////////////////////////////////////////////

let x = 1;
if(x !== 0){
    console.log(true)
}else {
    console.log(false)
}
let a = 0;
if(a !== 0){
    console.log(true)
}else {
    console.log(false)
}
let y = -3;
if(y !== 0){
    console.log(true)
}else {
    console.log(false)
}
////////////////////////////////////////////////////////////////
let time = Number(prompt("time 0-59"));

if (time > 0 && time <= 15) {
    console.log("First part");
} else if (time > 15 && time <= 30) {
    console.log("Second part");
} else if (time > 30 && time <= 45) {
    console.log("Third part");
} else if (time > 45 && time <= 59) {
    console.log("Fourth part");
}
/////////////////////////////////////////////////////////////////
let day = Number(prompt("day 1-31"));

if (day > 1 && day <= 11) {
    console.log("First decade");
} else if (day > 11 && day <= 20) {
    console.log("Second decade");
} else if (day > 20 && day <= 31) {
    console.log("Third decade");
}

////////////////////////////////////////////////////////////////////
let week = Number(prompt("schedule for the week 1-7 "));

switch (week) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}
///////////////////////////////////////////////////////////

let num1 = 20;
let num2 = 25

if (num1 < num2){
    console.log('num1')
}else if(num1 === num2){
    console.log(num1)
}
///////////////////////////////////////////////////////////////
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super!");
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super!");
}

