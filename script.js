const divPai = document.getElementById("container");

let lista = [{
    cidade: "Saint Denis",
    img:"https://static.wikia.nocookie.net/reddead/images/c/c5/Red-Dead-Redemption-2_20181124003152.png/revision/latest?cb=20200405164053&path-prefix=pt-br",
    clima1:'img/sun.PNG',
    clima2:'img/sun.PNG',
    clima3:'img/sun-cloud.PNG'
},
{
    cidade: "Yharnam",
    img:"https://wallpapers.com/images/hd/bloodborne-1600-x-900-background-twgj1znt1meehxb4.jpg",
    clima1:'img/moon.PNG',
    clima2:'img/moon2.PNG',
    clima3:'img/wind.PNG',
},
{
    cidade: "Muralha GOT",
    img:"https://s.aficionados.com.br/imagens/muralha.jpg",
    clima1:'img/wind.PNG',
    clima2:'img/sun-cloud.PNG',
    clima3:'img/wind.PNG',
},
{
    cidade: "Gotham City",
    img:"https://images.alphacoders.com/115/1156096.png",
    clima1:'img/moon.PNG',
    clima2:'img/wind.PNG',
    clima3:'img/sun.PNG',
}
,
{
    cidade: "Hogsmeade",
    img:"https://static.wikia.nocookie.net/harrypotter/images/1/14/Pottermore_background_hogsmeade_at_christmas.jpg/revision/latest?cb=20141213044949&path-prefix=pt-br",
    clima1:'img/rain.PNG',
    clima2:'img/wind.PNG',
    clima3:'img/rain2.PNG',
},
{
    cidade: "Springfield",
    img:"https://disneyplusbrasil.com.br/wp-content/uploads/2023/05/Springfield-Os-Simpsons.jpg",
    clima1:'img/hot.PNG',
    clima2:'img/',
    clima3:'img/',
},
{
    cidade: "Charming",
    img:"https://live.staticflickr.com/8015/7428085932_7a4b111b78_b.jpg",
    clima1:'img/',
    clima2:'img/',
    clima3:'img/',
}
,
{
    cidade: "Lordran",
    img:"https://www.arkade.com.br/wp-content/uploads/2018/06/DARK-SOULS%E2%84%A2_-REMASTERED_20180601210342-1050x591.jpg",
    clima1:'img/sun.PNG',
    clima2:'img/hot.PNG',
    clima3:'img/sun-cloud.PNG',
}

]

lista.forEach(element => {
    let divNew = document.createElement("div");
    
    divNew.innerHTML=`<div class="w3-card-4 card">
<div class="w3-display-container w3-text-white city">
  <img src="${element.img}" alt="Lights" >
  <div class="w3-xlarge w3-display-bottomleft w3-padding nameCidade"><h2>${element.cidade}</h2></div>
</div>
<div class="w3-row clima">
  <div class="w3-third w3-center">
    <h3>SEG</h3>
    <img src="${element.clima1}" alt="sun">
  </div>
  <div class="w3-third w3-center">
    <h3>TER</h3>
    <img src="${element.clima2}" alt="cloud">
  </div>
  <div class="w3-third w3-center w3-margin-bottom">
    <h3>QUA</h3>
    <img src="${element.clima3}" alt="clouds">
  </div>
</div>
</div>`

divPai.appendChild(divNew);
    
});


