var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var book0=books[0]
var book1=books[1]
var book2=books[2]
var book3=books[3]


// Lanjutkan code untuk menjalankan function readBooksPromise 
let waktu0=10000
let waktu1=waktu0-book0.timeSpent
let waktu2=waktu1-book1.timeSpent
let waktu3=waktu2-book2.timeSpent
readBooksPromise(waktu0,books[0])
    .then(readBooksPromise(waktu1,books[1]))
    .then(readBooksPromise(waktu2,books[2]))
    .then(readBooksPromise(waktu3,books[3]))
