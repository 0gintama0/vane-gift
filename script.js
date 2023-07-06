const textDiv = document.querySelector('.text')
const body = document.body

let i = 0
let j = 0

const EQUIPMENT_START = 2
const EQUIPMENT_END = 8

const mission = [
  'Classificazione: Missione Impossibile',
  'Equipaggiamento necessario:',
  'Occhiali da sole (da indossare anche di notte)',
  'Cappello parasole (per lo stile "pirata chic")',
  "Costume da bagno (dovra' seguire i canoni di sexaggine del tuo ragazzo)",
  "Asciugamano (utile a tenere nascosta l'erezione del tuo ragazzo in pubblico)",
  'Protezione solare (per la pelle delicata dei pirati)',
  "T-shirt (con possibilita' di rimozione facilitata' per il tuo ragazzo)",
  'Punto di recupero degli aspiranti pirati:',
  'Akti Kountouriotou, Kos 853 00, Greece',
  'Orario concordato:',
  "08:35 - Presentati al punto di incontro 25 minuti prima dell'orario scelto",
  'Luogo di ritorno:',
  'stesso luogo di recupero',
  'Termini di cancellazione:',
  'Cancella prima delle 9:00 del 26 luglio e il tuo nome verrà cancellato dalla lista dei coraggiosi.',
  'Per maggiori dettagli:'
]

function type () {
  if (i < mission.length) {
    let divEl = document.createElement('div')
    divEl.classList.add('mission')

    const currentString = mission[i]
    if (j < currentString.length) {
      textDiv.innerHTML += currentString.charAt(j)

      if (j % 4 === 0) {
        const audio = new Audio('audio.mp3')
        audio.volume = 0.3
        audio.play()
      }
      j++
      setTimeout(type, 60) 
    } else {
      textDiv.innerHTML += '<br>'

      textDiv.addEventListener('touchstart', handleTouchStart) 
      body.addEventListener('click', handleTouchStart)
    }
  }
}

function handleTouchStart () {
  if (i !== mission.length - 1) {
    if (i === 1 || i === 7) {
      setTimeout(null, 2000) 
      textDiv.innerHTML = ''
    }
    i++
    j = 0

    textDiv.removeEventListener('touchstart', handleTouchStart)
    body.removeEventListener('click', handleTouchStart)
    type()
  } else {
  setTimeout(null, 4000) 
  textDiv.innerHTML = ''
  a = document.createElement('a');
  a.target = '_blank';
  a.href = 'https://www.getyourguide.it/kos-l410/3-crociera-dell-isola-kalymnos-pserimos-plati-t395185/';
  a.innerText = 'MISSION IMPOSSIBLE';
  textDiv.appendChild(a);
  }
}

type()
