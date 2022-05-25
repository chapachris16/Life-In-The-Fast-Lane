// Create function for players car to move up down left right based on arrow keys

// Create function that is a timer for player to need to get gas(This will be a loss condition if you run out of gas)

// Create a function for opposing cars(obstacles another loss condition) if player car collides with another car game over

// Create function to detect game over 

// Create function that causes the obstacles to move faster over time(maybe create an setInterval() )

// Function for keeping track of allotted time survived in-game. At game over display how long the player survived

// Maybe randomize obstacles to be a traffic cone, tire in the road, trashcan, or roadspikes

// https://opengameart.org/content/red-car-top-down Player Car sprite



// https://www.pixilart.com/draw/gas-can-0d8faf0067e0f64 pixelated gas can for game

// Set Variables for Game to be called
let obstacles
let gasCan
let game = document.getElementById('game') // access canvas from html
let ctx = game.getContext('2d') // creates canvas in html
let timer = document.getElementById('timer')
let start = document.getElementById('start')// access start button from html
let playerOne // global variable to be declared
let gameActive = true
let gameInterval // global variable for game timing interval
let can = document.getElementById('gas-can')// access image to use for gas can obstacle
let raceCar = document.getElementById('player') // access image to use for player sprite
let score = document.getElementById('score')// access element from html
let music = document.getElementById('audio')
// 

// class creator for player 
class Car{
    constructor(x, y, color, width, height){
        this.x = x
        this.y = y
        this.color = color
        this.height = height
        this.width = width 
        this.alive = true
    }
    // Method to create car on screen
    render(){
        ctx.fillStyle = this.color
        // uses image on canvas instead of rectangle
        ctx.drawImage(raceCar,this.x,this.y, this.width, this.height) 
    }
}
// class creator for gascan
class Obstacle{
    constructor(x,y,color,width,height){
        this.x = x
        this.y = y
        this.color = color
        this.height = height
        this.width = width 
        this.alive = true
    }
    // Method to create obstacle on screen
    render(){
        ctx.fill = this.color
        // uses image on canvas instead of rectangle
        ctx.drawImage(can, this.x,this.y, this.width, this.height) 
    }
}
// 
window.addEventListener('DOMContentLoaded',((e) =>{
    
}) )

// function layout for movement
let movement = ((e) =>{
    console.log(`key pressed: ${e.key}`)
    switch (e.key){
        case "ArrowLeft":
            playerOne.x > 10 ? playerOne.x -= 20: null
            break
        case 'ArrowRight':
            playerOne.x < 490 ? playerOne.x += 20: null
            break
        case 'ArrowUp': 
            playerOne.y > 10 ? playerOne.y -= 10: null
            break
        case 'ArrowDown': 
            playerOne.y < 470 ? playerOne.y += 10: null
            break
    }
        console.log(playerOne)
})
// Event listener for key movements and how to respond
document.addEventListener('keydown', movement)
// 


// hit detection
function detectHit(p1, p2){
    let hitTest =
        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; 

    if(hitTest){
        console.log('Gas refilled')
        console.log('collision')
        // adds score to game
        let gameScore = Number(score.textContent)
        let NewScore = gameScore + 100
        score.textContent = (NewScore)
        // function to render new gas can
        return newGasCan()
    } else{
        return false
        
        }
    }

// starts game and enables game loop, starts music, renders objects on canvas
function gameStart(){
    console.log('Game has started')
    playerOne = new Car(250,400,'red',30,50)
    gasCan = new Obstacle((Math.random()* 440),10,'blue',80,50)
    playerOne.render()
    gameInterval = setInterval(gameLoop, 50)
    console.log(`Game Active: ${gameActive}`)
    score.innerText = '0';
    // music for game on start
    music.setAttribute('src', "mixkit-tech-house-vibes-130.mp3")
    music.setAttribute('controls', 'controls')
}
start.addEventListener('click', gameStart)
// runs game loop
function gameLoop(){
    ctx.clearRect(0, 0, game.width, game.height);
    if(gasCan.alive){
        gasCan.y += 12
        gasCan.render()
        let hit = detectHit(playerOne, gasCan)
    }
    playerOne.render();
    gameOver()
}
// spawns new gas can 3 seconds after the last one was hit
function newGasCan(){
    gasCan.alive = false
    setTimeout(function(){
        // spawn location on canvas for gas can is randomized
        let x = Math.floor(Math.random()* 500)
        gasCan = new Obstacle(x,10,'blue',80,50)
        
    }, 3000)
   return true
}
// function for ending game loop and determines whether its a win or loss
function gameOver(){
    // loss condition
    if(gasCan.y > 500){
        clearInterval(gameInterval)
        console.log('game over')
        alert(`Game Over: your score was ${score.innerText}`)
        clearInterval(gameInterval)
        music.setAttribute('src', null)
        // win condition
    }else if(score.innerText === '1000'){
        alert('You scored 1000 points\nYou win')
        clearInterval(gameInterval)
        music.setAttribute('src', null)
    }
}


