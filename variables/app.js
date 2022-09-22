//1.6
let inimesteArv=prompt("inimeste arv")
let bussiKohad=prompt("kohtade arv yhes bussis")

let bussidTaidetud=Math.floor(inimesteArv/bussiKohad)
let mahaJaanud= inimesteArv%bussiKohad
let bussiPealeJ6udsid=Math.floor(inimesteArv/bussiKohad)*bussiKohad

console.log("Inimeste arv on "+inimesteArv+" bussis on "+bussiKohad+" kohta. Busse on "+bussidTaidetud+", bussidesse mahtus "+bussiPealeJ6udsid+".")
if (mahaJaanud !=0){
    console.log("Maha j2i "+mahaJaanud+".")
}
// == != < > <= >= tru/fal