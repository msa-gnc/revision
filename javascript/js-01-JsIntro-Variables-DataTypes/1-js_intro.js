// ÇIKTI ALMA VE KULLANICI İLE ETKİLEŞİM YOLLARI

// ***** Console Kullanımı  ********* 

console.log("Harici dosyadayız")
console.error("Bu bir hata mesajıdır")
console.warn("Bu bir uyarı mesajıdır")


console.table([{name:"Harvey",age:30},
    {name:"Helen",age:38}])

// **** ALERT ******
// kullanıcıya bir popup ile uyarı mesajı verilir
// alert("Bu size inceden bir uyarıdır")

// **** DOCUMENT.WRITE() ******
document.write("<h1>Browserda sonucu bu şekilde gösterebilirsin</h1>")

//  ****** PROMPT KULLANIMI ******
// Kullanıcıdan bilgi alınmasını sağlar
let ad=prompt("Adınızı Girin:")
console.log(ad," merhaba nasılsın")
console.log(ad)

