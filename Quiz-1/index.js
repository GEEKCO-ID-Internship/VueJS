//quiz 1 soal 1
var tanggal=29
var bulan=2
var tahun=2020
if(tahun==2020 && bulan == 2 && tanggal== 29)
{function next_date(tanggal,bulan,tahun){
    tanggal=tanggal-=28
    bulan=bulan+=1   
    tahun=tahun
    }
}
else if(tahun==2021 && bulan == 2 && tanggal ==28)
{function next_date(tanggal,bulan,tahun){
    tanggal=tanggal-=27
    bulan=bulan+=1   
    tahun=tahun
    }
}

else if(tahun==2020 && bulan==12 && tanggal ==31)
{function next_date(tanggal,bulan,tahun){
    tanggal=tanggal-30
    bulan=bulan-11   
    tahun=tahun+1
    }
}
console.log(next_date)
//quiz 1 soal 2
var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok"
var kalimat_2 = "Saya Iqbal"
function jumlah_kata(str) { 
    return str.split(" ").length;
  }
  
  console.log(jumlah_kata(kalimat_1));
  console.log(jumlah_kata(kalimat_2));