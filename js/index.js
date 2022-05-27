//Esta es una mini-trivia en la que tenés que adivinar cuál es la mejor canción del nuevo album de Bad Bunny
let entrada = prompt ("¿Cuál es la mejor canción del nuevo album de Bad Bunny?").toLowerCase();
//Si la entrada es correcta, termina el juego
if (entrada == "me porto bonito") {
    alert("muy bien, tenés buen gusto ;)")
} else { //si no es correcta, se debe repetir la entrada hasta acertar
    while (entrada != "me porto bonito") {
        alert("mmm no, " + entrada + " esta buena, pero no es la mejor")
        entrada = prompt("volvé a intentarlo");
    }
    if (entrada = "me porto bonito") {
        alert ("felicidades, acertaste :)")
    }
}