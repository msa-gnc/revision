// ?==============================================
// ?            DIZI ERISIM METOTLARI
// ?==============================================
//Array Property
/* -------------------------------------------------------------------------- */
/*                                   length                                   */
/* -------------------------------------------------------------------------- */
// Bir arrayın kaç elemandan oluştuğunu verir
const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 5,56]

console.log( `Number Arrayı ${number.length} eleman sayısına sahiptir`)

/* -------------------------------------------------------------------------- */
//!                                  INCLUDES()                                */
/* -------------------------------------------------------------------------- */
//* Bir elemanın dizide bulunup bulunmadığını true veya false olarak döndürür.

console.log(number.includes(5)) // number dizisi 5 sayısını içeriyor mu? true
console.log(number.includes(9))


// const userList=["neolursangel","sivasli19","kelalaka","guldurmebeni","excalibur17","pardone"]
// const guest=prompt("Kullanıcı adı giriniz:")

// userList.includes(guest) ? console.log("Kayıtlı kullanıcı Lütfen giriş yapın") : console.log("KAyıt olabilirsiniz")
console.clear()
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                          indexOf(), lastIndexOf()                         */
/* -------------------------------------------------------------------------- */
// Bir array içinde aradığımız elamanı ilk gördüğün indexin numarasını döndürür
// İçinde bulamazsa (yoksa) -1 değeri döndürür

console.log(number)

console.log(number.indexOf("bes"))  // bes eleamanının index numarasını döndürüyor
console.log(number.indexOf("yedi")) // Array içinde bu eleman yoksa -1  değeri döndürür

if (number.indexOf("bes")<0){
    console.log("Aranan öge yok ki")
}
else{
    console.log(`Aradığınız öğenin sıra numarası ${number.indexOf("bes")}`)
}

// lastIndexOf()
// sondan başlayarak bakar ilk gördüğü index numarası verir

/* -------------------------------------------------------------------------- */
//!                          join                                             */
/* -------------------------------------------------------------------------- */
//* Dizideki tüm elemanları belirtilen bir ayraç ile birleştirerek bir string döndürür.



//* Join bir işaret yada bilgi parametresi verilmezse aralarına , koyarak birleştirir.
const statement=["oku","da","adam","ol"]

// ama kendimiz parantez içine bir işaret yada herhangi bir karakter verirsek aralarına onu ekleyecektir
console.log(statement.join("🎈"))
const newStr=statement.join("🎈")
console.log(newStr)
console.log(statement)

/* -------------------------------------------------------------------------- */
//!                        slice()                                           */
/* -------------------------------------------------------------------------- */
// slice(start,end) 
// end verilmezse onuna kadar olanı alır

console.log(statement.slice(1,3))
console.log(statement)

