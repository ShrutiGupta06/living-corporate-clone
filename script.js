var menu = document.querySelector("#left-nav #menu");
var full = document.querySelector("#full-scr-nav");
var flag = 0;
menu.addEventListener("click", function (){
    if (flag == 0) {

        full.style.top = "0%";
        full.style.transition = "all ease 1s"
        document.querySelector("#left-nav h2").style.color = "#FEF9F3";
        document.querySelector("#left-nav #menu").style.color = "#FEF9F3";
        document.querySelector("#left-nav #search").style.color = "#FEF9F3";
        document.querySelector("#nav").style.backgroundColor = "black";
        document.querySelector("#left-nav").style.borderBottom = "1px solid #FEF9F3";
        document.querySelector("#right-nav #Lft-button").style.backgroundColor = "black";
        document.querySelector("#right-nav #Lft-button").style.color = "#FEF9F3";
        document.querySelector("#right-nav #Lft-button").style.borderBottom = "1px solid #FEF9F3";
        document.querySelector("#right-nav #Lft-button").style.borderLeft = "1px solid #FEF9F3";
        document.querySelector("#right-nav #Rgt-button").style.backgroundColor = "#FEF9F3";
        document.querySelector("#right-nav #Rgt-button").style.color = "black";
        document.querySelector("#page1").style.opacity = 0;
        flag = 1
    }
    else{

        full.style.top = "-100%";
        full.style.transition = "all ease 1s"
        document.querySelector("#left-nav h2").style.color = "black";
        document.querySelector("#left-nav #menu").style.color = "black";
        document.querySelector("#left-nav #search").style.color = "black";
        document.querySelector("#nav").style.backgroundColor = "#FEF9F3";
        document.querySelector("#left-nav").style.borderBottom = "1px solid black";
        document.querySelector("#right-nav #Lft-button").style.backgroundColor = "#FEF9F3";
        document.querySelector("#right-nav #Lft-button").style.color = "black";
        document.querySelector("#right-nav #Lft-button").style.borderBottom = "1px solid black";
        document.querySelector("#right-nav #Lft-button").style.borderLeft = "1px solid black";
        document.querySelector("#right-nav #Rgt-button").style.backgroundColor = "black";
        document.querySelector("#right-nav #Rgt-button").style.color = "#FEF9F3";
        document.querySelector("#page1").style.opacity = 1;
        flag = 0
        
    }

})

document.querySelector("#left-nav #search").addEventListener("mouseover", function(){
    document.querySelector ("#left-nav #search").style.color = "gray";
})
document.querySelector("#left-nav #search").addEventListener("mouseleave", function(){
    document.querySelector ("#left-nav #search").style.color = "black";
})


var LftButton = document.querySelector("#right-nav #Lft-button");
LftButton.addEventListener("mouseover", function(){
    LftButton.style.backgroundColor = "#DF80AC";
})
LftButton.addEventListener("mouseleave", function(){
    LftButton.style.backgroundColor = "#FEF9F3";
})

var RgtButton = document.querySelector("#right-nav #Rgt-button");
RgtButton.addEventListener("mouseover", function(){
    RgtButton.style.backgroundColor = "#FEF9F3";
    RgtButton.style.color = "black";
    RgtButton.style.borderBottom = "1px solid black";
    RgtButton.style.borderLeft = "1px solid black";
})
RgtButton.addEventListener("mouseleave", function(){
    RgtButton.style.backgroundColor = "black";
    RgtButton.style.color = "#FEF9F3";
    RgtButton.style.borderBottom = "1px solid #FEF9F3";
    RgtButton.style.borderLeft = "1px solid #FEF9F3";
})



var tl = gsap.timeline();

tl.to("#page1 #page1-left",{
    scaleY:1,
    duration:2,
    ease: "power1",
})

.to("#lrg-headings #heading1",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"hello")
.to("#lrg-headings #heading1",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"hello")
.to("#sml-headings #sheading1",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"hello")
.to("#sml-headings #sheading1",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"hello")
.to("#page1-img #photo1",{
    opacity: 1,
    scale:1,
    duration: 4,
    ease: "expo",  
},"hello")
.to("#page1-img #photo1",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"hello")
.to("#filling-box #filling-line1",{
    width:"100%",
    duration: 4,
    ease: "power1", 
},"hello")
.to("#filling-box #filling-line1",{
    delay:3,
    width:"0%",
    duration:1,
    opacity:0
},"hello")




