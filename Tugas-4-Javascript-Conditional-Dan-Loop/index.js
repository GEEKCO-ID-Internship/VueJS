// soal 1

//buatlah variabel seperti di bawah ini

//var nilai;
//pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

//nilai >= 85 indeksnya A
//nilai >= 75 dan nilai < 85 indeksnya B
//nilai >= 65 dan nilai < 75 indeksnya c
//nilai >= 55 dan nilai < 65 indeksnya D
//nilai < 55 indeksnya E

//jawaban soal 1:
var nilai= 50;

if (nilai>=85) 
    console.log("A")

else if (nilai>=75 && nilai<85) 
    console.log("B")
else if (nilai>=65 && nilai<75)
    console.log("C")
else if (nilai>=55 && nilai <65)
    console.log("D")
else 
console.log("E")

//soal 2

//buatlah variabel seperti di bawah ini

//var tanggal = 22;
//var bulan = 7;
//var tahun = 2020;
//ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)


//jawaban soal 2
var tanggal = 12;
var bulan = 9;
var tahun = 1991;
switch(bulan) {
    case 1: console.log(tanggal,'Januari',tahun); break;
    case 2: console.log(tanggal,'Februari',tahun); break;
    case 3: console.log(tanggal,'Maret',tahun); break;
    case 4: console.log(tanggal,'April',tahun); break;
    case 5: console.log(tanggal,'Mei',tahun); break;
    case 6: console.log(tanggal,'Juni',tahun); break;
    case 7: console.log(tanggal,'Juli',tahun); break;
    case 8: console.log(tanggal,'Agustus',tahun); break;
    case 9: console.log(tanggal,'September',tahun); break;
    case 10: console.log(tanggal,'Oktober',tahun); break;
    case 11: console.log(tanggal,'November',tahun); break;
    case 12: console.log(tanggal,'Desember',tahun); break;
}

//soal 3
//Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi n dan alas n. Looping boleh menggunakan syntax apa pun (while, for, do while).

//Output untuk n=3 :

//#
//##
//###
//Output untuk n=7 :

//#
//##
//###
//####
//#####
//######
//#######

//jawaban soal 3

var i;
var n=5;
for(i=1; i<=n; i++) { 
   console.log('#'.repeat(i));
}

//soal 4 berilah suatu nilai m dengan tipe integer, dan buatlah pengulangan dari 1 sampai dengan m
//jawaban soal 4

var m=15;
const dec=["programming","Javascript","VueJS"];

var k=3;
var j;
for(j=1; j<=m; j++) { 
    console.log(j,'- I love',dec[j%k]);
    if(j%k==0){console.log('='.repeat(j))}
}

