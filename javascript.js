//On charge les information utile
const statut = document.querySelector("h2")
const firstDé = document.querySelector("#firstDé")
const secondDé = document.querySelector("#secondDé")
const globalScore1 = document.querySelector("#globalScore1")
const globalScore2 = document.querySelector("#globalScore2")

let joueur1 = true 
let joueur2 = false
let scoreRound1 = 0
let scoreGlobal1 = 0
let scoreRound2 = 0
let scoreGlobal2 = 0


document.querySelector("#launch").addEventListener("click",getNumber)
conditionsVictoire()
document.querySelector("#hold").addEventListener("click",setNumber)
conditionsVictoire()

// dé 
function getNumber(){
  let Numb = 0
  //si c'est le tour du joueur 1
  if(joueur1 == true){
    statut.innerHTML = `C'est le tour du joueur 1 `
    numb = Math.floor((Math.random() * 6) + 1)

      if(numb === 1){
        //passe tour, scoreround = 0 et joueur a false pour passe la main au joueur suivant
        joueur1 = false
        scoreRound1 = 0
        return
      }else{
        //on incrémente scoreRound avec numb (les numéro du dé)
        scoreRound1 = scoreRound1 + numb
        firstDé.innerHTML = scoreRound1
      } 
  }else{
    //si le joueur est a false alors c'est le tour du joueur 2
    statut.innerHTML = `C'est le tour du joueur 2 `
    numb = Math.floor((Math.random() * 6) + 1)
    console.log(numb)
      if(numb === 1){
        //passe tour, scoreround = 0 et joueur a false pour passe la main au joueur suivant
        joueur1 = true
        scoreRound2 = 0
        return 
      }else{
      //on incrémente scoreRound avec numb (les numéro du dé)
      scoreRound2 = scoreRound2 + numb
      secondDé.innerHTML = scoreRound2
    }}
  return scoreRound1 & scoreRound2
}

function setNumber(){
  if(joueur1 == true){
    //si c'est le joueur 1 qui veut save son score
    scoreGlobal1 = scoreGlobal1 + scoreRound1
    globalScore1.innerHTML = scoreGlobal1
    scoreRound1 = 0
    joueur1 = false
  }else{
    scoreGlobal2 = scoreGlobal2 + scoreRound2
    globalScore2.innerHTML = scoreGlobal2
    scoreRound1 = 0
    joueur1 = true
  }
}
