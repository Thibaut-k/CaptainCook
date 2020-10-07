
/**************** HEADER *****************/

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

/************* HEADER ************/







/************** RECETTE PAGE **************/



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

  nameR.innerHTML = recetteData[0].name;
  nbPartR.innerHTML = recetteData[0].nbPart;
  igrediR.innerHTML = recetteData[0].ingrediants;
  prepaR.innerHTML = recetteData[0].prepa;


  linkRecette1.addEventListener('click', () =>{
    nameR.innerHTML = recetteData[1].name;
    nbPartR.innerHTML = recetteData[1].nbPart;
    igrediR.innerHTML = recetteData[1].ingrediants;
    prepaR.innerHTML = recetteData[1].prepa;
  })

  linkRecette2.addEventListener('click', () =>{
    nameR.innerHTML = recetteData[2].name;
    nbPartR.innerHTML = recetteData[2].nbPart;
    igrediR.innerHTML = recetteData[2].ingrediants;
    prepaR.innerHTML = recetteData[2].prepa;
  })
    linkRecette3.addEventListener('click', () =>{
        nameR.innerHTML = recetteData[3].name;
        nbPartR.innerHTML = recetteData[3].nbPart;
        igrediR.innerHTML = recetteData[3].ingrediants;
        prepaR.innerHTML = recetteData[3].prepa;
  })
    linkRecette4.addEventListener('click', () =>{
        nameR.innerHTML = recetteData[4].name;
        nbPartR.innerHTML = recetteData[4].nbPart;
        igrediR.innerHTML = recetteData[4].ingrediants;
        prepaR.innerHTML = recetteData[4].prepa;
  })


/************** RECETTE PAGE **************/




class Redirect {

    constructor(hrefId, pageToRedirect) {
        this.hrefId = hrefId
        this.pageToRedirect = pageToRedirect

        this.redirect(this.hrefId, this.pageToRedirect)

    }

        id = id 
        pageName = recettePage.html
    
    redirect = (id, recettePage) => {
        id = document.getElementById(id)
        id.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = $recettePage.html
        })
    }

}

let onReady = () => {
    new Redirect("recipes", "all-recipes")
    new Redirect("acceuil", "index")
    new hoverEffect({
        parent: document.getElementsByClassName("image-switch"),
        intensity: 0.2,
        image1: document.querySelector(".image-switch").src = "../img/home/3-250x250.jpg",
        displacementImage: document.querySelector(".image-switch").src = "../img/home/diss.png "
    })
}


if (document.readyState !== "loading") {
    onReady()
}


document.addEventListener("DOMContentLoaded", onReady);
