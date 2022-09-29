// let vanus=Number(prompt("vanus"))
// let sugu=prompt("sugu")
// let treeninguTüüp=Number(prompt("treeningu nr"))
//
// console.log(vanus)
//
// if (sugu=="n"||sugu=="N"){
//     console.log("naine")
// }
// else if (sugu=="m"||sugu=="M"){
//     console.log("mees")
// }
// console.log("treening "+treeninguTüüp)
//
// if (sugu=="m"||sugu=="M"){
//     var pulss= 220-vanus
// }
// else if (sugu=="n"||sugu=="N"){
//     var pulss= 206-vanus*.88
// }
//
// if (treeninguTüüp==1){
//     var maxPulss=pulss*.7
//    var minPulss=pulss*.5
// }else if (treeninguTüüp==2){
//    var maxPulss=pulss*.8
//    var minPulss=pulss*.7
// }else if (treeninguTüüp==3){
//    var maxPulss=pulss*.87
//    var minPulss=pulss*.8
// }
//
// console.log(`Pulss peaks olema ${minPulss} kuni ${maxPulss}`)

// let valik=prompt('Kas soovid valida istekoha ise ("ise") v6i saada loosiga ("loos)')
//
// if (valik=='ise'){
//     let kohaValik=prompt('Akna ääres ("aken") või mujal ("muu")')
//
//     if (kohaValik=="aken"){
//         console.log("Valisid aknakoha")
//     } else if (kohaValik=="muu"){
//         console.log("Valisid vahekäigukoha")
//     }
// } else if (valik=="loos"){
// let juhuarv=Math.ceil(Math.random()*3)
//         if(juhuarv==1){
//             console.log("Aknakoht")
//         } else {
//             console.log("Vahekäigukoht")
//         }
// }

//for (let nimi=algarvutus; tingimus; suurendamine/v2hendamine){
//tegevused}

for (let number=1; number <=10; number++){
    if(number==5){
        console.log(number)
        break;
    }
    console.log(number)
}
console.log("for tsykli l6pp")

let kord = 1
while (kord <=10){
    console.log(kord)
    kord++
}