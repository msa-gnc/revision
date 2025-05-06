// * ============================================
//!            WHILE LOOP
// * ============================================
// JavaScript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır. 

// while (şart){
//     yapılacak işlemler
// }
/* 


/ for sayısı belli bir döngü için idealdir. 
/ Belli bir şarta göre sayısı sürekli devam edecekse.Kullanıcıya devam etmek istermisin sorusu gibi soru ile
-------------------------------------------------------------------------- */
// let i=0;
// while (i<=10){
//     console.log(i)
//     i++
// }
console.clear()
/* -------------------------------------------------------------------------- */
// kullanıcı şifreyi bulana kadar sorsun
// let password;

// while (password!=="12m.%"){
//     password=prompt("Şifreyi giriniz:")
// }

// let number =+prompt("Bir sayı giriniz:")
// if (number<0 || number >100){
//     alert("Sayı 0-100 arasında girilmelidir")
// }

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz

// 0-100 arasında değer girilene kadar değer girilmesini isteyen kod bloğu
// let number1 =+prompt("Bir sayı giriniz:")

// while(number1<0 || number1>100){
//     console.log("Sayı 0-100 arasında olmalıdır.")
//     number1=prompt("0-100 arasında bir sayı giriniz veya çıkmak için q tuşuna basınız.")

//     if (number1==="q"){
//         break;
//     }
// }

//! flag mechanism:
//flag (bayrak) mekanizması, belirli bir durumun kontrol edilmesi gerektiğinde kullanılır. Flag, genellikle true veya false gibi boolean değerler alır ve koşulun sağlanıp sağlanmadığını belirtir. Bu mekanizma, programın akışını kontrol etmek için yaygın olarak kullanılır.

// let number1 =+prompt("Bir sayı giriniz:")
// exit=false;

// while(number1<0 || number1>100){
//     console.log("Sayı 0-100 arasında olmalıdır.")
//     number1=prompt("0-100 arasında bir sayı giriniz veya çıkmak için q tuşuna basınız.")

//     if (number1==="q"){
//         exit=true;
//         break;
//     }
// }

// exit ? console.log("çıkış yapıldı") : console.log("girilen sayı:",number1)

//* Flag Mekanizmasının Avantajları
//? Kodun Akışını Kolay Kontrol Etme: Flag sayesinde, kullanıcı belirli bir eylemi gerçekleştirdiğinde (örneğin, çıkmak istediğinde) programın nasıl davranacağı netleşir.
//? Esneklik Sağlama: Flag değişkeni kullanarak farklı durumlarda farklı işlemler yapılabilir. Örneğin, bir koşul sağlandığında belirli bir işlemi durdurabilir veya değiştirebilirsiniz.
//? Kodun Okunabilirliğini Artırma: Flag değişkenlerinin anlamlı isimlerle tanımlanması, kodu okuyan kişinin programın amacını daha iyi anlamasına yardımcı olur.

//!SAYI TAHMİN OYUNU
const RastgeleSayi=Math.trunc(Math.random()*100+1);
console.log(RastgeleSayi)
exit=false;// Çıkış durumu için flag kullanımı

while(true){
    let tahmin=prompt("1-100 arasında bir sayı girin veya çıkış için q harfine basın:")

    //çıkış kontrolü
    if (tahmin==="q"){
        exit=true;
        break;
    }

    tahmin=Number(tahmin)

    if (isNaN(tahmin)){
        console.log("Lütfen geçerli bir sayı girin yada çıkış için q harfine basın")
        continue;
    }

    // tahmini kontrol edelim
    if (tahmin<RastgeleSayi){
        console.log("Daha büyük bir sayı girin...")
    }else if(tahmin>RastgeleSayi){
        console.log("Daha küçük bir sayı girin...")
    }else{
        console.log("Tebrikler! Doğru tahmin")
        break;
    }
}

exit ? console.log("Oyundan çıktınız..") : console.log("Oyun sona erdi.")