.to("#lrg-headings #heading2",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"hi")
.to("#lrg-headings #heading2",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"hi")
.to("#sml-headings #sheading2",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"hi")
.to("#sml-headings #sheading2",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"hi")
.to("#page1-img #photo2",{
    opacity: 1,
    scale:1,
    duration: 4,
    ease: "expo",  
},"hi")
.to("#page1-img #photo2",{
    delay:3,
    opacity: 0,
    // scale:0,
    duration: 3,
    ease: "power1",
},"hi")
.to("#filling-box #filling-line2",{
    width:"100%",
    duration: 4,
    ease: "power1", 
},"hi")
.to("#filling-box #filling-line2",{
    delay:3,
    width:"0%",
    duration:1,
    opacity:0
},"hi")


.to("#lrg-headings #heading3",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"we")
.to("#lrg-headings #heading3",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"we")
.to("#sml-headings #sheading3",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"we")
.to("#sml-headings #sheading3",{
    delay:3,
    opacity: 0,
    duration: 3,
    ease: "power1",
},"we")
.to("#page1-img #photo3",{
    opacity: 1,
    scale:1,
    duration: 4,
    ease: "expo",  
},"we")
.to("#page1-img #photo3",{
    delay:3,
    opacity: 0,
    // scale:0,
    duration: 3,
    ease: "power1",
},"we")
.to("#filling-box #filling-line3",{
    width:"100%",
    duration: 4,
    ease: "power1", 
},"we")
.to("#filling-box #filling-line3",{
    delay:3,
    width:"0%",
    duration:1,
    opacity:0
},"we")


.to("#lrg-headings #heading4",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"us")
// .to("#lrg-headings #heading4",{
//     delay:3,
//     opacity: 0,
//     duration: 3,
//     ease: "power1",
// },"us")
.to("#sml-headings #sheading4",{
    opacity: 1,
    duration: 4,
    ease: "power1",  
},"us")
// .to("#sml-headings #sheading4",{
//     delay:3,
//     opacity: 0,
//     duration: 3,
//     ease: "power1",
// },"us")
.to("#page1-img #photo4",{
    opacity: 1,
    scale:1,
    duration: 4,
    ease: "expo",  
},"us")
// .to("#page1-img #photo4",{
//     delay:3,
//     opacity: 0,
//     // scale:0,
//     duration: 3,
//     ease: "power1",
// },"us")
.to("#filling-box #filling-line4",{
    width:"100%",
    duration: 4,
    ease: "power1", 
},"us")
// .to("#filling-box #filling-line4",{
//     delay:3,
//     width:"0%",
//     duration:1,
//     opacity:0
// },"us")




var image1 = document.querySelector("#strip-1 #img-1");
var strip1 = document.querySelector("#strip-1");

strip1.addEventListener("mousemove",function(dets){
    image1.style.left = (dets.x-200)+"px";
    image1.style.top = (dets.y-400)+"px";
    image1.style.opacity = 1;
    image1.style.scale = 1;
})
strip1.addEventListener("mouseleave",function(dets){
    image1.style.opacity = 0;
    image1.style.scale = 0;
})

var image2 = document.querySelector("#strip-2 #img-2");
var strip2 = document.querySelector("#strip-2");

strip2.addEventListener("mousemove",function(dets){
    image2.style.left = (dets.x-200)+"px";
    image2.style.top = (dets.y-400)+"px";
    image2.style.opacity = 1;
    image2.style.scale = 1;
})
strip2.addEventListener("mouseleave",function(dets){
    image2.style.opacity = 0;
    image2.style.scale = 0;
})


var image3 = document.querySelector("#strip-3 #img-3");
var strip3 = document.querySelector("#strip-3");

strip3.addEventListener("mousemove",function(dets){
    image3.style.left = (dets.x-200)+"px";
    image3.style.top = (dets.y-400)+"px";
    image3.style.opacity = 1;
    image3.style.scale = 1;
})
strip3.addEventListener("mouseleave",function(dets){
    image3.style.opacity = 0;
    image3.style.scale = 0;
})


var image4 = document.querySelector("#strip-4 #img-4");
var strip4 = document.querySelector("#strip-4");

strip4.addEventListener("mousemove",function(dets){
    image4.style.left = (dets.x-200)+"px";
    image4.style.top = (dets.y-400)+"px";
    image4.style.opacity = 1;
    image4.style.scale = 1;
})
strip4.addEventListener("mouseleave",function(dets){
    image4.style.opacity = 0;
    image4.style.scale = 0;
})


var image5 = document.querySelector("#strip-5 #img-5");
var strip5 = document.querySelector("#strip-5");

strip5.addEventListener("mousemove",function(dets){
    image5.style.left = (dets.x-200)+"px";
    image5.style.top = (dets.y-400)+"px";
    image5.style.opacity = 1;
    image5.style.scale = 1;
})
strip5.addEventListener("mouseleave",function(dets){
    image5.style.opacity = 0;
    image5.style.scale = 0;
})

