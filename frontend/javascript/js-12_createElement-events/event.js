//* ==============================================
//*                  EVENTS
//* ===============================================
console.log("****** EVENTS *******")


//?Selectorler
const h2 = document.querySelector("h2")
const body = document.querySelector("body")
const myInput = document.getElementById("input")
const addBtn = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")



//?Event Tanımlamaları

//* mouse h2 elemenitini üzerine geldiğinde tetiklenir
h2.onmouseover = function() {
    // h2.style.color="red"
    h2.classList.add("red" , "center")

}

//* mouse h2 elemenitinin üzerinden ayrıldığınıda tetiklenir
h2.onmouseout = () => {
    h2.classList.remove("red", "center")
}

//* DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
body.onload = function() {
    myInput.focus()
}
//? DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim, link gibi içeriklerin yüklenmesini beklemez)
// document.addEventListener("DOMContentLoaded", (e)=>{
//     alert("çalıştı")
// })

addBtn.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    myInput.focus()

    if (!myInput.value) {
        alert("lütfen inputu doldurun")
        return
    }

    const li = document.createElement("li")
    li.textContent = myInput.value
    ul.appendChild(li)
    myInput.value = ""

})

//? Form içerisindeki submit butonuna her basildiğinda bu onSubmit event 'i tetiklenir.
//? submit eventi otomatik olarak enter tuşunun kullanımı sağlar.
// form.onsubmit = function(e) {
//     e.preventDefault()
// }

// myInput.onkeydown = function(e){
//     // console.log(e.key)
//     if (e.key === "Enter") {
//         addBtn.click()
//     }
// }


myInput.addEventListener("keydown", (e) => {

    console.log(e.code)
        if (e.key === "Enter") {
        addBtn.click()
    }
})