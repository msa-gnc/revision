console.log("index.js den selamlar");


//? named export yapılmış değişkenleri import yaparken "as" aliası ile isim değiştirerek import edebiliriz
//? default exportlarda istediğimiz isimle import edebiliriz
// import ugurla from "./myModule.js";

import bye, {
  topla,
  arttir as increase,
  azalt as decrease,
  myName,
  calismaSaati,
} from "./myModule.js";

console.log(topla(4, 9));
console.log(calismaSaati);

console.log(increase(19));

console.log(decrease(3));

bye();
