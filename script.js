saludoinicial()
let nombre =prompt ("Ingresa tu nombre🫵:")
alert  (" 💪 Bienvenido/a " + nombre + ("💪"))
let peso = prompt( "Ingresa tu peso:")
let edad = prompt ("Ingresa tu edad:")
let x = 1
function saludoinicial() {
    alert ("Bienvenido a FIT WITH ME , por favor ingresa los datos que necesitamos para brindarte nuestro asesoramiento personalizado📝 ")
}
while (x <=2){
    x++
    if ( edad >=20 && edad<=30 && peso>=60 && peso <=90 ){
        alert ( nombre + "El plan para usted es el siguiente💪: -20 minutos de caminata -20 minutos de ejercicio de fuerza - Incorporar alto indice de proteina🍗 , legumbre🥦, frutas🍓 y vitaminas⚡ ")
    }else if (edad >=31 && edad<=40 && peso>=60 && peso <=90 ){
      alert ( nombre + " El plan para usted es el siguiente💪: -30 minutos de caminata -30 minutos de ejercicio de fuerza - Incorporar alto indice de proteina🍗 , legumbre🥦, frutas🍓 y vitaminas⚡ ")
    }else if (edad>=41 && edad <=50&& peso>=60 && peso <=90 ){
        alert ( nombre + " El plan para usted es el siguiente💪: -30 minutos de caminata -30 minutos de ejercicio de fuerza - Incorporar alto indice de proteina🍗 , legumbre🥦, frutas🍓 y vitaminas⚡ ")
    }else if (edad>50 && peso>=60 && peso <=90){
       alert ( nombre + " El plan para usted es el siguiente💪: -30 minutos de caminata -30 minutos de ejercicio de fuerza - Incorporar alto indice de proteina🍗 , legumbre🥦, frutas🍓 y vitaminas⚡ ")   
    }else if (edad<=19) { 
       alert ( nombre + " Disfruta tu juventud y come saludable APROVECHALA🌞")
    }
    else {
        alert ("Cuida mejor tu salud; incorpora ejercicio de fuerza diario , mejora tu alimentacion y ve al doctor🧑‍⚕️ ")
    }
}
let planes = [
    { id: 1 , nombre: "plan basico" , rutaImagen: planBasico.jpg },
    { id: 2 , nombre: "plan Medio" , rutaImagen: planMedio.jpeg },
 ]