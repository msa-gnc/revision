// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

const selamla=()=>{
    console.log("Arrow functiondan Merhaba")
}

selamla()
/* -------------------------------------------------------------------------- */
//! Tek satırlık bir kod olacaksa {} ve return gerekmez

const naber=()=> console.log("Merhaba")

naber()
/* -------------------------------------------------------------------------- */
//**Parametereli fonksiyon kullanımı
// sayının3 e bölünüp bölünmediğini kontrol eden kod bloğu

const bol=(num)=>  num %3===0 ? "3 e bölünür" : " 3 bölünmez";

const uceBolum=(num)=>{
    let result;
    if (num%3===0){
        result="3e bölünür"
    }
    else{
        result="3e bölünmez"
    }
    return result
}

console.log(bol(45))
console.log(uceBolum(45))


const add=(a,b)=> document.write(a+b,"<br>")
const sub=(a,b)=> document.write(a-b,"<br>")
const multp=(a,b)=> document.write(a*b,"<br>")
const division=(a,b)=> document.write(a/b,"<br>")

add(45,78)
sub(45,78)
multp(45,78)
division(45,78)

//Silindirin hacmini bulduran arrow function yazın
// Pi r kare * h 

const hacim=(r,h)=>Math.PI*r*r*h
// return kullnılacksa {} olmalı
const hacim1=(r,h)=>{
    return Math.PI*r*r*h}

console.log(Math.floor(hacim(34,3))) 

//* verilen sayıya kadar olan asal sayıları bulalım



const asal=(num)=>{
    if (num<2){
        console.log("Bu değere kadar asal sayı yok")
        return
    }

    for (let i=2; i<num; i++){
        if (i===2){
            console.log(i)
        }
        else{
            let asal=true;
            // asal mı kontrolü
            for (let j=2; j<i;j++){
                if (i % j===0 ){
                    asal=false;
                    break;
                }
            }

            asal ? console.log(i) : "";

        }
    }
}

asal(4)


