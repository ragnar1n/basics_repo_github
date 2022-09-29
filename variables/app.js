// let korrad=Number(prompt("mitu korda"));
// let kord=1
// while (kord <=korrad){
//     console.log(`T6use ja s2ra! ${kord}`);
//     kord++;
// }
// let ringid=Number(prompt('ringide arv'))
// let porgandidKokku=0
// let ring=1
// while (ring <=ringid){
//     // console.log(`${ring}. ring`)
//     if(ring %2 ==0){
//         // console.log(`saab ${ring} porgandit`)
//         porgandidKokku+=ring
//         // console.log(porgandidKokku)
//     }
//     ring++
// }
// console.log(`Porgandite koguarv: ${porgandidKokku}`)

let t2ringud=Number(prompt('t2ringute arv'))

for (let kord=1;kord <= t2ringud; kord++){
    let t2ring=Math.ceil(Math.random()*6)
    console.log(t2ring)
}

let p6ialpoisid=Number(prompt('mitu poissi'))
let lumivalgekeseOunad= 14

let p6ialpoiss=1
while (p6ialpoiss <= p6ialpoisid){
    let ounad=Math.ceil(Math.random()*2)
    console.log(ounad)
    lumivalgekeseOunad=lumivalgekeseOunad-ounad
    p6ialpoiss++
}
console.log(`Lumivalgekesele j2i ${lumivalgekeseOunad} 6una`)