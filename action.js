// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

//gsap to animate
gsap.from(".nlink", {
    stagger: 0.5,
    x: -200,
    duration: 2,
    ease: "power3.out",
    opacity: 0
});
// Shery.textAnimate("#heading" , {
    
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });
gsap.from("#heading",{
    x:-200,
    duration:1,
    // ease:"cubic-bezier(0.23, 1, 0.320, 1)",
    // multiplier: 0.1,
    opacity:0
})
gsap.from('.anim2',{
    y:300,
    stagger:0.5,
    opacity:0,
    duration:1,
    
})



function aniamtion1(){
    var tl =gsap.timeline({
        scrollTrigger: {
            trigger: "#motive",
            scroller: "body",
            start: "top 80%", 
            end: "top 10%",   
            scrub: true
        }})
        
        
           tl.from("#motive",{
            x:-500,
            opacity:0
        })
}
aniamtion1();
function animation2(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:"#pictures",
            scroller:'body',
            start: "top 140%", 
            end: "top 10%",   
            scrub: true
    
        }
    })
    tl2.from("#picimage",{
        x:500,
        opacity:0  
    })
}
animation2()
function animation3(){
    var tl3=gsap.timeline({
        scrollTrigger:{
            trigger:"#banner",
            scroller:'body',
            start: "top 120%", 
            end: "top 10%",   
            scrub: true
    
        }
    })
    tl3.from("#bimg , #btext",{ 
       x:-500,
        opacity:0  
    })
    
}
animation3();
function aniamtion4(){
    var tl4=gsap.timeline({
        scrollTrigger:{
            trigger:"#future",
            scroller:'body',
            start: "top 150%", 
            end: "top 10%",   
            scrub: true

        }
    })
    tl4.from("video ,#ftext",{
        y:500,
        opacity:0,
        
    })
}
aniamtion4();