// Create function for players car to move up down left right based on arrow keys

// Create function that is a timer for player to need to get gas(This will be a loss condition if you run out of gas)

// Create a function for opposing cars(obstacles another loss condition) if player car collides with another car game over

// Create function to detect game over 

// Create function that causes the obstacles to move faster over time(maybe create an setInterval() )

// Function for keeping track of allotted time survived in-game. At game over display how long the player survived

// Maybe randomize obstacles to be a traffic cone, tire in the road, trashcan, or roadspikes

// Set Variables for Game to be called
// let playerOne
let obstacles
let gasCan
let game = document.getElementById('game')
let ctx = game.getContext('2d')
// 

// class creator for player
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