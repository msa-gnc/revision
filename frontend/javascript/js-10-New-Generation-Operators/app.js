console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 30000,
};

const product1 = {
  id: "6789",
  brand: "Samsung",
  type: "mobile phone",
  price: 50000,
};

//? .notasyonu ile erişim mümkün
console.log(product.price);
console.log(product.type);

// let proPrice = product.price
// console.log(proPrice)
// proPrice += 5000
// console.log(proPrice)
// console.log(product.price)

//? square bracket
console.log(product["id"]);

//? DESTRUCTURING yöntemi
//?DEğişken isimleri objedeki keylerle aynı olmalıdır

let { price, brand, type, id } = product;

console.log("ID", id);
console.log("brand", brand);
console.log("price", price);
price += 5000;
console.log(price);
console.log(product.price);

let { id: proID, brand: ProBrand, type: proType, price: proPrice } = product1;
console.log(proID, proPrice, proType, ProBrand);
proPrice += 300;
console.log(proPrice);

//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

//   Level 1 Destr
// const { kisi1, kisi2 } = insanlar;
// console.log(kisi1.meslek, kisi2.meslek);
//   Level 2 Destr
// const { adi, meslek } = kisi1;
// console.log(adi);
// let { adi: kisi2Ad, maas } = kisi2;
// console.log(kisi2Ad);

//?iki seviyeli destr

const {
  kisi1: { adi, soyadi, meslek },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad, meslek: kisi2Meslek },
} = insanlar;

console.log(kisi2Soyad);
console.log(meslek);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("******************************");
team.forEach((person) => {
  console.log("Name", person.name);
  console.log("Surname", person.surname);
  console.log("Job", person.job);
  console.log("age", person.age);
});

console.log("******************************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name", name);
  console.log("Surname", surname);
  console.log("Job", job);
  console.log("age", age);
});
console.log("******************************");

team.forEach(({ name, surname, job, age }) => {
  console.log("Name", name);
  console.log("Surname", surname);
  console.log("Job", job);
  console.log("age", age);
});

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGoster());
let { name, surnamei, job, age } = objGoster();
console.log("Age func", ++age);

//?Fonksiyon Parametresi
console.log("******************");

const veri = {
  id: "123",
  desc: "This is top secret information",
  createdTime: "1980",
};

const printData = (data) => {
  console.log(`${data.id} -${data.desc} - ${data.createdTime}`);
};

const printDataDestr = (data) => {
  const { id, desc, createdTime } = data;
  console.log(`${id} -${desc} - ${createdTime}`);
};
const printDataAir = ({ id, desc, createdTime }) => {
  console.log(`${id} -${desc} - ${createdTime}`);
};

printData(veri);
printDataDestr(veri);
printDataAir(veri);

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================
const people = ["Ali", "Veli", "Harvey", "Helen"];
let ali = people[0];
console.log(ali);
const [kisi1, kisi2, , kisi3] = people;
console.log(kisi3);
//* ==============================================
//*  REST (...)
//* =============================================
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//? ARRAY
const araclar = ["Kamyon", "Tır", "Kamyonet", "Motosiklet", "Araba", "Taxi"];
const [arac1, arac2, arac3, ...binekaraclar] = araclar;
console.log(arac3);
console.log(arac2, binekaraclar);

// OBJECT

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
};

const { ad, is, ...geriKalan } = person;
console.log("Geriye kalanlar", geriKalan);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.
// [8,5,6,9] 8,5,6,9
const topla = (a, b, ...kalan) => {
  console.log(kalan);
  return a + b;
};

const toplam = (...s) => {
  return s.reduce((a, b) => a + b);
};

console.log(toplam(5, 8, 4, 8, 15, 16, 23));

// console.log(toplam(8,5,6,9))
// console.log(topla(1,5,6,9,7,3))
//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

//* =============================================
//*  SPREAD (...)
//* =============================================Ş

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["helikopter", "drone", "ucak", "fuze"];
const karaAracları = ["araba", "bisiklet", "scooter", "motosiklet"];

const tasıtlar = [ucanAraclar, karaAracları];
const flatTasitlar = [...ucanAraclar, ...karaAracları];

console.log(tasıtlar);
console.log(flatTasitlar);

// Ornek

const cumle = "Uzun ince bir yoldayım";
const cumleDizisi = [...cumle];
console.log(cumleDizisi);

// Ornek

const numbers = [1, 9, 3, 4];
console.log(Math.max(...numbers));

//? nested
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//! FOR IN

for (const s in sahislar) {
//    console.log(sahislar[s])
   console.log(sahislar[s].salary)
}

// console.log(sahislar["sahis1"])

//? Kullanışlı Object metotları

console.log(Object.keys(sahislar))//? objenin key'leri array olarak doner
console.log(Object.values(sahislar))//? objenin value'larını array olarak doner
console.log(Object.values(sahislar.sahis2))
console.log(Object.entries(sahislar))//? objenin key-value ciftini array olarak doner
console.log(Object.entries(sahislar.sahis1))

//! FOR OF

for (const x of Object.keys(sahislar)) {
    console.log(sahislar[x].salary)
}

console.log("************************")
for (const v of Object.values(sahislar)) {
    console.log(v.name)
}