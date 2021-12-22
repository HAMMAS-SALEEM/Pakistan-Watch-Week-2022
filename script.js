const burgerBtn = document.querySelector('.ham0');
const navMenu = document.querySelector('.nav_desktop');
const crossBtn = document.querySelector('.crossBtn');
const speakerInfo = document.querySelector('.speaker_info')


let data = [{
  speakerImage : "images/rolex_ceo.jpg",
  name : "Jean-Frédéric Dufourr",
  alt : "Jean-Frédéric Dufour image",
  profession : "Citizen Watch's President & CEO",
  achievements : "Jean-Frédéric Dufourr is an American business executive who has been the chief executive officer of Rolex Watch Inc. since 2020."
}
,
{
  speakerImage : "images/tudor_ceo.jpg",
  name : "Phillipe Peverelli",
  alt : "Toshiko Sato image",
  profession : "CEO of Tudor",
  achievements : "Phillipe Peverelli is an swedish business executive who has been the chief executive officer of Tudor Inc. since 2010."
}
,
{
  speakerImage : "images/citizen_ceo.jpg",
  name : "Toshihiko Sato",
  alt : "Toshiko Sato image",
  profession : "Citizen Watch's President & CEO",
  achievements : "Jean-Frédéric Dufourr is an American business executive who has been the chief executive officer of Rolex Watch Inc. since 2020."
}
,
{
  speakerImage : "images/apple_ceo.jpg",
  name : "Tim Cook",
  alt : "Tim Cook image",
  profession : "Citizen Watch's President & CEO",
  achievements : "Timothy Donald Cook is an American business executive who has been the chief executive officer of Apple Inc. since 2011."
}
]

for(let i=0; i<data.length; i+=1){
speakerInfo.innerHTML += `<div class="speaker_card">
     <div class="speaker_image_block">
         <img class="speaker_image_back" src="images/transparent.jpg" alt="background transparent">
         <img class="speaker_image" src=${data[i].speakerImage} alt=${data[i].alt}>
     </div>
     <div class="speaker_details">
         <h3 class="speaker_name">${data[i].name}</h3>
         <p class="speaker_profession">${data[i].profession}</p>
         <div class="speaker_info_border"></div>
         <p class="speaker_achievements">${data[i].achievements}</p>
     </div>
</div>`
}


burgerBtn.addEventListener('click', () => {
  navMenu.style.visibility = 'visible';
});

function hideMenu() {
  if (window.innerWidth < 769) {
    navMenu.style.visibility = 'hidden';
  }
}

crossBtn.addEventListener('click', hideMenu);

document.addEventListener('click' , console.log(speakerInfo))
