// Create function for players car to move up down left right based on arrow keys

// Create function that is a timer for player to need to get gas(This will be a loss condition if you run out of gas)

// Create a function for opposing cars(obstacles another loss condition) if player car collides with another car game over

// Create function to detect game over 

// Create function that causes the obstacles to move faster over time(maybe create an setInterval() )

// Function for keeping track of allotted time survived in-game. At game over display how long the player survived

// Maybe randomize obstacles to be a traffic cone, tire in the road, trashcan, or roadspikes

// https://opengameart.org/content/red-car-top-down Player Car sprite

// https://www.spriters-resource.com/search/?q=trash+can&c=-1&o%5B%5D=s&o%5B%5D=p&o%5B%5D=g&o%5B%5D=ig Go back and look for trashcan img for game

// https://opengameart.org/content/basic-topdown-view-car obstacle cars sprite

// https://www.pixilart.com/draw/gas-can-0d8faf0067e0f64 pixelated gas can for game

// Set Variables for Game to be called
// let playerOne
let obstacles
let gasCan
let game = document.getElementById('game')
let ctx = game.getContext('2d')
// 

// class creator for player need to edit to include sprite instead of color properties
class Car{
    constructor(x,y,color,width,height){
        this.x = x
        this.y = y
        this.color = color
        this.height = height
        this.width = width 
        this.alive = true
    }
    // Method to create car on screen
    render(){
        ctx.fill = this.color
        ctx.fillRect(this.x,this.y, this.width, this.height) 
    }
}
// class creator for obstacles will edit later to include a sprite into it
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
        ctx.fillRect(this.x,this.y, this.width, this.height) 
    }
}
// 
let playerOne = new Car(10,400,'red',20,20)
// function layout for movement
let movement = ((e) =>{
    console.log(`key pressed: ${e.key}`)
    switch (e.key){
        case "ArrowUp":
            playerOne.y >= 0 ? playerOne.y -= 20: null
            break
        case "ArrowDown":
            playerOne.y >= 0 ? playerOne.y += 20: null
            break
        case "ArrowLeft":
            playerOne.x >= 0 ? playerOne.x -= 10: null
            break
        case 'ArrowRight':
            playerOne.x >= 0 ? playerOne.x += 10: null
            break
    }
        
})
// Event listener for key movements and how to respond
document.addEventListener('keydown', movement)
// 


