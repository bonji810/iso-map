import './style.css'
// @ts-ignore
import * as Const from './const.js'
import * as PIXI from 'pixi.js'

import Texture from './images/texture.png'

let canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let width = window.innerWidth
let height = window.innerHeight

const app = new PIXI.Application({
  width: width,
  height: height,
  backgroundColor: 0xff0000,
})
canvas?.appendChild(app.view)

// マウスがのっているタイル
let currentTile = {
  tile: null,
  x: 0,
  y:0,
  id: 0
}

// 操作中のアイテム
let currentItem = null

// マス[0,0]のコンテナ内座標
let originFloorContainer = new PIXI.Point(0,0)

// 床タイルの座標配列
let p_floor = new Array()

// コンテナ管理用配列
let containerList = new Array()

// アイテム捜査中かどうか
let isMoving = false

// 配置マップ
const itemMap = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
];

// コンテナ生成
  app.stage.sortableChildren = true

  // 情報コンテナ
  const infoContainer = new PIXI.Container()
  containerList.push(infoContainer)

  // ルームの床用コンテナ
  const floorContainer = new PIXI.Container()
  floorContainer.sortableChildren = true
  containerList.push(floorContainer)

  // ルームアイテム用コンテナ
  const itemContainer = new PIXI.Container()
  itemContainer.sortableChildren = true
  containerList.push(itemContainer)

  console.log(app)


// メイン関数
const draw = () => {
  

  // 背景と同サイズの透過displayObjectを配置
  let back = new PIXI.Graphics()
  .beginFill(0x1099bb)
  .drawRect(0, 0, window.innerWidth, window.innerHeight)
  .endFill()

  app.stage.addChild(back)
  back.interactive = true

  initFloor()
  Array.prototype.forEach.call(containerList, (c) => {
    app.stage.addChild(c)
  })
}

const initFloor = () => {
    let cx = width / 2 - 5;
    let cy = height / 2;
    let dw = Const.ROOM_UNIT.width / 2;
    let dh = Const.ROOM_UNIT.height / 2;
    // 背景コンテナ内での各タイルのローカル座標
    p_floor =
    [
        [cx-dw*7,dh*7],[cx-dw*6,dh*6],[cx-dw*5,dh*5],[cx-dw*4,dh*4],[cx-dw*3,dh*3],[cx-dw*2,dh*2],[cx-dw,dh],[cx,0],
        [cx-dw*6,dh*8],[cx-dw*5,dh*7],[cx-dw*4,dh*6],[cx-dw*3,dh*5],[cx-dw*2,dh*4],[cx-dw,dh*3],[cx,dh*2],[cx+dw,dh],
        [cx-dw*5,dh*9],[cx-dw*4,dh*8],[cx-dw*3,dh*7],[cx-dw*2,dh*6],[cx-dw,dh*5],[cx,dh*4],[cx+dw,dh*3],[cx+dw*2,dh*2],
        [cx-dw*4,dh*10],[cx-dw*3,dh*9],[cx-dw*2,dh*8],[cx-dw,dh*7],[cx,dh*6],[cx+dw,dh*5],[cx+dw*2,dh*4],[cx+dw*3,dh*3],
        [cx-dw*3,dh*11],[cx-dw*2,dh*10],[cx-dw,dh*9],[cx,dh*8],[cx+dw,dh*7],[cx+dw*2,dh*6],[cx+dw*3,dh*5],[cx+dw*4,dh*4],
        [cx-dw*2,dh*12],[cx-dw,dh*11],[cx,dh*10],[cx+dw,dh*9],[cx+dw*2,dh*8],[cx+dw*3,dh*7],[cx+dw*4,dh*6],[cx+dw*5,dh*5],
        [cx-dw,dh*13],[cx,dh*12],[cx+dw,dh*11],[cx+dw*2,dh*10],[cx+dw*3,dh*9],[cx+dw*4,dh*8],[cx+dw*5,dh*7],[cx+dw*6,dh*6],
        [cx,dh*14],[cx+dw,dh*13],[cx+dw*2,dh*12],[cx+dw*3,dh*11],[cx+dw*4,dh*10],[cx+dw*5,dh*9],[cx+dw*6,dh*8],[cx+dw*7,dh*7]
    ];

    for(let i = 0; i < p_floor.length; i++) {
      let tile;
      if(Const.TILE_MAP[i]) {
        // いったん条件分けしない
        let texture = PIXI.Texture.from(Texture)
        tile = new PIXI.Sprite(texture)
        tile.width = 100
        tile.height = 50
      } else {
        let texture = PIXI.Texture.from(Texture)
        tile = new PIXI.Sprite(texture)
        tile.width = 100
        tile.height = 50
      }
      
      tile.interactive = true
      tile.x = p_floor[i][0]
      tile.y = p_floor[i][1]
      // @ts-ignore
      tile.floorId = i
      tile.zIndex = p_floor[i][1] + 1
      floorContainer.addChild(tile)
    }
}

draw()