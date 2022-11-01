

// const ul = document.querySelector("ul");

// function frames(){
//     const animacion = ul.animate([
//         //Keyframes
//         {transform: "TranslateY(0px)"},
//         {transform: "TranslateY(-100px)"}
//     ],{
//         //options
//         easing: "linear",
//         iterations: 0.1,
//         duration: 200 //milisegundos
//     });

//     return animacion.finished;
// }

// function displace(){
//     frames()
//     .then((res)=>{
//         console.log(res);
//         ul.appendChild(document.querySelectorAll("ul > li")[0])
//     })
// }

// setInterval(()=>{
//     displace();
// }, 1000)




let aleatorio = 1 + (parseInt(Math.random() * 2))
let btn =document.getElementById("btn")


function carasello(){

   
    let carasello = document.getElementById("carasello").value
    let apuesta = document.getElementById("apostar").value
    
do {


    
    let  = apuesta
    
    if(carasello == aleatorio){

        alert(`ganaste la suma de: ${suma}`)

    }else{
        alert(`perdiste`)
    }
  
    


} while (i < 5);


}

console.log(aleatorio)

btn.addEventListener('click', carasello)

