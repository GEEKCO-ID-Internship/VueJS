//Soal 1
//buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini
//Jawaban Soal 1
console.log('Jawaban No.1')
const p=2
const l=3
const luas = (p,l) => {
    return p*l
};
console.log('Panjang Persegi Panjang:'+p)
console.log('Lebar Persegi Panjang:'+l) 
console.log('Luas Persegi Panjang:'+luas(p,l))
/*Soal 2
Ubahlah code di bawah ke dalam arrow function dan object literal es6 yang lebih sederhana*/
//Jawaban Soal 2
console.log('Jawaban No.2')

const fungsibaru = (firstname,lastname) => {
    console.log(`${firstname} ${lastname}`)
}
fungsibaru("William","Imoh")

//Soal 3
//Jawaban Soal 3
console.log('Jawaban No.3')

var biodata={
    namaawal:"Muhammad",
    namaakhir:"Iqbal Mubarok",
    alamat:"Jalan Rancamanyar",
    hobi:"Playing football",
}
const {namaawal, namaakhir, alamat, hobi}=biodata
console.log(namaawal, namaakhir, alamat, hobi)

//soal 4
//Jawaban Soal 4
console.log('Jawaban No.4')
let barat= ['Will', 'Chris', 'Sam', 'Holly'];

let timur= ['Gill', 'Brian', 'Noel', 'Maggie'];

let gabung= [...barat, ...timur];
console.log(gabung)


/*soal 5
sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet */
//Jawaban Soal 5
console.log('Jawaban No.5')
const planet = "earth"
const view = "glass"
const after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
console.log(after)