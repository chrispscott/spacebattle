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

console.log("space battle")


// let rando = (start,stop) => {
//     stat = Math.floor((Math.random() * stop) + start)
//         for (i = stat; i > stop; stat = Math.floor((Math.random() * stop) + start)){
//             //stat = Math.floor((Math.random() * stop) + start)
//         }
//     return stat;
// };
// console.log(rando(2,4))   

let rando = (start,stop) => {
    stat = Math.floor((Math.random() * stop) + start)
       while (stat > stop){
        stat = Math.floor((Math.random() * stop) + start)  
       }
    return stat;
};
console.log(rando(6,8));





const USSSchwarzenegger = {
    hull:20,
    firepower: 5,
    accuracy: 7,
};

// console.log(USSSchwarzenegger)



const alienship = {
    hull: Math.random("x" >=3 || "x" <=6) * Math.floor(10),
    firepower: Math.random("x" >=2 || "x" <=4)* Math.floor(10),
    accuracy: Math.random("x" >=6 || "x" <=8)* Math.floor(10),
    
};
// console.log(alienship)

// alert(alienship);
// let x = Math.floor((Math.random() * 7))
//             // console.log(x);







// attack = () => {
//     let min = (math.random() * (math.floor(3)))
//     let min = (math.random() * (math.floor(9)))
//     let damage = (math.random() * (min - max) + min);
//     damage = math.ceil(damage);
//     alert(damage)

// }
//  alert(attack())  