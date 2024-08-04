const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
console.log("hey")
// to display fixed image div
let fixed=document.querySelector("#fixed_image") 
let elem_c = document.querySelector(".elem_container")
elem_c.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elem_c.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})
// elem1 select nd display 
// let elem1=document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//   let image=elem1.getAttribute("data-image")
//   console.log(image)
//   fixed.style.backgroundImage=`url(${image})`
// })
let elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image=e.getAttribute("data-image");
        console.log(image)
        fixed.style.backgroundImage=`url(${image})`;
       
       
    })
});
// <!-- Initialize Swiper -->
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // fixed scroll 

  let fixed_scroll=document.querySelector("#fixed_scroll")
  let slider_c=document.querySelector(".slider4_container")
  slider_c.addEventListener("mouseenter", function(){
    console.log('we have entered the slider')
    fixed_scroll.style.display="block"

  })
  slider_c.addEventListener("mouseleave", function(){
    console.log("we have exit the slider")
    fixed_scroll.style.display="none"
  })
  slider_c.addEventListener("mousemove",function(e){
    console.log("move")
      let x=e.clientX;
      let y=e.clientY;
      fixed_scroll.style.left= x +"px";
      // fixed_scroll.style.top= y + "px";
  })
//elem1 image

// loader animation
function loaderanimation(){
  let loader= document.querySelector("#loader")
setInterval(function(){
  loader.style.top="-100%"
}, 4000);
}
loaderanimation()

// nav bar in responsive website
 let full_scr= document.querySelector("#full_scr")
 let menu=document.querySelector("nav h3")
 let nav_image=document.querySelector(".brand_image img")
 let flag =0
 menu.addEventListener("mouseenter",function(){
  console.log("menu_enter")
    full_scr.style.top= 0
    nav_image.style.opacity = 0
})

 menu.addEventListener("mouseleave",function(){
  console.log("menu_exit")
  full_scr.style.top= "-100%"
  nav_image.style.opacity = 1
})