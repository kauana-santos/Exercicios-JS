function verificarChute(){
    var numeroSecreto = 500;
    var valor = document.getElementById('numSecreto').value;
    
   
        if (valor == numeroSecreto) {
            alert('Acertou!')
        } else if ( valor < numeroSecreto){
            alert('O número secreto é maior')
        } else if (valor > numeroSecreto){
            alert("O número secreto é menor")
        }

        document.getElementById(numSecreto).value = ''

}