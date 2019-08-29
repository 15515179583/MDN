let main = document.querySelector('.main')
let btn = document.querySelectorAll('.submit')
let map = document.querySelector('#grids')
let number = document.querySelector('#number')
let mark = document.querySelector('.mark')
let divArr = new Array()
let grids = new Array()
let arr = new Array()
let divs = new Array()

let flag = false
let isOne = true

let lines = 0
let columns = 0
let sweeps = 0
let gridss = 0
let count = 0 //记录点击数
map.onchange = ()=> {
  if (map.value == 81) {
    number.value = 9
    number.placeholder = 9
    mark.style.height = mark.style.minHeight
  } else if(map.value == 225) {
    number.value = 50
    number.placeholder = 50
    mark.style.height = 30+15*25+14*2 + 'px'
  } else {
    number.value = 99
    number.placeholder = 99
    mark.style.height = 30+20*25+19*2 + 'px'
  }
}

btn.forEach(element => {
  element.addEventListener('click', () => {
    click(element)
  })
});

function click(element) {
  if ( element.value === 'reset' ) {
    element.className = "submit reset"
    setTimeout(() => {
      element.className = "reset submit clicked";
    },0)
    reset()
    flag = false
    btn[0].disabled = ''
  } else {
    element.className = "submit"
    setTimeout(() => {
      element.className = "submit clicked";
    },0)
    if(!flag){
      flag = true
      element.disabled = 'disabled'
      start()
    } else {
      console.log(flag)
    }
  }
}
function start() {
  gridss = document.querySelector('#grids').value
  sweeps = document.querySelector('#number').value
  mark.style.display = 'none'
  createGrids(gridss,sweeps)
  shuffle()
  sliceArray(Math.sqrt(gridss))
  getDivs()
  addClickEvent()
}

function reset() {
  main.parentNode.removeChild(main);

  let mainTag = document.querySelector('main')
  div = document.createElement('div')
  div.className = 'main'
  mainTag.appendChild(div)
  main = document.querySelector('.main')

  divArr.splice(0, divArr.length)
  grids.splice(0, grids.length)
  arr.splice(0, arr.length)
  count = 0

  gridss = document.querySelector('#grids').value
  sweeps = document.querySelector('#number').value
}
function createGrids(size , number) {
  for (let i = 0; i < size; i++)
    if(i < number) {
      let grid  = {
        id: i,
        state: false,
        sweep: true,
        number: 9
      }
      grids.push(grid)
    } else {
      let grid  = {
        id: i,
        state: false,
        sweep: false,
        number: 0
      }
      grids.push(grid)
    }
}

function shuffle() {
  for(let i = grids.length-1; i >0 ; i--) {
    let randomIndex = Math.floor(Math.random()*(grids.length-1))
    let temp = grids[i]
    grids[i] = grids[randomIndex]
    grids[randomIndex] = temp
  }
}

//console.log(grids)
function sliceArray(minColumns) {
  let reasonable = grids.length % minColumns == 0 ? true:false
  let newColumns = minColumns
  columns = minColumns
  do {
    if(reasonable) {
      lines = grids.length/columns
      //console.log(grids.length + '  '+ columns + '  ' + lines)
      break
    } else {
      newColumns++
      console.log('分行失败，已调整列数为' + newColumns)
      reasonable = grids.length % newColumns == 0 ? true:false
    }
    columns = newColumns
  } while (newColumns< 10 + columns)
  
  if(lines == 0){
    console.log('棋盘创建失败，请选择合理的棋格数')
  } else {
    for (let i = 0; i < lines; i++) {
      arr.push(grids.slice(i*lines,i*lines+lines))
    }
    arr.forEach((element, index) => {
      element.forEach((ele, inde) =>{
        ele.x = index
        ele.y = inde
      })
    })
  }
  fillNumber(arr, lines, columns)
  for(let i = 0; i < lines; i++){
    for(let j = 0; j < columns; j++) {
      div = document.createElement('div')
      div.index = arr[i][j].id
      div.value = arr[i][j].number
      div.dirx = arr[i][j].x
      div.diry = arr[i][j].y
      div.state = arr[i][j].state
      div.className = 'grid'
      main.appendChild(div)
    }
  }
  main.style.width = 25*lines +2*(lines-1) +'px'
  main.style.gridTemplateColumns = 'repeat(' + lines + ', 25px)'
}

