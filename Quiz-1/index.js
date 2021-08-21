//quiz 1 soal 1
var tanggal=29
var bulan=2
var tahun=2020
function next_date(){
    if(tahun==2020){
        if(bulan==2){
            if(tanggal==29){
                function feb(tanggal){
                return tanggal-=28
                }
            }
            else{
                function febx(tanggal){
                    return tanggal+=1
                }
            }
        }
    }
}
console.log(tanggal,bulan,tahun)
console.log(next_date)

//quiz 1 soal 2
var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok"
var kalimat_2 = "Saya Iqbal"
function jumlah_kata(str) { 
    return str.split(" ").length;
  }
  
  console.log(jumlah_kata(kalimat_1));
  console.log(jumlah_kata(kalimat_2));