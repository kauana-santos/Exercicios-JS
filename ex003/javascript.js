 var listaFilme= []
// listaFilme[0] = "https://www.claquete.com/fotos/filmes/poster/14458_medio.jpg"



// for (var i = 0; i< listaFilme.length; i++) {
//     document.write("<img scr=" + listaFilme[i] + ">")
// }

function adicionarFilme() {
    var filmeFav = document.getElementById('filme').value;
    var elementoListaF = document.getElementById('listaFilme');
    

    elementoListaF.innerHTML = elementoListaF.innerHTML + "<img src=" + filmeFav + ">";

    document.getElementById('filme').value = ''
}