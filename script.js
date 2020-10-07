
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
        tempsPrepa: "30 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
    },
    {
        name: "Pizza à l'annanas",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "30 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
    },
    {
        name: "Ramen",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "30 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
    },
    {
        name: "Bolognaise",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "30 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
    },

];



/************** RECETTE PAGE **************/