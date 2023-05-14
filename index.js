let homeScore=document.getElementById("home-score")
let awayScore=document.getElementById("away-score")

let hscore=0
let ascore=0

function h1(){
    hscore++
    homeScore.textContent=hscore
}

function h2(){
    hscore+=2
    homeScore.textContent=hscore
}

function h3(){
    hscore+=3
    homeScore.textContent=hscore
}

function a1(){
    ascore++
    awayScore.textContent=ascore
}

function a2(){
    ascore+=2
    awayScore.textContent=ascore

}

function a3(){
    ascore+=3
    awayScore.textContent=ascore
}



