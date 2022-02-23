var spreadsheet_id = '1R4cSrO2uT66A1KpXNFhPyWWV-0DLMIriH3Y675zZYdU'
var tab_name = 'Лист1'
var api_key = 'AIzaSyAW91wkUKa6kevq61zhPYTUnpF-h36D01I'
var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheet_id}/values/${tab_name}?alt=json&key=${api_key}`
console.log(url)
var json
var card_field = document.querySelector(".card_field")
var img = document.querySelector(".img_card")
var nameObject = document.querySelector(".title_card")
var price = document.querySelector(".price_card")
var count = document.querySelector(".count_card")
fetch(url)
.then(data=>{
    if(data.ok){
        console.log("доступ получен!")
        data.json()
        .then(data=>{
            json=data["values"]
            console.log(json)
          //  setInterval(()=>{showProduct(json)},3000)
            showProduct(json)
        })
    }
    else{
        console.log("доступ запрещен")
    }
})
function update_card(name, price, count, img){
    var outHtml = ""
    //card_field.innerHTML = ''
    // this.img.src=img
    // this.nameObject.textContent=name
    // this.price.textContent=price
    // this.count.textContent=count
    outHtml += `<div class="card">`
    outHtml += `<img src="${img}" alt="" class="img_card">`
    outHtml += `<h1 class="title_card">${name}</h1>`
    outHtml +=  `<p class="price_card">${price} рублей</p>`
    outHtml +=  `<p class="descripton_card">${count}</p>`
    outHtml += `</div>`
    card_field.innerHTML += outHtml
}
function showProduct(data){
    for(var i = 1; i<data.length; i++ ){
     update_card(data[i][1],data[i][2],data[i][3],data[i][4])
    }
}
//update_card(234, 00, 908, 1000)

// setTimeout(() => {
//     location.reload()
// },5000)