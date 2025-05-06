console.log("myModule den selamlar");


//!named export

export const calismaSaati=40
export function topla(s1,s2){

    return s1+s2
}

let counter=5

const arttir=(miktar)=>(counter+=miktar)

const azalt=(miktar)=>(counter-=miktar)


const myName="Ahmet"

export {arttir, azalt,myName}



//* default export
//? bir sayfada 1 tane default export olabilir
//? tüm yapı tek seferde export edilir
//? import ederken istediğimiz isimle import edip kullanabiliriz
function ugurla(){
    console.log("görüşmek üzere js");
    
}

export default ugurla