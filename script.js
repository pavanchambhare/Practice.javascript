
const circle = document.querySelector(".circle")
const box = document.querySelector(".box")
const rectangle = document.querySelector(".rectangle")

circle.addEventListener("click", e => {
    console.log("circle 1")
   
});


box.addEventListener("click", e => {
    console.log("circle 2")
});

rectangle.addEventListener("click", e => {
    console.log("circle 3")
});

setTimeout(function x(y) {
    console.log("timer");
},5000);
setTimeout(function y(){
    console.log("time out")
},5000);


let y = "800";



setTimeout (function(){
    switch (y) {
        case '200':
            console.log("result is pending")
            break;
            case '400':
                console.log("result is pass")
                break;
    
                case '600':
                    console.log("top 20 in college")
                    break;
                    case '800':
                        console.log("gread 'A'Pass" )
                        break;
    
        default:
        console.log("result is not Declear")
        break;
    }
    console.log(800)
    

}, 2000);

let button = document.querySelector('#button');
let msg = document.querySelector('#message');

button.addEventListener('click', () =>{
    button.textContent = ' clicked';
  console.log("Hello My Name Is Pavan")
},5000)

button.addEventListener('click', (x)=>{
    button.textContent = ' Click Me';
  console.log("ok i am fine")
},5000)
message.addEventListener('click', ()=>{
    message.textContent = ' I Am Web Devloper';
    console.log("I Am Web Devloper")
  },5000)

  function fun(){
      console.log ,("");
  }

  

let num = ['5',8,3,4,5,6,5,42,2]
console.log(num)
let contry = ["london" ,"japan" , "tokiyo" , "mascsico" ]
console.log(contry)
let bollian = '123';
console.log(bollian)

