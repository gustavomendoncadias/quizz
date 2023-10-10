function VerificarResposta(){
    let respostaCerta
    respostaCerta = document.getElementById("alternativacerta").checked
    console.log(respostaCerta)
    if(respostaCerta == true){
        alert("Parabens!!!\nVoce Acertou.")
        }else{
            alert("que pena, nao foi dessa vez.")
    }
}

    




