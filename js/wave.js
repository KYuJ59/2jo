

circlesAndWave()
innoTextEffect()
surfff()
keywrods()


function circlesAndWave() {

    const wrap = document.querySelector('#starwave')
    const cir0 = document.querySelector('#circle0')
    const cir1 = document.querySelector('#circle1')
    const cir2 = document.querySelector('#circle2')
    const wave = document.querySelector('#wave')


    const insideWave = gsap.timeline()

    insideWave.to(cir0, { top: 300 })
        .to(cir1, { top: 215 }, "<")
        .to(cir2, { top: 160 }, "<")
        .to(wave, { backgroundPositionY: 0})

    ScrollTrigger.create({
        trigger: wrap,
        start: "top 0%",
        end: 'bottom 0%',
        pin: true,
        scrub: 5,
        animation: insideWave,
    })


}


function innoTextEffect() {


    document.querySelectorAll('.innoText').forEach(innoText => {


        let iText = innoText.innerText
        let newText = "";

        for (let i = 0; i < innoText.innerText.length; i++) {
            newText += "<span aria-hidden='true'>";
            if (innoText.innerText[i] == " ") {
                newText += " ";
            } else {
                newText += innoText.innerText[i]
            }
            newText += "</span>"
        }
        innoText.innerHTML = newText
        innoText.setAttribute('aria-label', iText)


        const wrap = document.querySelector('#innovation_wrap')
        const textWrap = document.querySelector('#innoText_box')
        const texts = document.querySelectorAll('.innoText>span')
        const textlight = gsap.timeline()




        textlight.to(document.querySelectorAll('.in0>span'), { opacity: 1, duration:7, stagger: { amount: 3, from: "random" } })
            .to(document.querySelectorAll('.in1>span'), { opacity: 1, duration:7, stagger: { amount: 3, from: "random" } }, "<")

        ScrollTrigger.create({
            trigger: wrap,
            start: 'top 0%',
            end: '+=300',
            scrub: true,
            animation: textlight,
        })



    })


}


function surfff() {
    const wrap = document.querySelector('#wavess')
    const textBox = document.querySelector('#wavesText')

    const wrap2=document.querySelector('#wavess2')
    const wv2Text1=document.querySelector('#wav2_text1')
    const wv2Text2=document.querySelector('#wav2_text2')
    const wv2Text3=document.querySelector('#wav2_text3')
    const changes=document.querySelectorAll('.changes')

    const wrap3=document.querySelector('#wavess_bottom')
    const wvSpans=document.querySelectorAll('.p50')
    const wvSpans2=document.querySelectorAll('.p30')

    const circle=document.querySelector('#wavess2_circle')



    gsap.to(textBox, {
        top: -660,
        scrollTrigger: {
            trigger: wrap,
            start: 'top -500px',
            end: '+=1000',
            pin: true,
            scrub: true
        }
    })

    let wv2Effect=gsap.timeline()

    wv2Effect.to(wv2Text1,{y:0,opacity:1}).to(wv2Text2,{y:0,opacity:1}).to(wv2Text3,{y:0,opacity:1}).to(circle,{bottom:30,opacity:1})
    .to(changes,{color:'#2E769A'})

    ScrollTrigger.create({
        trigger:wrap2,
        start:'top 100px',
        end:'+=1000',
        pin:true,
        scrub:true,
        animation:wv2Effect
    })

    let wv3Effect=gsap.timeline()

    wv3Effect.to(wvSpans,{y:0}).to(wvSpans2,{y:0})

    ScrollTrigger.create({
        trigger:wrap3,
        start:'top 400px',
        end:'+=800',
        pin:true,
        scrub:true,
        animation:wv3Effect
    })


}


function keywrods() {
    const point = document.querySelector('#keywords')
    const key1 = document.querySelector('#key1')
    const key2 = document.querySelector('#key2')
    const key3 = document.querySelector('#key3')
    const KT1 = document.querySelector('#KT1')
    const KT2 = document.querySelector('#KT2')
    const KT3 = document.querySelector('#KT3')




    let cardShow = gsap.timeline()

    cardShow.to(key1, { opacity: 1, duration: 0.5 })
        .to(KT1, { opacity: 1, duration: 0.5 })
        .to(key2, { opacity: 1, duration: 0.5 })
        .to(KT2, { opacity: 1, duration: 0.5 })
        .to(key3, { opacity: 1, duration: 0.5 })
        .to(KT3, { opacity: 1, duration: 0.5 })


    ScrollTrigger.create({
        trigger: point,
        start: 'top 120px',
        end: '+=1500',
        pin: true,
        scrub: true,
        animation: cardShow
    })


}