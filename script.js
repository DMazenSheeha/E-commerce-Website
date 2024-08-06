let bar = document.getElementById("bar");
let navbar = document.querySelector("#navbar ul");
let closebtn = document.getElementById("close");


bar.addEventListener('click',function(){
    navbar.style.right = '0';
})

closebtn.addEventListener('click',()=>{
    navbar.style.right = '-300px'
})

console.log("Hello, World");