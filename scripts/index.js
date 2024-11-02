
// alert("Bienvenido a mi portafolio!!!")

// const nombre = prompt("Como te llamas?");

// alert("Hola"+ nombre +"! Bienvenido a mi portafolio!");



// Array de frases
const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "La mente es todo. Lo que pienses, eso serás.",
    "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
    "La mejor venganza es un gran éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello.",
    "Nunca es demasiado tarde para ser lo que podrías haber sido.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "La única manera de hacer algo bien es hacerlo con el corazón.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "El fracaso es solo la oportunidad de comenzar de nuevo, esta vez de forma más inteligente.",
    "La clave del éxito es comenzar antes de estar listo.",
    "Cree que puedes y estarás a mitad de camino.",
    "La perseverancia es el camino al éxito.",
    "Los obstáculos son esas cosas espantosas que ves cuando apartas los ojos de tu meta.",
    "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente el mismo.",
    "El verdadero fracaso es no intentarlo.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."
];
// Función para generar una frase aleatoria
function generarFrase() {
    // Genera un índice aleatorio dentro del rango de la longitud del array de frases
    const indice = Math.floor(Math.random() * frases.length);
    // Obtiene la frase correspondiente al índice generado
    const fraseAleatoria = frases[indice];
    // Muestra la frase en el footer
    document.getElementById("frase").innerText = fraseAleatoria;
}
// Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
document.getElementById("btn-generar").addEventListener("click", generarFrase);
