//soal 1
//jawaban soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort()
for(i=0;i<=5;i++){
console.log(daftarHewan[i]);
}
//soal 2
//jawaban soal 2
function introduce () {
   console.log('Nama saya ', data.name,', umur saya ', data.age,' tahun, alamat saya di ', data.address,' dan saya punya hobby yaitu ',data.hobby)
};

var data = { name : "Risang" , 
            age : 29 , 
            address : "Bumi Panyileukan" , 
            hobby : "Berkebun" 
            };
 
var perkenalan = introduce(data);
console.log(perkenalan)

//soal 3
//jawaban soal 3

function hitung_huruf_vokal(str){
    var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
   
var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2)




//Soal4
//jawaban soal 4
var x;
function hitung(x){
    return 2*x-2
}
console.log( hitung(0) ) 
console.log( hitung(1) ) 
console.log( hitung(2) ) 
console.log( hitung(3) ) 
console.log( hitung(5) )