var image6 = document.querySelector("#strip-6 #img-6");
var strip6 = document.querySelector("#strip-6");

strip6.addEventListener("mousemove",function(dets){
    image6.style.left = (dets.x-200)+"px";
    image6.style.top = (dets.y-200)+"px";
    image6.style.opacity = 1;
    image6.style.scale = 1;
})
strip6.addEventListener("mouseleave",function(dets){
    image6.style.opacity = 0;
    image6.style.scale = 0;
})




var overlayBox = document.querySelector("#page2-btm2 .overlay-box");
var ovelEgg = document.querySelector(".overlay-box .ovel-egg");

overlayBox.addEventListener("mousemove",function(){
    ovelEgg.style.width = "100%";
    //ovelEgg.style.height = "100%";
    ovelEgg.style.clipPath = "none";
})

overlayBox.addEventListener("mouseleave",function(){
    ovelEgg.style.width = "90%";
    ovelEgg.style.clipPath = "ellipse(32% 50% at 50% 50%)";
    ovelEgg.style.webkitClipPath = "ellipse(32% 50% at 50% 50%)";
})



var overlayBox2 = document.querySelector("#page2-btm2 #overlay-box2");
var ovelEgg2 = document.querySelector("#overlay-box2 #ovel-egg2");

overlayBox2.addEventListener("mousemove",function(){
    ovelEgg2.style.width = "100%";
    //ovelEgg2.style.height = "100%";
    ovelEgg2.style.clipPath = "none";
})

overlayBox2.addEventListener("mouseleave",function(){
    ovelEgg2.style.width = "90%";
    ovelEgg2.style.clipPath = "ellipse(32% 50% at 50% 50%)";
    ovelEgg2.style.webkitClipPath = "ellipse(32% 50% at 50% 50%)";
})



var overlayBox3 = document.querySelector("#page2-btm2 #overlay-box3");
var ovelEgg3 = document.querySelector("#overlay-box3 #ovel-egg3");

overlayBox3.addEventListener("mousemove",function(){
    ovelEgg3.style.width = "100%";
    //ovelEgg3.style.height = "100%";
    ovelEgg3.style.clipPath = "none";
})

overlayBox3.addEventListener("mouseleave",function(){
    ovelEgg3.style.width = "90%";
    ovelEgg3.style.clipPath = "ellipse(32% 50% at 50% 50%)";
    ovelEgg3.style.webkitClipPath = "ellipse(32% 50% at 50% 50%)";
})


var overlayBox4 = document.querySelector("#page2-btm2 #overlay-box4");
var ovelEgg4 = document.querySelector("#overlay-box4 #ovel-egg4");

overlayBox4.addEventListener("mousemove",function(){
    ovelEgg4.style.width = "100%";
    //ovelEgg4.style.height = "100%";
    ovelEgg4.style.clipPath = "none";
})

overlayBox4.addEventListener("mouseleave",function(){
    ovelEgg4.style.width = "90%";
    ovelEgg4.style.clipPath = "ellipse(32% 50% at 50% 50%)";
    ovelEgg4.style.webkitClipPath = "ellipse(32% 50% at 50% 50%)";
})


var overlayBox5 = document.querySelector("#page2-btm2 #overlay-box5");
var ovelEgg5 = document.querySelector("#overlay-box5 #ovel-egg5");

overlayBox5.addEventListener("mousemove",function(){
    ovelEgg5.style.width = "100%";
    //ovelEgg5.style.height = "100%";
    ovelEgg5.style.clipPath = "none";
})

overlayBox5.addEventListener("mouseleave",function(){
    ovelEgg5.style.width = "90%";
    ovelEgg5.style.clipPath = "ellipse(32% 50% at 50% 50%)";
    ovelEgg5.style.webkitClipPath = "ellipse(32% 50% at 50% 50%)";
})


var overlayBox6 = document.querySelector("#page2-btm2 #overlay-box6");
var ovelEgg6 = document.querySelector("#overlay-box6 #ovel-egg6");

overlayBox6.addEventListener("mousemove",function(){
    ovelEgg6.style.width = "100%";
    //ovelEgg6.style.height = "100%";
    ovelEgg6.style.clipPath = "none";
})

overlayBox6.addEventListener("mouseleave",function(){
    ovelEgg6.style.width = "90%";
    ovelEgg6.style.clipPath = "ellipse(32% 50% at 50% 50%)";
    ovelEgg6.style.webkitClipPath = "ellipse(32% 50% at 50% 50%)";
})

