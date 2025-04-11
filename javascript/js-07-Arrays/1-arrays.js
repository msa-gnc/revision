// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================
//?JavaScript'te array (dizi), birden fazla değeri tek bir değişken içinde depolamamızı sağlayan bir veri yapısıdır.
//? Diziler, farklı türde verileri (sayılar, stringler, booleanlar vb.) aynı anda tutabilir ve indeks numaralarıyla erişilebilirler.
console.log("***** ARRAYS ******");
//* Dizi Tanimlama
//*-----------------------------------------------
//! 1-Square bracket ( Array Literal) yöntemi ile dizi tanımlama
//! En çok tercih edilen yöntem

//* Boş array
const numbers = [];
//! Arrayler içinde bir çok tür değişken olabilir
const school="Cumhuriyet İlkokul"
const names = [
  "Ahmet",
  "Berk",
  "Harvey",
  34,
  78,
  89,
  true,
  null,
  undefined,
  [3, 6, 9],
  "Sevgi",
  NaN,
  school
];

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//?Dizi elemanlarına indeks numarası ile erişilir
//? Dizilerin indeksleri sıfırdan başlar, yani ilk eleman 0 indeksine sahiptir.
//? OKUMA
console.log(names)
console.log(names[3])
console.log(names[8])
console.log(names[10])
console.log(`Sonuncu eleman names[names.length-1: ${names[names.length-1]}`)

names[0]=names[0].toUpperCase()
console.log(names[0])

// ! 2.Yöntem (Object Constructor)
const newArray=new Array("Javascript","HTML","React")
console.log(newArray)

//! 3 Array.of() fonksiyonu ile tanımlama
const sayilar=Array.of(4)
console.log(sayilar)
console.clear()


//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const cars=["BMW","Audi","Mercedes","Scoda","Porche","Tesla"]
console.log(cars)
console.log(cars[4])

/* -------------------------------------------------------------------------- */
//!                                 PUSH METODU                               */
/* -------------------------------------------------------------------------- */
//* push() dizinin sonuna eleman ekler. ( Çok kullanılacak önemlidir)
//* Yeni eleman eklenmiş halini döndürür.
//* Yeni eklenmiş eleman ile birlikte eleman sayısını döndürür.
const newCars=cars.push("Jeep")
console.log(cars)
console.log(newCars)

/* -------------------------------------------------------------------------- */
//!                                 POP METODU                                */
/* -------------------------------------------------------------------------- */
//** pop() son elemani siler ve sildigi elemani dondurur.

const deletedCar=cars.pop()
console.log(cars)
console.log(deletedCar)

/* -------------------------------------------------------------------------- */
//!                                 UNSHIFT METODU                            */
/* -------------------------------------------------------------------------- */
//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

const ElemanEkle=cars.unshift("Tofaş")
console.log(cars)
console.log(ElemanEkle)
console.clear()
/* -------------------------------------------------------------------------- */
//!                                 SHIFT METODU                              */
/* -------------------------------------------------------------------------- */
//* shift, dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const elemanSilinen=cars.shift()
console.log(cars)
console.log(elemanSilinen)

/* -------------------------------------------------------------------------- */
//!                                   SPLICE                                  */
/* -------------------------------------------------------------------------- */
//* Bir array içinde arada bir noktaya ekleme yapmak için kullanılır
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

cars.splice(2,0,"Serçe","Seat","Bugatti","Anadol");
console.log(cars)

cars.splice(5,1,"Togg")
console.log(cars)

cars.splice(3,1)
console.log(cars)

cars.splice(3,0,"Fiat")
console.log(cars)

// cars.splice(3)
// console.log(cars)
console.clear()
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                                   REVERSE                                 */
/* -------------------------------------------------------------------------- */
// Diziyi tersine çevirir.
cars.reverse()
console.log(cars)
console.log(cars[2])

/* -------------------------------------------------------------------------- */
//!                                    SORT                                   */
/* -------------------------------------------------------------------------- */
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.

cars.sort()
console.log(cars)


// Sort metodu sayılarıda stringmiş gibi bir sıralamaya sokar. Bu nedenle sayısal oalrak hatalı bir sıralama oluşur. 

const numbers1=[3,556,243,133,6,78,98]
// Bunu engellemek bir karşılaştırma algoritması ile çalıştırmak gerekir.
console.log(numbers1)
// Küçükten büyüğe sıralama
numbers1.sort((a,b)=>a-b)

console.log(numbers1)
//* Büyükten küçüğe sıralama
numbers1.sort((a,b)=>b-a)
console.log(numbers1)

