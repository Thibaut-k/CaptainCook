
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
//                  PAGE RECETTE - FIN
// --------------------------------------------------/