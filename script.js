const btn= document.querySelector("#btn");
const inputBox = document.querySelector("#input");
let list = document.querySelector("#list");
let add = document.querySelector("#add");
let pass = document.querySelector("#Password");

const number = "1234567890";
const upper = "ABCDEFGHIJKLMNOPQRESTUVWXYZ";
const lower = " abcdefghijklmopqrestuvwxyz";
const sym = "~`!@#$%^&*()_<>/\|=";

const allchar= number + upper + lower + sym;
const Alpha = upper + lower;
const digitalpha = number + upper + lower;
let length = 15;
function createPass(){
    let password="";
      password += upper[Math.floor(Math.random()*upper.length)]
      password += lower[Math.floor(Math.random()*lower.length)]
      password += number[Math.floor(Math.random()*number.length)]
      password +=sym[Math.floor(Math.random()*sym.length)]

      while( length > password.length){
        password += allchar[Math.floor(Math.random()*allchar.length)];
      }
      inputBox.value = password;
} 

function addtoList(){
      let li = document.createElement("li");
      list.appendChild(li);
      li.innerHTML = inputBox.value;
}

let copyPass = document.querySelector("#img");

copyPass.addEventListener("click",()=>{
    inputBox.select();
    document.execCommand("copy");
})

add.addEventListener("click",()=>{
  addtoList();
})

function generatePassword(){
  let password = ""
  if(pass.value == "digit"){
    while( length > password.length){
    password += number[Math.floor(Math.random()*number.length)]
  }
}
  else if(pass.value == "alpha"){
    while( length > password.length){
    password += Alpha[Math.floor(Math.random()*Alpha.length)]
  }
}
  else if(pass.value == "digitalpha"){
    while( length > password.length){
    password += digitalpha[Math.floor(Math.random()*digitalpha.length)]
  }
}
  else{
    while( length > password.length){
    password += allchar[Math.floor(Math.random()*allchar.length)]
  }
};
  
 inputBox.value= password;
}


  
