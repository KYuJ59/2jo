mainMenuEffect()


function mainMenuEffect(){
    const header=document.querySelector('#header_wrap')
    const nav=document.querySelector('#mainMenu_box')
    const li=document.querySelectorAll('#mainMenu_list>li')
    const mainMenus=document.querySelectorAll('.mainMenus')
    const subMenu=document.querySelectorAll('.subMenu_list')
    const whiteLogo=document.querySelector('#logo_whi')
    const colorLogo=document.querySelector('#logo_col')

    let closed=null;;
    let menuOpen=false;
    let closing=false;
    initEvent()


    function initEvent(){
        for(const item of li){
            item.addEventListener('mouseenter',openSub)
            item.addEventListener('mouseleave',menuDown)
        }

        nav.addEventListener('mouseleave',closeSub)
        window.addEventListener('scroll',headerFix)
    
    }

    function headerFix(){
        if(window.pageYOffset>900){
            gsap.to(header,{backgroundColor:'#ffffff'})
            gsap.to(whiteLogo,{opacity:0})
            gsap.to(li,{color:'#334750'})
            gsap.to(subMenu,{color:'#334750'})
        }else{
            gsap.to(header,{backgroundColor:'transparent'})
            gsap.to(li,{color:'#ffffff'})
            gsap.to(subMenu,{color:'#ffffff'})
            gsap.to(whiteLogo,{opacity:1})
        }
    }


    function openSub(){
        menuUp(this)
        if(closing!=false){
            closed.kill()
            closing=false
        }
        if(menuOpen!=true){
            menuOpen=true
            gsap.to(header,{height:315})
            gsap.to(this,{height:290})
            gsap.set(subMenu,{display:'block'})
            gsap.to(nav,{height:290})
        }
    }
    function closeSub(){
        if(menuOpen!=false){
            menuOpen=false
            closing=true;
            gsap.to(header,{height:105})
            gsap.set(this,{height:0})
            closed=gsap.to(nav,{height:38,onComplete:()=>{
            gsap.set(subMenu,{display:'none'})
            }})
        }
    }

    function menuUp(focusing){
        gsap.to(focusing.children[0].children[0],{opacity:0,rotateX:'-90deg',translate3d:'(0px, -19px, 10px)',duration:0.5})
        gsap.to(focusing.children[0].children[1],{rotateX:'-0deg',y:-38,duration:0.5})
    }

    function menuDown(){
        gsap.to(this.children[0].children[0],{opacity:1,rotateX:'0deg',translate3d:'(0px, 0px, 0px)',duration:0.5})
        gsap.to(this.children[0].children[1],{rotateX:'-90deg',y:19,duration:0.5})
    }
}