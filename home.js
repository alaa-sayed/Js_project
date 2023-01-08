
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
}


var myIndex=0;
function slider(){
    var i;
    var numOfImages=document.getElementsByClassName("myslides");
    for(i=0; i< numOfImages.length; i++){
        numOfImages[i].style.display="none";
    }
    myIndex++;
    if(myIndex>numOfImages.length){myIndex=1}
    numOfImages[myIndex-1].style.display="block";
    setTimeout(slider, 3000)
    
}
slider();

////// filtering

let buttons=document.querySelectorAll(".bttn");
let products=document.querySelectorAll(".store-products");
console.log(products);
console.log(buttons);


for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (e) =>{
        e.preventDefault();
        const filter=e.target.dataset.filter;
        products.forEach((product)=>{
            if(filter=="all"){
                product.style.display="block";
            }
            else{
                if(product.classList.contains(filter)){
                product.style.display="block";
                }
                else{
                product.style.display="none";

                }
            }
        })
    })
}


//////////// back to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/////////////// add to cart
let btns=document.querySelectorAll(".btn-primary");
let counter=document.getElementById("cart-counter");
let count=0;
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click",function(){
      count++;
      counter.innerHTML=count;

    })
}






    


    
    
  

