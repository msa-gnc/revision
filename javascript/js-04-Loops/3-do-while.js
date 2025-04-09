// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

// do{
//     yapılacak işlemler
// }while(şart)

let i=1

do{
    console.log(i)
    i++
}while(i<=10)

/* -------------------------------------------------------------------------- */
// kullanıcıdan vize ve final notları alıp bunları hesaplayan program

let devam=""
do{
    let ders=prompt("Dersin adını giriniz:")
    let vize=+prompt("Vize notunu giriniz:")
    let final=+prompt("final notunu giriniz:")
    let ortalama=vize*0.4 + final *0.6;
    
    let sonuc=final <50 ? `${ders} dersten ${final} notu yeterli olmadığı için kaldınız`:
    ortalama>=50 ? 
    `${ders} dersinden ${ortalama} ile geçtiniz`:
    `${ders} dersinden ${ortalama} yeterli olmadığı için kaldınız`
console.log(sonuc)
    devam=prompt("Devam etmek istiyorsanız E tuşana basın")
}while(devam === "E")
