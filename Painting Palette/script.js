// this section sets default values and basic functions of current color, mode and grid size

// create default gold color, color selected button and grid size variables
const DEFAULT_COLOR = '#ffd700'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

// set default color to gold, mode to selected color and grid size to 16X16
let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

// function to set current color, takes new color variable
function setCurrentColor(newColor) {
  currentColor = newColor
}

// function to set current point mode, takes new mode variable
function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

// function to set current grid size, takes new size variable
function setCurrentSize(newSize) {
  currentSize = newSize
}

// this section sets html elements and variables for the script
// and which actions call which functions along with its arguement

//set variables for all html elements
const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')

// colorpicker when changed, set current color to target value
colorPicker.onchange = (e) => setCurrentColor(e.target.value)

// color button when clicked, set current mode to selected color mode
colorBtn.onclick = () => setCurrentMode('color')

// rainbow button when clicked, set current mode to rainbow mode
rainbowBtn.onclick = () => setCurrentMode('rainbow')

// eraser button when clicked, set current mode to eraser mode
eraserBtn.onclick = () => setCurrentMode('eraser')

// clear button when clicked, calls reloadgrid function which clears the grid
clearBtn.onclick = () => reloadGrid()

// slider button when moved, sets updated size as the target value
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)

// slider button on change, sets change size as the target value
sizeSlider.onchange = (e) => changeSize(e.target.value)

//set mousedown default as false, when mouse is clicked on document, mousedown is true
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// on sizeslider onchange, set current size of grid to slider value and reload the grid
function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

// when calling updatesize value, set palette size display as value x value for user to see
function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

// reloading the grid clears the grid and sets grid to current size
function reloadGrid() {
  clearGrid()
  setupGrid(currentSize)
}

// cleargrid function sets grid to empty 
function clearGrid() {
  grid.innerHTML = ''
}

// this section sets and creates the grid along with its chosen size
// the grid is just a set amount of div's with grid-element class, by default there will be 64 div's, each representing a paintable area that is white by default. 
// when painting over a grid element div, it changes the background color of it

// this function adds grid size on columns and rows to main the grid element
function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  // add 1 row and column of grid element div as long as i is less than the grid set size
  // on mouseover or mousedown on a cell on a grid element, change color of that div
  // append grid element to grid
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add("grid-element")
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement)
  }
}

//this section sets the colors and how it is selected
// change color function takes e, when mouse over and mousedown
// if current mode is rainbow, create random RGB 
// set background color as as rgb(random,random,random)
// else if mode is color, set background color as current color
// else if current mode is erasor, set background color as white
function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe'
  }
}

// function to switch between modes
// sets current mode 
function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
  }

  // sets new mode as active
  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (newMode === 'color') {
    colorBtn.classList.add('active')
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
  }
}

// on window load, set grid as default size of 16x16 and active button as selected color
window.onload = () => {
  setupGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}