const btn = document.querySelectorAll('.submit')
console.log(btn)
let randomNumber = getRandomInt(0,99)
let count = 1
let results = []

btn.forEach(element => {
  element.addEventListener('click', () => {
    click(element)
    console.log(randomNumber)
    console.log(element)
  })
});

function click(element) {
  if ( element.value === 'reset' ) {
    element.className = "submit reset"
    setTimeout(() => {
      element.className = "reset submit clicked";
    },0)
    reset()
  } else {
    element.className = "submit"
    setTimeout(() => {
      element.className = "submit clicked";
    },0)
    judge()
    document.querySelector('#number').value = ''
  }
}

/**
 * 获得随机整数
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
/**
 * 重置游戏
 */
function reset() {
  tr = document.querySelectorAll(".data")
  tr.forEach(element => {
    element.parentNode.removeChild(element)
  });
  randomNumber = getRandomInt(0,100)
  count = 1
  results = []
}

/**
 * 判断
 */
function judge() {
  let input = {}
  let number = document.querySelector('#number').value
  let result = false
  if (/^(0|[1-9][0-9]*)$/.test(number) && number >=0 && number <= 100 && count <= 10) {
    number == randomNumber?result = true: number > randomNumber?result='你猜大了': result='你猜小了'
    input.id = count++
    input.number = number
    input.result = result
    createRow(input)
    results.unshift(input)
  } else if (count == 11) {
    alert('游戏失败！！！你在10次内未能找到答案')
  } else {
    console.log('你的输入有误')
  }
}

/**
 * 结果渲染
 */
function createRow(input) {
  tbody = document.querySelector(".results")
  tr = document.createElement('tr')
  td1 = document.createElement('td')
  td2 = document.createElement('td')
  td3 = document.createElement('td')
  let message = ''
  tr.className = 'data'
  if (input.result == true ) {
    tr.className += ' ok'
    message = '你猜对了'
  } else {
    message = input.result
  }
  td1.textContent = input.id
  td2.textContent = message
  td3.textContent = input.number
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tbody.appendChild(tr)
  console.log(input.id)
  console.log(td1)
}