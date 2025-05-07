"use strict"



console.log("hello fs18")

require("./module/module") //! require metodu başka bir js dosyasını içeri aktarmak için kullanılır

// const testFunc= require("./module/module")

// testFunc() //*tek fonksiyon import etme


/* -------------------------------------------------------------------------- */

// const {imrenBurc:dogumGünü,defneBurc,imren}= require("./module/module")
// console.log(imren)
// // imrenBurc()
// // defneBurc()
// dogumGünü()


/* -------------------------------------------------------------------------- */
// const [tekRakam,ciftRakam]=require("./module/module")
// tekRakam()
// ciftRakam()

//' Bizim kullanacağımız import yöntemi
const {test1:func1,test2,test3,deger} = require("./module/module")
func1()
test2()
test3()
console.log(deger)