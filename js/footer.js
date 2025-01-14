
waveEffect()
iconEffect()

function waveEffect(){


    gsap.to("#foot_wave p", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: "#foot_wave",
            start: "top 70%",
            scrub: true
        }
    });
}
function iconEffect(){
    const icon=document.querySelector('#footer_icon')
    const newIcon=document.querySelector('#selected_footer_icon')

    icon.addEventListener('click',()=>{
        icon.style.display='none'
        newIcon.style.display='block'
    })
    newIcon.addEventListener('click',()=>{
        icon.style.display='block'
        newIcon.style.display='none'
    })
}