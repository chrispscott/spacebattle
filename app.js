// christopher potti
// space battle
//  ==============================================

// You attack the first alien ship - If 
// the ship survives, it attacks you - If 
// you survive, you attack the ship again - If 
// it survives, it attacks you again - Etc. - If
//  you destroy the ship, you have the option
//   to **attack** the next ship or to **retreat** - If
//    you retreat, the game is over, 
//    perhaps leaving the game open for further developments
//     or options. - You win the game if you destroy all of the aliens.
//      - You lose the game if you are destroyed.
// =========================================================================================

// psudeo code 
// ===================================

// player one{
//     hull specs 
//     firepower specs 
//     accuracy specs 
// }
// 
// alien ships {
    //     hull specs 
//     firepower specs 
//     accuracy specs 
// }
// 

// function attack(){
//   return damage = to player one fire power
// }

// function alien_attack1(){
//    return random generation of alien attack pts
// }
// function alien_attack(){
//   return alien_attack1 - player hull 
// }
// function alien_hull(){
//   return hull= randomly generate hull points
// }
// function accuracy(){
//   return accuracy = randomly generate accuracy
// }


// onload alert text box 
// if player input attack ("launch attack function begin game")
// 
//   else
//  if player input retreat ("game over" )
// 
// 













// ========================================================================================
// //////////////////////////////////////////////////////////////////////////////////
// ==============================================================================

//console.log("space battle")

// let aim = (start,stop) => {
//     //generateing a random whole number 
//     at = Math.floor((Math.random() * stop) + start)/10
//        while (stat > stop){
//            //while stat is bigger than the set range of stop this loop will run
//            //untill stat is in range 
//         at = Math.floor((Math.random() * stop) + start)/10  
//        }
//     return at;
// };
// console.log(aim(0.6,0.8));



let rando = (start,stop) => {
    //generateing a random whole number 
    stat = Math.floor((Math.random() * stop) + start)
       while (stat > stop){
           //while stat is bigger than the set range of stop this loop will run
           //untill stat is in range 
        stat = Math.floor((Math.random() * stop) + start)  
       }
    return stat;
};
//console.log(rando(6,8));



let playerattack = () =>{
    if (USSSchwarzenegger.accuracy >= x) {
        let damage = enemy.hull - 5;
         //let damage = enemy.hull - 5;
        enemy.hull = damage;
        //return damage;
        alert('alien ships hull = ' + enemy.hull);
        if (enemy.hull <= 0) {
            alert('aleinship was destroyed ')
            alert('new alein ship incomming player hull = ' + USSSchwarzenegger.hull)
            enemy = new aleinship()
            i --;startGame();
            //console.log(i) 
        } else {
            console.log('this is inside player attack enemy ship ' + enemy.hull)
            alienattack();
    
        }    
    } else {
        alert('USSSchwarzenegger has misssed ')
        alienattack();
    }
    

}; 
//console.log(playerattack()); 
let alienattack = () =>{
    if (enemy.accuracy >= x) {
        alert('alein ship is attacking')
        //subtracting damage from player ship from randomly generated firepower 
        let damage = USSSchwarzenegger.hull - enemy.firepower;
        USSSchwarzenegger.hull = damage;
        if (USSSchwarzenegger.hull <= 0) {
            alert('USSSchwarzenegger was destroyed')
            alert('GAME OVER')
            startGame();
        } else {
            alert('USSSchwarzenegger hull =  ' + USSSchwarzenegger.hull);
            console.log('this is inside of alien attack player ship ' + USSSchwarzenegger.hull)
        }
    } else {
        alert('alien ship has misssed ')  
    } 
    
};   





const USSSchwarzenegger = { 
    hull:20,
    firepower: 5,
    accuracy: 7,
};
//console.log(USSSchwarzenegger)


class aleinship {
    constructor () {
    this.hull= rando(3,6),
    this.firepower= rando(2,4),
    this.accuracy= rando(6,8)
    }
    
};
let enemy = new aleinship()

let i = 6 
let x = Math.floor((Math.random() * 8));

let userinput = (userMessage) =>{
   return prompt(userMessage);
}; 


let startGame = () =>{
    console.log('this is alien ship inside of start game  ' + enemy.hull)
    console.log('this is player ship inside of start game  ' + USSSchwarzenegger.hull ) 
let startUserMessage=" alien ships in sight do you want to attack or retreat";  

let theUserinput = userinput(startUserMessage); 
while (i >= 1) {
if ( theUserinput === 'attack'){
    alert('USSSchwarzenegger is attacking ')
    playerattack();
    console.log("this is i " + i)
 }  else{
     alert('GAME OVER');    
     break
 }
};
}  
   

//Game Start;
startGame();








// if (input = attack) {
//     confirm(playerattack);
//    } else {
//     confirm(" Game over ");
//   };  






// if (input = (attack) =>{
//     alert(playerattack),
//     //console.log(playerattack),
// }
    







//console.log(enemy)
//alert(enemy)
// let input = prompt("iam a promt")
//  console.log(input) 
// confirm("i am a confirm")


// console.log(playerattack());   
// console.log(alienattack());   




// if person = attack hits {
// if (hull <= 0) creat new ship {
//     create new ship 
// }
// else {
//     alien ship must attack
// }
// }else{
//     alien must attack 
// }


// =========================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// =============================================================================================================



// failed attempt////////////////////////////////////////////////////////////////
// let rando = (start,stop) => {
//     stat = Math.floor((Math.random() * stop) + start)
//         for (i = stat; i > stop; stat = Math.floor((Math.random() * stop) + start)){
//             //stat = Math.floor((Math.random() * stop) + start)
//         }
//     return stat;
// };
// console.log(rando(2,4))   



// ============================
// let accu = (start,stop) =>{  
//     num = Math.random() * stop; + start;
//     while ( num > stop){
//         num = Math.random() * stop; + start;
//     }
//     return num  
// }
// console.log( accu(.6,.8));


// failed attempt ////////////////////////////////////////////////////
// const enemy = {
//     hull: Math.random("x" >=3 || "x" <=6) * Math.floor(10),
//     firepower: Math.random("x" >=2 || "x" <=4)* Math.floor(10),
//     accuracy: Math.random("x" >=6 || "x" <=8)* Math.floor(10),
     
// };

// console.log(enemy)

// alert(enemy);
// let x = Math.floor((Math.random() * 7))
//             // console.log(x);


// attack = () => {
//     let min = (math.random() * (math.floor(3)))
//     let min = (math.random() * (math.floor(9)))
//     let damage = (math.random() * (min - max) + min);
//     damage = math.ceil(damage);
//         alert(damage)

//  }  alert(attack())  


