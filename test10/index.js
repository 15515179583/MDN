/**
 * 状态：
 * new 新
 * hot 热门
 * event 有活动
 */
let states = {
  'new': 'New',
  'hot': 'Hot',
  'event': '有活动'
}
let count = 1;
let games = [
  {
    id: 1,
    state: 'new',
    photo: 'default.png',
    name: '猜数字小游戏',
    info: '猜数字',
    href: 'number'
  },
  {
    id: 2,
    state: 'event',
    photo: '1.jpg',
    name: '扫雷',
    info: 'boom~',
    href: 'story'
  },
  {
    id: 3,
    state: 'hot',
    photo: '2.jpg',
    name: '坦克大战',
    info: 'boom~',
    href: 'story'
  },
  {
    id: 4,
    state: 'hot',
    photo: 'default.png',
    name: '你猜',
    info: '好多好多好多好多好多好多好多好多好多好多好多好多好多好多',
    href: 'number'
  },
  {
    id: 5,
    state: 'event',
    name: '你猜',
    info: '好多好多好多好多好多好多好多好多好多好多好多好多好多好多',
    href: 'number'
  },
  {
    id: 6,
    state: 'new',
    name: '测试',
    info: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
    href: 'story'
  },
]
let game = {
  id: Number,
  state: String,
  photo: String,
  name: String,
  info: String,
  href: String
}

function creatGame() {
  game.id = count++
  game.name = name
  game.state = state
  game.photo = photo
  game.info = info
  games.push(game)
}

(function showGames() {
  let Games = document.querySelector('.games')
  games.forEach(element => {
    if (element.photo =='' | element.photo == undefined) {
      element.photo = 'default.png'
    }
    div = document.createElement('div')
    div.className = 'game'
    div.href = element.href
    console.log(element.href)
    console.log(element.id)
    div.onclick = (element) => {
      let href = ''
      if (element.target.parentElement.href) {
        href = element.target.parentElement.href
      } else {
        href = element.target.href
      }
      window.location.href = ('http://127.0.0.1:5500/test10/games/' + href + '/game.html')
    }
    state = document.createElement('p')
    state.className = 'game-state ' + element.state + ' '
    state.textContent = states[element.state]
    img = document.createElement('img')
    img.className = 'game-photo'
    img.src = 'images/' + element.photo
    title = document.createElement('p')
    title.className = 'game-name'
    title.textContent = element.name
    info = document.createElement('p')
    info.className = 'game-info'
    info.textContent = info.title = element.info
    div.appendChild(state)
    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(info)
    Games.appendChild(div)
  })
})()