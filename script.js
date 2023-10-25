// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

gsap.from('.alink',{
    y:25,
    stagger: .1,
    duration: .6,
    ease:Power1,
    opacity:0
});

Shery.textAnimate(".headings h1" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: .3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from("#anim1",{
    y:50,
    opacity:0,
    stagger:.3,
    duration:1,
    ease: Expo,
});

Shery.imageEffect(".ephemeral img",{
    style:3,
    config: {"uFrequencyX":{"value":17.36,"range":[0,100]},"uFrequencyY":{"value":9.09,"range":[0,100]},"uFrequencyZ":{"value":27.27,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.37},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8249878463782208},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect("#susimg img",{
    style:5,
    config:{"a":{"value":3.72,"range":[0,30]},"b":{"value":-0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.6,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect(".bottle",{
    style:5,
    gooey:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9171809256661991},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":30}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

document.querySelector(".lasttext button").addEventListener("mouseover",function(){
    gsap.to(".last .video",{
        opacity:1,
        duration:6,
        ease: Power4
    });
});

document.querySelector(".lasttext button").addEventListener("mouseleave",function(){
    gsap.to(".last .video",{
        opacity:0,
        duration:5,
        ease: Power4
    });
});

var preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none"
});