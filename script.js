const divPai = document.getElementById("container");
const body = document.querySelector('body')

const h2 = document.querySelector(".nameCidade")

const modoEscuro = document.getElementById('butao')

modoEscuro.addEventListener('click', () => {
  body.classList.toggle('escuro')
 
  if (body.classList.contains('escuro')) {

    modoEscuro.textContent = 'Modo claro'
  } else {
    modoEscuro.textContent = 'Modo escuro'
  }

})



let lista = [{
  cidade: "Saint Denis",
  img: "https://static.wikia.nocookie.net/reddead/images/c/c5/Red-Dead-Redemption-2_20181124003152.png/revision/latest?cb=20200405164053&path-prefix=pt-br",
  clima: ['img/sun.PNG',
    'img/sun.PNG',
    'img/sun-cloud.PNG'],
  dias: ['Seg', 'Ter', 'Qua']
},
{
  cidade: "Yharnam",
  img: "https://wallpapers.com/images/hd/bloodborne-1600-x-900-background-twgj1znt1meehxb4.jpg",
  clima: ['img/moon.PNG',
    'img/moon2.PNG',
    'img/wind.PNG'],
  dias: ['Sex', 'Sab', 'Dom']
},
{
  cidade: "Muralha GOT",
  img: "https://s.aficionados.com.br/imagens/muralha.jpg",
  clima: ['img/wind.PNG',
    'img/sun-cloud.PNG',
    'img/wind.PNG'],
  dias: ['Qui', 'Sex', 'Sab']
},
{
  cidade: "Gotham City",
  img: "https://images.alphacoders.com/115/1156096.png",
  clima: ['img/moon.PNG',
    'img/wind.PNG',
    'img/moon2.PNG'],
  dias: ['Qua', 'Qui', 'Sex']
}
  ,
{
  cidade: "Hogsmeade",
  img: "https://static.wikia.nocookie.net/harrypotter/images/1/14/Pottermore_background_hogsmeade_at_christmas.jpg/revision/latest?cb=20141213044949&path-prefix=pt-br",
  clima: ['img/wind.PNG',
    'img/sun-cloud.PNG',
    'img/wind.PNG'],
  dias: ['Dom', 'Seg', 'Ter']
},
{
  cidade: "Springfield",
  img: "https://disneyplusbrasil.com.br/wp-content/uploads/2023/05/Springfield-Os-Simpsons.jpg",
  clima: ['img/wind.PNG',
    'img/sun-cloud.PNG',
    'img/wind.PNG'],
  dias: ['Ter', 'Qua', 'Qui']
},
{
  cidade: "Charming",
  img: "https://live.staticflickr.com/8015/7428085932_7a4b111b78_b.jpg",
  clima: ['img/sun.PNG',
    'img/sun-cloud.PNG',
    'img/wind.PNG'],
  dias: ['Sab', 'Dom', 'Seg']
}
  ,
{
  cidade: "Lordran",
  img: "https://www.arkade.com.br/wp-content/uploads/2018/06/DARK-SOULS%E2%84%A2_-REMASTERED_20180601210342-1050x591.jpg",
  clima: ['img/sun.PNG',
    'img/hot.PNG',
    'img/sun-cloud.PNG'],
  dias: ['Sex', 'Sab', 'Dom']
}

]

lista.forEach(element => {
  let divNew = document.createElement("div");

  divNew.innerHTML = `<div class="w3-card-4 card">
<div class="w3-display-container w3-text-white city">
  <img src="${element.img}" alt="Lights" >
  <div class="w3-xlarge w3-display-bottomleft w3-padding nameCidade"><h2>${element.cidade}</h2></div>
</div>
<div class="w3-row clima">
  <div class="w3-third w3-center">
    <h3>${element.dias[0]}</h3>
    <img src="${element.clima[0]}" alt="sun">
  </div>
  <div class="w3-third w3-center">
    <h3>${element.dias[1]}</h3>
    <img src="${element.clima[1]}" alt="cloud">
  </div>
  <div class="w3-third w3-center w3-margin-bottom">
    <h3>${element.dias[2]}</h3>
    <img src="${element.clima[2]}" alt="clouds">
  </div>
</div>
</div>`

  divPai.appendChild(divNew);

});


