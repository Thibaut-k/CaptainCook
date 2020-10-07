
// /-------------------------------------------------
//                     HEADER NAV-BAR
// --------------------------------------------------/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

// toggle nav
 burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');


// animate links   

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

// burger animation

        burger.classList.toggle('toggle');
    });

}
navSlide();

// /-------------------------------------------------
//                 HEADER NAV-BAR - FIN
// --------------------------------------------------/


// /-------------------------------------------------
//                  PAGE RECETTE - FIN
// --------------------------------------------------/

/*-------------------------------------------------
                    REDIRECT CLASS 
--------------------------------------------------*/

class Redirect {

    constructor(hrefId, pageToRedirect) {
        this.hrefId = hrefId
        this.pageToRedirect = pageToRedirect
        
        this.redirect(this.hrefId, this.pageToRedirect)
    
    }

    /* function to redirect to another page onClick 
        id = id name of the clicable element
        pageName = page name, ex : index.html
    */
    redirect = (id, pageName) => {
        id = document.getElementById(id)
        id.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = `${pageName}.html`
        })
    }

}

let onReady = () => {
    new Redirect("recipes", "all-recipes")
    new Redirect("acceuil", "index")
    new Redirect("contact", "contact")
}

/* if page is loaded */
if (document.readyState !== "loading") {
    onReady()
}

/* execute the function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", onReady);

// /-------------------------------------------------
//                 REDIRECT CLASS - FIN
// --------------------------------------------------/



// /-------------------------------------------------
//                     PAGE RECETTE 
// --------------------------------------------------/


const recetteData = [
    {
        name: "Quiche au thon",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "3 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
        img:""
    },
    {
        name: "Pizza à l'annanas",
        nbPart:"8 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Difficile",
        tempsPrepa: "80 min",
        prepa:"sdvnsdnvjk,sksocqksncqsncksq",
        img:""
    },
    {
        name: "Ramen",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznedxadsazfazefafjznfnzekf",
        lvlRecette: "Moyen",
        tempsPrepa: "36 min",
        prepa:"sdvnsdnvjk,qsocqksncqsncksq",
        img:""
    },
    {
        name: "Bolognaise",
        nbPart:"5 personnes",
        ingrediants:"zenfdqfnzejfoznefjznfnzekf",
        lvlRecette: "Très facile",
        tempsPrepa: "30 min",
        prepa:"sdvnsdnvjk,skcnk,",
        img:""
    },
    {
        name: "Spaguetti",
        nbPart:"2 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "10 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
        img:""
    }

  ];


  const nameR = document.querySelector('#dataName');
  const nbPartR = document.querySelector('#dateNbPart');
  const igrediR = document.querySelector('#dataIngrediants');
  const lvlR = document.querySelector('#dataLvlRecette');
  const tPrepaR = document.querySelector('#dataTempsPrepa');
  const prepaR = document.querySelector('#dataPrepa');
  const linkRecette1 = document.querySelector("#recette1");
  const linkRecette2 = document.querySelector("#recette2");
  const linkRecette3 = document.querySelector("#recette3");
  const linkRecette4 = document.querySelector("#recette4");


  linkRecette1.addEventListener('click', () =>{
    nameR.innerHTML = recetteData[1].name;
    nbPartR.innerHTML = recetteData[1].nbPart;
    igrediR.innerHTML = recetteData[1].ingrediants;
    prepaR.innerHTML = recetteData[1].prepa;
    console.log('bonjour')
  })

  linkRecette2.addEventListener('click', () =>{
    nameR.innerHTML = recetteData[2].name;
    nbPartR.innerHTML = recetteData[2].nbPart;
    igrediR.innerHTML = recetteData[2].ingrediants;
    prepaR.innerHTML = recetteData[2].prepa;
    console.log('bonjour')
  })

    linkRecette3.addEventListener('click', () =>{
        nameR.innerHTML = recetteData[3].name;
        nbPartR.innerHTML = recetteData[3].nbPart;
        igrediR.innerHTML = recetteData[3].ingrediants;
        prepaR.innerHTML = recetteData[3].prepa;
        console.log('bonjour')
  })
    linkRecette4.addEventListener('click', () =>{
        nameR.innerHTML = recetteData[4].name;
        nbPartR.innerHTML = recetteData[4].nbPart;
        igrediR.innerHTML = recetteData[4].ingrediants;
        prepaR.innerHTML = recetteData[4].prepa;
        console.log('bonjour')
  })


// /-------------------------------------------------
//                     BANNER
// --------------------------------------------------/

// slideIndex à revoir
var slideIndex = 0;
var slideIndex = 1;
// slideIndex à revoir
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
/********** */



var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    
  }
  slides[slideIndex-1].style.display = "block";  
 
}

// /-------------------------------------------------
//                     BANNER - FIN
// --------------------------------------------------/
