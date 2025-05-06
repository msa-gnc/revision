//? ====================================================
// ?              FONKSİYONLAR - CALLBACK
// ? ====================================================

function deneme(a) // argument
{
    console.log(a)
}
deneme(67) // parametre

//** Callback Function */
// JavaScript'te callback fonksiyonları, bir fonksiyonun başka bir fonksiyona parametre olarak gönderilip  argüman olarak ulşatırıp, bu fonksiyonun daha sonra çağrılması prensibine dayanır.

function ilkFonksiyon(argü){
    console.log("ilk fonksiyon")
    argü(45)
    // argü()
}

function ikinciFonksiyon(sayi){
    console.log("ikinci fonksiyon")
    console.log(sayi)
}

ilkFonksiyon(ikinciFonksiyon)
/* -------------------------------------------------------------------------- */
function matematikIslemleri(sayi1,sayi2,islem){
const sonuc=islem(sayi1,sayi2)
console.log(sonuc)
}


function topla(a,b){
    return a+b
}

function cikar(a,b){
    return a-b
}

matematikIslemleri(23,56,cikar)
