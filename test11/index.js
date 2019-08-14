let btnbubble = document.querySelector('.bubble')
let btnNoBubble = document.querySelector('.noBubble')
let btnStop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let state = document.querySelector('.state')
let stopedSpan = document.querySelector('.stoped')

let capture = false
let flag = true
let stop = false

let clicked = 0
let i=0
function stoped() {
  if (stop) {
    stop = false
    stopedSpan.textContent = ' 未阻止'
  } else {
    stop = true
    stopedSpan.textContent = ' 已阻止'
  }
  console.log(stop)
}
addEvent(capture, stop)
btnStop.addEventListener('click', () => {
  stoped()
})
reset.addEventListener('click', () => {
  remove()
})

btnbubble.addEventListener('click', () => {
  remove()
  capture = false
  flag = true
  state.textContent = '当前阶段为：冒泡阶段'
  console.log('当前阶段为：冒泡阶段')
  addEvent(capture)
  removeEvent()
  btnbubble.disabled = 'disabled'
  btnNoBubble.disabled = ''
})
btnNoBubble.addEventListener('click', () => {
  remove()
  capture = true
  flag =false
  state.textContent = '当前阶段为：捕获阶段'
  console.log('当前阶段为：捕获阶段')
  addEvent(capture)
  removeEvent()
  btnNoBubble.disabled = 'disabled'
  btnbubble.disabled = ''
})

function addEvent(capture) {
  let button = document.querySelector('.start')
  let div1 = document.querySelector('.box1')
  let div2 = document.querySelector('.box2')
  let div3 = document.querySelector('.box3')
  button.addEventListener('click', buttonClicked, capture)
  div1.addEventListener('click', box1Clicked, capture)
  div2.addEventListener('click', box2Clicked, capture)
  div3.addEventListener('click', box3Clicked, capture)
}

function removeEvent() {
  let button = document.querySelector('.start')
  let div1 = document.querySelector('.box1')
  let div2 = document.querySelector('.box2')
  let div3 = document.querySelector('.box3')
  button.removeEventListener('click', buttonClicked, flag)
  div1.removeEventListener('click', box1Clicked, flag)
  div2.removeEventListener('click', box2Clicked, flag)
  div3.removeEventListener('click', box3Clicked, flag)
}

function remove() {
  let ul = document.querySelector('.output')
  let lis = document.querySelectorAll('.result')
  for(i = 0; i < lis.length; i++) {
    ul.removeChild(lis[i])
  }
}

function buttonClicked(e) {
  let ul = document.querySelector('.output')
  let li = document.createElement('li')
  console.log(e)
  if(stop) {
    e.stopPropagation()
  } 
  li.textContent = '我是一个按钮吖'
  li.className = 'result'
  ul.appendChild(li)
  console.log('我是一个按钮吖')
}
function box1Clicked(e) {
  let div1 = document.querySelector('.box1')
  let ul = document.querySelector('.output')
  let li = document.createElement('li')
  if(stop) {
    e.stopPropagation()
  } 
  li.textContent = 'box1 最外层'
  li.className = 'result'
  ul.appendChild(li)
  console.log('box1 最外层')
}
function box2Clicked(e) {
  let div2= document.querySelector('.box2')
  let ul = document.querySelector('.output')
  let li = document.createElement('li')
  if(stop) {
    e.stopPropagation()
  } 
  li.textContent = 'box2 外层'
  li.className = 'result'
  ul.appendChild(li)
  console.log('box2 外层')
}
function box3Clicked(e) {
  let div1 = document.querySelector('.box3')
  let ul = document.querySelector('.output')
  let li = document.createElement('li')
  if(stop) {
    e.stopPropagation()
  } 
  li.textContent = 'box3 内层'
  li.className = 'result'
  ul.appendChild(li)
  console.log('box3 内层')
}