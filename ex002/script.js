function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[Erro]: Verifique os dados e tente novamente')
    } else {
        var fsex =  document.getElementsByTagName('radsex')
        var idade = ano - fAno.value
        var genero = ''
            if (fsex[0]) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }

        res.innerHTML = `Detecmanos ${genero} com ${idade} anos de idade.`
    }
}

