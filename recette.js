
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


let url = new URL(window.location);
let name = url.searchParams.get('name');

const nameR = document.querySelector('#dataName');
const nbPartR = document.querySelector('#dateNbPart');
const igrediR = document.querySelector('#dataIngrediants');
const lvlR = document.querySelector('#dataLvlRecette');
const tPrepaR = document.querySelector('#dataTempsPrepa');
const prepaR = document.querySelector('#dataPrepa');
if (name == null){
  nameR.innerHTML = "RECETTE INTROUVABLE";
} else {
  for(let i=0; i<recetteData.length; i++){
    if(recetteData[i].name.toLocaleUpperCase() == name){
        
        nameR.innerHTML = recetteData[i].name;
        nbPartR.innerHTML = recetteData[i].nbPart;
        igrediR.innerHTML = recetteData[i].ingrediants;
        prepaR.innerHTML = recetteData[i].prepa;
  
    } 
  }

}


// /-------------------------------------------------
//                     PAGE RECETTE 
// --------------------------------------------------/

  // const nameR = document.querySelector('#dataName');
  // const nbPartR = document.querySelector('#dateNbPart');
  // const igrediR = document.querySelector('#dataIngrediants');
  // const lvlR = document.querySelector('#dataLvlRecette');
  // const tPrepaR = document.querySelector('#dataTempsPrepa');
  // const prepaR = document.querySelector('#dataPrepa');
  // const linkRecette1 = document.querySelector("#recette1");
  // const linkRecette2 = document.querySelector("#recette2");
  // const linkRecette3 = document.querySelector("#recette3");
  // const linkRecette4 = document.querySelector("#recette4");

  //   linkRecette1.addEventListener('click', () =>{
  //   nameR.innerHTML = recetteData[1].name;
  //   nbPartR.innerHTML = recetteData[1].nbPart;
  //   igrediR.innerHTML = recetteData[1].ingrediants;
  //   prepaR.innerHTML = recetteData[1].prepa;
  // })

  // linkRecette2.addEventListener('click', () =>{
  //   nameR.innerHTML = recetteData[2].name;
  //   nbPartR.innerHTML = recetteData[2].nbPart;
  //   igrediR.innerHTML = recetteData[2].ingrediants;
  //   prepaR.innerHTML = recetteData[2].prepa;

  // })

  //   linkRecette3.addEventListener('click', () =>{
  //       nameR.innerHTML = recetteData[3].name;
  //       nbPartR.innerHTML = recetteData[3].nbPart;
  //       igrediR.innerHTML = recetteData[3].ingrediants;
  //       prepaR.innerHTML = recetteData[3].prepa;
  // })
  //   linkRecette4.addEventListener('click', () =>{
  //       nameR.innerHTML = recetteData[4].name;
  //       nbPartR.innerHTML = recetteData[4].nbPart;
  //       igrediR.innerHTML = recetteData[4].ingrediants;
  //       prepaR.innerHTML = recetteData[4].prepa;
  // })


// /-------------------------------------------------
//                  PAGE RECETTE - FIN
// --------------------------------------------------/
