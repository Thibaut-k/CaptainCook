
let recetteData = [
    {
        name: "cheesecake",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "3 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
        img:"",
    },
    {
        name: "fish with guacamole sauce",
        nbPart:"8 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Difficile",
        tempsPrepa: "80 min",
        prepa:"sdvnsdnvjk,sksocqksncqsncksq",
        img:"",
    },
    {
        name: "cheese pie",
        nbPart:"1 personnes",
        ingrediants:"zenfnzejfoznedxadsazfazefafjznfnzekf",
        lvlRecette: "Moyen",
        tempsPrepa: "36 min",
        prepa:"sdvnsdnvjk,qsocqksncqsncksq",
        img:"",
    },
    {
        name: "lasagna",
        nbPart:"5 personnes",
        ingrediants:"zenfdqfnzejfoznefjznfnzekf",
        lvlRecette: "Très facile",
        tempsPrepa: "30 min",
        prepa:"sdvnsdnvjk,skcnk,",
        img:"",
    },
    {
        name: "Spaguetti",
        nbPart:"2 personnes",
        ingrediants:"zenfnzejfoznefjznfnzekf",
        lvlRecette: "Facile",
        tempsPrepa: "10 min",
        prepa:"sdvnsdnvjk,skcnk,qsocqksncqsncksq",
        img:"",
    }

  ];
console.log("recetteData", recetteData)
/*-------------------------------------------------
                    REDIRECT CLASS 
--------------------------------------------------*/

class Redirect {

    constructor(hrefClass, pageToRedirect) {
        this.hrefClass = hrefClass
        this.pageToRedirect = pageToRedirect
        
        this.redirect(this.hrefClass, this.pageToRedirect)

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

    // PAGE ACCUEIL
    new Redirect("acceuil", "index")
    new Redirect("recette", "all-recipes")
    new Redirect("contact", "contact")
    new Redirect("acceuil-logo", "index")
    new Redirect("recette_create", "recettePage")
    new Redirect("acceuil-footer", "index")

    // new Redirect("acceuil", "index")
    // new Redirect("recipes", "all-recipes")
    // new Redirect("contact", "contact")
    new Redirect("todolist", "toDo")
}


const nameR = document.querySelector('#dataName');
const nbPartR = document.querySelector('#dateNbPart');
const igrediR = document.querySelector('#dataIngrediants');
const lvlR = document.querySelector('#dataLvlRecette');
const tPrepaR = document.querySelector('#dataTempsPrepa');
const prepaR = document.querySelector('#dataPrepa');

const test = document.querySelector('#recette2');
const test1 = document.querySelector('#recette3');
const test2 = document.querySelector('#recette4');
const test3 = document.querySelector('#recette5');


const testChild = document.querySelector('#recetteChild')
const testChild1 = document.querySelector('#recetteChild1')
const testChild2 = document.querySelector('#recetteChild2')
const testChild3 = document.querySelector('#recetteChild3')

// console.log("test", test)
// console.log(testChild.innerText)

test.addEventListener('click', (e) => {
    window.location.href = `recettePage.html?name=${testChild.innerText}`
    e.preventDefault()

    for(let i=0; i<recetteData.length; i++){
        if(recetteData[i].name.toLocaleUpperCase() == testChild.innerText){
            
            nameR.innerHTML = recetteData[i].name;
            nbPartR.innerHTML = recetteData[i].nbPart;
            igrediR.innerHTML = recetteData[i].ingrediants;
            prepaR.innerHTML = recetteData[i].prepa;
            
        }
    }
})

test1.addEventListener('click', (e) => {
    window.location.href = `recettePage.html?name=${testChild1.innerText}`
    e.preventDefault()

    for(let i=0; i<recetteData.length; i++){
        if(recetteData[i].name.toLocaleUpperCase() == testChild1.innerText){
            
            nameR.innerHTML = recetteData[i].name;
            nbPartR.innerHTML = recetteData[i].nbPart;
            igrediR.innerHTML = recetteData[i].ingrediants;
            prepaR.innerHTML = recetteData[i].prepa;
            
        }
    }
})

test2.addEventListener('click', (e) => {
    window.location.href = `recettePage.html?name=${testChild2.innerText}`
    e.preventDefault()

    for(let i=0; i<recetteData.length; i++){
        if(recetteData[i].name.toLocaleUpperCase() == testChild1.innerText){
            
            nameR.innerHTML = recetteData[i].name;
            nbPartR.innerHTML = recetteData[i].nbPart;
            igrediR.innerHTML = recetteData[i].ingrediants;
            prepaR.innerHTML = recetteData[i].prepa;
            
        }
    }
})

test3.addEventListener('click', (e) => {
    window.location.href = `recettePage.html?name=${testChild3.innerText}`
    e.preventDefault()

    for(let i=0; i<recetteData.length; i++){
        if(recetteData[i].name.toLocaleUpperCase() == testChild1.innerText){
            
            nameR.innerHTML = recetteData[i].name;
            nbPartR.innerHTML = recetteData[i].nbPart;
            igrediR.innerHTML = recetteData[i].ingrediants;
            prepaR.innerHTML = recetteData[i].prepa;
            
        }
    }
})




/* if page is loaded */
if (document.readyState !== "loading") {
    onReady()
}

/* execute the function once DOM is fully loaded */
document.addEventListener("DOMContentLoaded", onReady);
