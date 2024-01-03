const head = document.body
let click
let button = []
let image = []
let catchDiv = document.createElement('div')
let catchH1 = document.createElement('h1')
let catchImg = document.createElement('img')
catchH1.textContent = 'Finally you catch him'
catchImg.id = 'catchImg'
catchImg.src = './image/catch.jpg'
catchDiv.appendChild(catchImg)
catchDiv.appendChild(catchH1)

let div
let h1 = document.createElement('h1')
let text = document.createElement('h1')
let endButton = document.createElement('button')
endButton.textContent = 'Start'
let endImg = document.createElement('img')
let container = document.createElement('div')

h1.textContent = 'Try to catch Hasbulla!'
h1.id = 'endH1'
endButton.id = 'endButton'
endImg.src = './image/endHas.png'
endImg.id = 'endImg'
container.id = 'container'
container.appendChild(h1)
container.appendChild(endImg)
container.appendChild(endButton)
head.appendChild(container)

function bigTimer(sec) {
  timer = setInterval(function () {
    let none = image[Math.floor(Math.random() * 12)]
    sec--
    if (sec % 2 == 0) {
      none.src = './image/has.png'
      setTimeout(function () {
        none.src = './image/hole.png'
      }, 1000)
    }
    if (click == 0) {
      end()
    }
  }, 1000)
}
const start = () => {
  div = document.createElement('div')
  div.id = 'game-container'
  text.textContent = 'Catch Hasbulla 5 times!'
  head.appendChild(text)

  click = 5

  for (let i = 0; i < 12; i++) {
    button[i] = document.createElement('button')
    image[i] = document.createElement('img')
    image[i].src = './image/hole.png'
    button[i].id = `game-button`
    image[i].id = 'game-img'
    button[i].appendChild(image[i])
    div.appendChild(button[i])
  }
  setTimeout(function () {
    text.remove()
    head.appendChild(div)
  }, 1500)

  button.map((e) =>
    e.addEventListener('click', function () {
      console.log(e.querySelector('img').src)
      if (
        e.querySelector('img').src === 'http://127.0.0.1:8080/image/has.png'
      ) {
        click -= 1
        text.textContent = `Catch Hasbulla ${click} times`

        e.querySelector('img').src = './image/nohas.png'
      }
    })
  )
  bigTimer(10)
}

const end = () => {
  clearInterval(timer)
  button.map((e) => e.remove())
  div.remove()
  text.remove()
  head.appendChild(catchDiv)

  setTimeout(function () {
    catchDiv.remove()
    head.appendChild(container)
  }, 2500)
}
endButton.addEventListener('click', function () {
  container.remove()
  start()
})