function fillNumber(arr, lines, columns) {
  let dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
  for(let i = 0; i < lines; i++){
    for(let j = 0; j < columns; j++) {
      for(let k = 0; k < 8; k++) {
        if(i + dir[k][0] < 0 || i+dir[k][0] >= lines || j + dir[k][1] < 0 || j + dir[k][1] >= columns){
          continue
        }
        if(arr[i+dir[k][0]][j+dir[k][1]].sweep == true && arr[i][j].number != 9) {
          arr[i][j].number += 1
        }
      }
    }
  }
}
function addColor(element,color = element.style.color ,backgroundColor = element.style.backgroundColor, value = element.value) {
  element.textContent = value
  element.style.backgroundColor = backgroundColor
  element.style.color = color
}
function getDivs() {
  divs = Array.from(document.querySelectorAll('.grid'))
  for (let i = 0; i < lines; i++) {
    divArr.push(divs.slice(i*lines,i*lines+lines))
  }
}
function gameOver() {
  divs.forEach(element => {
    if(element.value == 9){
      addColor(element, 'rgb(240, 78, 49)' , '#fbb', '😡')
    }
  });
  setTimeout(() => {
    mark.style.display = 'block'
  }, 1000);
}
function changeState(element) {
  if(arr[element.dirx][element.diry].state == false) {
    arr[element.dirx][element.diry].state = true;
    count++
  }
}
function addClickEvent() {
  main.addEventListener('click', (e) => {
    switch(e.target.value) {
      case 0: scanGrid(e.target); break
      case 1: changeState(e.target); addColor(e.target, 'rgb(80, 228, 159)', '#aaa'); break
      case 2: changeState(e.target); addColor(e.target, 'rgb(230, 199, 112)', '#aaa'); break
      case 3: changeState(e.target); addColor(e.target, 'rgb(239, 243, 30)', '#aaa'); break
      case 4: 
      case 5: 
      case 6: 
      case 7: 
      case 8: changeState(e.target); addColor(e.target, 'rgb(255, 115, 48)', '#aaa'); break
      case 9: addColor(e.target, 'rgb(240, 78, 49)' , '#fbb', '😡'); gameOver(); break
    }
    if(count == gridss - sweeps) {
      console.log('你获胜了')
      mark.style.display = 'block'
    }
  })
  main.addEventListener('contextmenu', (e) =>{
    if(e.path.length == 9){
      if (e.target.textContent == '🚩') {
        addColor(e.target, '' , '', '')
      } else {
        addColor(e.target, '' , '', '🚩')
      }
    }
    e.preventDefault()
  })
}

function scanGrid(base) {
  let dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
  let scanArr = new Array()
  arr[base.dirx][base.diry].state = true
  count++
  scanArr.push(arr[base.dirx][base.diry])
  while (scanArr.length != 0){
    let element = scanArr.pop()
    //console.log(scanArr.length)
    divArr[element.x][element.y].style.backgroundColor = '#ccc'
    for(let k = 0; k < 8; k++) {
      if(element.x + dir[k][0] < 0 || element.x + dir[k][0] >= lines || element.y + dir[k][1] < 0 || element.y + dir[k][1] >= columns){  
        continue
      }
      if(arr[element.x+dir[k][0]][element.y+dir[k][1]].state == false && arr[element.x+dir[k][0]][element.y+dir[k][1]].number == 0) {
        scanArr.push(arr[element.x+dir[k][0]][element.y+dir[k][1]])
        arr[element.x+dir[k][0]][element.y+dir[k][1]].state = true
        count++
      } else if (arr[element.x+dir[k][0]][element.y+dir[k][1]].state == false && arr[element.x+dir[k][0]][element.y+dir[k][1]].number != 9) {
        let a = arr[element.x+dir[k][0]][element.y+dir[k][1]].state == false && arr[element.x+dir[k][0]][element.y+dir[k][1]].number
        let a_x = element.x+dir[k][0]
        let a_y = element.y+dir[k][1]
        arr[a_x][a_y].state = true
        count++
        switch(a) {
          case 1: addColor(divArr[a_x][a_y], 'rgb(80, 228, 159)', '#aaa'); break
          case 2: addColor(divArr[a_x][a_y], 'rgb(230, 199, 112)', '#aaa'); break
          case 3: addColor(divArr[a_x][a_y], 'rgb(239, 243, 30)', '#aaa'); break
          case 4: 
          case 5: 
          case 6: 
          case 7: 
          case 8: addColor(divArr[a_x][a_y], 'rgb(255, 115, 48)', '#aaa'); break
        }
      }
    }
  }
}

