const preguntas = [
    {
        "id": 0,
        "pregunta": "¿Qué desastre natural se mide con escala de Richter?",
        "respuestas": ["Tornados", "Terremotos", "Inundaciones", "Huracanes"],
        "correcta": "Terremotos"
    },
    {
        "id": 1,
        "pregunta": "¿Cuál es el planeta más cercano al sol?",
        "respuestas": ["Tierra", "Marte", "Mercurio", "Venus"],
        "correcta": "Mercurio"
    },
    {
        "id": 2,
        "pregunta": "¿De qué sustancia están hechas las uñas?",
        "respuestas": ["Serotonina", "Epidermis", "Melanina", "Queratina"],
        "correcta": "Queratina"
    },
    {
        "id": 3,
        "pregunta": "¿Qué significa el ADN?",
        "respuestas": ["Ácido desoxirribonuclear", "Ácido duoribonuclear", "Ácido duoxirribonucleico", "Ácido desoxirribonucleico"],
        "correcta": "Ácido desoxirribonucleico"
    }
]
let numeroPregunta = 0
const elemPregunta = document.querySelector('.pregunta')
const elemRespuestas = document.getElementsByClassName('respuesta')
const botonSiguiente = document.querySelector('.siguiente-pregunta')
//poblar la pregunta y respuestas iniciales
elemPregunta.innerText = preguntas[numeroPregunta].pregunta
for (let i = 0; i < preguntas[numeroPregunta].respuestas.length; i++) {
    elemRespuestas[i].innerText = preguntas[numeroPregunta].respuestas[i]
}

//crear la función que comprueba si la respuesta clicada es la correcta
const esCorrecto = (event) => {
    respuesta = event.target
    respuesta.classList.add('clicado')
    if (respuesta.innerText == preguntas[numeroPregunta].correcta) {
        for (let i = 0; i < elemRespuestas.length; i++) {
            elemRespuestas[i].style.backgroundColor = 'black'
        }
        respuesta.style.backgroundColor = 'green'
    } else {
        respuesta.style.backgroundColor = 'red'
        for (let j = 0; j < elemRespuestas.length; j++) {
            if (elemRespuestas[j].innerText == preguntas[numeroPregunta].correcta) {
                elemRespuestas[j].style.border = '2px solid green'
                elemRespuestas[j].style.color = 'green'
            }
        }
    }
    if (clicado.length > 0) {
        for (let i = 0; i < elemRespuestas.length; i++) {
            elemRespuestas[i].removeEventListener('click', esCorrecto)
        }
    }
}
//crear los listener pertinentes
for (let i = 0; i < elemRespuestas.length; i++) {
    elemRespuestas[i].addEventListener('click', esCorrecto)
}
const clicado = document.getElementsByClassName('clicado')

//crear función siguiente pregunta 
const siguientePregunta = () => {
    if(numeroPregunta < preguntas.length) {
        numeroPregunta = numeroPregunta + 1
        elemPregunta.innerText = preguntas[numeroPregunta].pregunta
        for (let i = 0; i < preguntas[numeroPregunta].respuestas.length; i++) {
            elemRespuestas[i].innerText = preguntas[numeroPregunta].respuestas[i]
            elemRespuestas[i].style.color = 'black'
            elemRespuestas[i].style.border = '2px solid black'
            elemRespuestas[i].style.backgroundColor = 'initial'
            elemRespuestas[i].addEventListener('click', esCorrecto)
        }
    }
}
botonSiguiente.addEventListener('click', siguientePregunta)