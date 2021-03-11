//On charge les information utile
const statut = document.querySelector("h2")
const firstPlayer = document.querySelector("#firstPlayer")
const secondPlayer = document.querySelector("#secondPlayer")
const firstDé = document.querySelector("#firstDé")
const secondDé = document.querySelector("#secondDé")
const globalScore1 = document.querySelector("#globalScore1")
const globalScore2 = document.querySelector("#globalScore2")
const replay = document.querySelector('#replay')

document.querySelector("#launch").addEventListener("click",getNumber)
document.querySelector("#hold").addEventListener("click",setNumber)
document.querySelector("#replay").addEventListener("click",init)

init()

// dé 
function getNumber(){
  let Numb = 0
  //si c'est le tour du joueur 1
  if(joueur1 == true){
    statut.innerHTML = `C'est le tour du joueur 1 `
    numb = Math.floor((Math.random() * 6) + 1)

      if(numb === 1){
        //passe tour, scoreround = 0 et joueur a false pour passe la main au joueur suivant et met un message pour le l'utilisateur
        joueur1 = false
        scoreRound1 = 0
        statut.innerHTML = `Vous avez fait un 1 dommage ! C'est le tour du joueur 2`
        underline()
        return
      }else{
        //on incrémente scoreRound avec numb (les numéro du dé) et affiche le score
        scoreRound1 = scoreRound1 + numb 
        firstDé.innerHTML = scoreRound1 
        underline()
        if(scoreRound1 + scoreGlobal1 >= 100){
          gagnant()
        }
      }
  }else{
    //si le joueur est a false alors c'est le tour du joueur 2
    statut.innerHTML = `C'est le tour du joueur 2`
    numb = Math.floor((Math.random() * 6) + 1)
      if(numb === 1){
        //passe tour, scoreround = 0 et joueur a false pour passe la main au joueur suivant
        joueur1 = true
        scoreRound2 = 0
        statut.innerHTML = `Vous avez fait un 1 dommage ! C'est le tour du joueur 1`
        underline()
        return
      }else{
      //on incrémente scoreRound avec numb (les numéro du dé)
      scoreRound2 = scoreRound2 + numb
      secondDé.innerHTML = scoreRound2
      underline()
      if(scoreRound2 + scoreGlobal2 >= 100){
        gagnant()
      }
    }}
  return scoreRound1 & scoreRound2 & scoreGlobal1 & scoreGlobal2
}

function setNumber(){
  if(joueur1 == true){
    //On save le score des joueur qui on hold dans le score global
    scoreGlobal1 = scoreGlobal1 + scoreRound1
    globalScore1.innerHTML = scoreGlobal1
    scoreRound1 = 0
    joueur1 = false
  }else{
    scoreGlobal2 = scoreGlobal2 + scoreRound2
    globalScore2.innerHTML = scoreGlobal2
    scoreRound2 = 0
    joueur1 = true
  }
}

function gagnant()
{
  if(joueur1 == true){
    //Envoie un message d'alerte pour afficher qui a gagner et on reinitialise les variables à 0 pour une nouvelle partie
    alert("Le joueur 1 a gagner !!!")
    console.log('Le joueur 1 à gagner')
    init()
  }else{
    alert("Le joueur 2 a gagner !!!")
    console.log('Le joueur 2 à gagner')
    init()
}}

function init(){
  //initialise les variables et réaffiche 0 sur les compteurs
  joueur1 = true 
  joueur2 = false
  scoreRound1 = 0
  scoreGlobal1 = 0
  scoreRound2 = 0
  scoreGlobal2 = 0

  globalScore1.innerHTML = 0
  globalScore2.innerHTML = 0
  firstDé.innerHTML = 0
  secondDé.innerHTML = 0

  return joueur1 & joueur2 & scoreRound1 & scoreGlobal1 & scoreRound2 & scoreGlobal2 
  }
  
  function underline(){
    if(joueur1 == true){
      //Envoie un message d'alerte pour afficher qui a gagner et on reinitialise les variables à 0 pour une nouvelle partie
      firstPlayer.style.textDecoration = "underline red"
      secondPlayer.style.textDecoration = ""
    }else{
      firstPlayer.style.textDecoration = ""
      secondPlayer.style.textDecoration = "underline red"
  }
  }