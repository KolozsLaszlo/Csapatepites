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

// Eseménykezelő hozzárendelése a "click" eseményhez
gomb.addEventListener('click', sajatMuvelet)
