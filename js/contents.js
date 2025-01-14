descriptionEffect()
businessEffect()
youtubeEffect()

function descriptionEffect(){
    const description0=document.querySelector('#description0')
    const description1=document.querySelector('#description1')

    gsap.to(description0.querySelectorAll('span'), {
        color: '#000000',
        duration: 1,
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: description0,
            start: 'top 60%',
            toggleActions: 'play reverse play reverse'
        }
    });
    gsap.to(description1.querySelectorAll('span'), {
        color: '#000000',
        duration: 1,
        ease: 'power1.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: description1,
            start: 'top 60%',
            toggleActions: 'play reverse play reverse'
        }
    });
}
function businessEffect(){
    const businessList=document.querySelector('#business_wrap')
    const business0=document.querySelector('#business0')
    const business1=document.querySelector('#business1')
    const business2=document.querySelector('#business2')

    const animation=gsap.timeline()

    animation.to(business0,{y:-300, opacity:0}).to(business1,{y:-300, opacity:0}).to(business2,{y:-300, opacity:0})
    
    ScrollTrigger.create({
        trigger: businessList,
        start: 'top 0%',
        end:'960 0%',
        pin: true,
        scrub: true,
        animation: animation
    })
}
function youtubeEffect() {
    const youtubeList = document.querySelectorAll('#youtube_list ul li')
    const youtubeThumbnail = document.querySelector('#youtube_play p img')
    const playBtn=document.querySelector('#youtube_play a')

    playBtn.addEventListener('mouseenter',()=>{
         playBtn.style.transform = 'scale(1.2)'
    })
    playBtn.addEventListener('mouseleave',()=>{
         playBtn.style.transform = 'scale(1.0)'
    })
    youtubeList.forEach((item, index) => {
        item.addEventListener('mouseenter', () => arrowUp(item, index))
        item.addEventListener('mouseleave', () => arrowDown(item))
    })
    function arrowUp(item, index) {
        const arrowWrap = item.querySelector('.arrow_wrap')
        const youtubeLi = item.querySelector('a')
        gsap.to(arrowWrap, {y: -72, ease: 'power1.out' })
        youtubeLi.style.color = '#50B0C8'
        youtubeThumbnail.src = `/starwave/images/youtube${index}.jpg`
    }
    function arrowDown(item) {
        const arrowWrap = item.querySelector('.arrow_wrap')
        const youtubeLi = item.querySelector('a')
        gsap.to(arrowWrap, { y: 0, ease: 'power1.out' })
        youtubeLi.style.color = '#BBBBBB'
    }
}
