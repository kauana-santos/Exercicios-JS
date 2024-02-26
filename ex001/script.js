function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    var data = new Date()
     var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`


    if (hora >= 0 && hora <12) {
         img.src='./img/manha.jpg'
        document.body.style.background = '#DDA0DD'
    } else if (hora >=12 && hora <18) {
        img.src = './img/tarde.jpg'
        document.body.style.background = '#F4A460'
    } else {
        img.src = './img/fotonoite.jpg'
        document.body.style.background = '#6C7B8B'
    }
}

