import "./scss/style.scss"
import notify from "./src/notify";

const form = document.querySelector("header form");

import {getCoin} from "./src/getCoin";

// console.log(form)

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("form tetiklendi")
    
    getInputVal()
    // console.log(e.target).reset()
    form.reset()
})


const getInputVal = () => {
    
    // const input = document.querySelector("header form input")
    // console.log(input)
    const inputVal = document.querySelector("header form input").value
    console.log(inputVal)

    if (!inputVal.trim()) {
        // alert("İnput boş bırakılamaz")
        notify("inputu boş bırakma kardeşim", "warning")
    } else {
        // console.log("input doldu:",inputVal)
        getCoin(inputVal)
    }

}