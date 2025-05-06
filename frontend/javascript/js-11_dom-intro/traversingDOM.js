console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const h2 = document.getElementById("add-new-item")
console.log(h2)

console.log(h2.parentNode) //section.add-item (documente kadar çıkabilir)
console.log(h2.parentElement.parentElement.parentElement.parentElement.parentElement) //(html'ye kadar çıkabilir)

//?bulundupumuz yer

const htmlLi = document.querySelector("ul li:nth-child(1)")
console.log(htmlLi)

console.log(htmlLi.parentNode.parentNode.parentNode) //?section.item-list

console.log(htmlLi.closest("section.item-list"))
console.log(htmlLi.closest("#new-sec"))
console.log(htmlLi.closest("section > section"))
console.log(htmlLi.closest("main > section > :not(.item-list)"))


console.log(htmlLi.closest("main").querySelector("section.add-item")) //?section.add-item


//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild

const section = document.querySelector("section.add-item")
console.log(section)

console.log(section.firstElementChild) //h2
console.log(section.firstChild)

console.log(section.lastElementChild) // text yazı içeren html elementlerinin yazısına erişir

console.log(section.children) //? tum cocuklarını HTML Collectio olarak doner
//? HTMLCollection(3) [h2#add-new-item, input#input, input#btn, add-new-item: h2#add-new-item, input: input#input, btn: input#btn]


//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

console.log(htmlLi.nextElementSibling.innerText)
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText)
console.log(htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText)

