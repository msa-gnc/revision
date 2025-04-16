

const displayCoin = (coin) => {

    console.log(coin)
    // console.log("dislayCoin çalıştı")

    const {price, change,name, symbol, iconUrl, rank  } = coin

    const ul = document.querySelector("main .coins")
    const li = document.createElement("li")
    li.className="coin";
    li.innerHTML=`
    <li class="coin">
        <div class="remove-icon">
            <i class="fas fa-window-close"></i>
        </div>
        <h2 class="coin-name" data-name="Ripples">
            <span>${name}</span>
            <sup>${symbol}</sup>
        </h2>
        <div class="coin-temp">$$${Number(price).toFixed(2)}</div>
            <figure>
                <img class="coin-icon" src="${iconUrl}">                
                <figcaption style='color:${change < 0 ? "red" : "green" }'>
                    <i class="fa-solid fa-chart-line"></i>
                    <span>${change}%</span>
                </figcaption>
        </figure>
    </li> 
    `;
    // ul.appendChild(li)
    ul.prepend(li)
    //card içerisindeki sil butonu için event
    li.querySelector(".remove-icon").addEventListener("click",()=>{
        li.remove()
    })
}

export default displayCoin


{/* 
<li class="coin">
        <div class="remove-icon">
            <i class="fas fa-window-close"></i>
        </div>
        <h2 class="coin-name" data-name="Ripples">
            <span>Ripples</span>
            <sup>RPLS</sup>
        </h2>
        <div class="coin-temp">$0.0615</div>
            <figure>
                <img class="coin-icon" src="https://cdn.coinranking.com/-h63VZ5b8_/ripples.png">                
                <figcaption style="color:red">
                    <i class="fa-solid fa-chart-line"></i>
                    <span>-12.89%</span>
                </figcaption>
        </figure>
</li> 
*/}