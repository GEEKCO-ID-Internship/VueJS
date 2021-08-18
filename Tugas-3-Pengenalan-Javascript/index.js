// soal 1

    var pertama = "saya sangat senang hari ini";
    var kedua = "belajar javascript itu keren";

    var ketiga = pertama.substring(0,4);
    var keempat = pertama.substring(12,18);
    var kelima = kedua.substring(0,7);
    var keenam = kedua.substring(8,18);
    var ketujuh = keenam.toUpperCase();
    console.log(ketiga,keempat,kelima,ketujuh)

// soal 2

    var kataPertama="10";
    var kataKedua= "2";
    var kataKetiga="4";
    var kataKeempat="6";

    var nomor1=parseInt(kataPertama);
    var nomor2=parseInt(kataKedua);
    var nomor3=parseInt(kataKetiga);
    var nomor4=parseInt(kataKeempat);
    
    var jawab=nomor1+nomor2*nomor3+nomor4;
    console.log (jawab)

// soal 3

    var kalimat = 'wah javascript itu keren sekali';
    var kata1=kalimat.substring(0,3);
    var kata2=kalimat.substring(4,14);
    var kata3=kalimat.substring(15,19);
    var kata4=kalimat.substring(19,24);
    var kata5=kalimat.substring(25);

    console.log('Kata Pertama: ' + kata1); 
    console.log('Kata Kedua: ' + kata2); 
    console.log('Kata Ketiga: ' + kata3); 
    console.log('Kata Keempat: ' + kata4); 
    console.log('Kata Kelima: ' + kata5);