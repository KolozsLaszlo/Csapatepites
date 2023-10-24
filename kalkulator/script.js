function openNav() {
  document.getElementById('mySidenav').style.width = '250px'
  document.getElementById('container').style.marginLeft = '250px'
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0'
  document.getElementById('container').style.marginLeft = '0'
  document.body.style.backgroundColor = 'white'
}
function sajatMuvelet() {
  // Ebben a függvényben végezd el a kívánt műveletet
  main.innerHTML = ''
}

// Az "a" elem kiválasztása az azonosítója alapján
var gomb = document.getElementById('muveletGomb')
var main = document.getElementById('main')
var alap = document.getElementById('alap')
var ezust = document.getElementById('ezust')
var arany = document.getElementById('arany')

// Eseménykezelő hozzárendelése a "click" eseményhez
gomb.addEventListener('click', sajatMuvelet)

document.addEventListener('DOMContentLoaded', function () {
  const participantsInput = document.getElementById('participants')

  const priceInput = document.getElementById('price')

  const calculateButton = document.getElementById('calculate')

  const totalOutput = document.getElementById('total')

  calculateButton.addEventListener('click', function () {
    const participants = parseInt(participantsInput.value)

    const price = parseFloat(priceInput.value)

    if (!isNaN(participants) && !isNaN(price)) {
      const total = participants * price

      totalOutput.textContent = `Végösszeg: ${total} Ft`
    } else {
      totalOutput.textContent = 'Hibás adatok'
    }
  })
})

function myFunction() {
  var dropdown = document.getElementById('myDropdown')
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none'
  } else {
    dropdown.style.display = 'block'
  }
}

function megjelen() {
  var menu = document.getElementById('menu')
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}
function megjelen2() {
  var menu = document.getElementById('menu2')
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}
function megjelen3() {
  var menu = document.getElementById('menu3')
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}
