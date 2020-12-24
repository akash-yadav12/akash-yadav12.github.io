const burger = document.querySelector('.burger')
const links = Array.from(document.querySelectorAll('.anchor'))
const nav = document.querySelector('nav')



const tabs = document.querySelectorAll('[data-target-tab]')
const tabContents = document.querySelectorAll('.content')


console.log("%cMADE WITH ❤ By Akash Yadav","font-weight:bold; font-size:4rem; color:#f1c40f;")


tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.targetTab)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        links.forEach(nlink =>{
            nlink.parentElement.classList.remove('active')
        })
        link.parentElement.classList.add('active')
        if(nav.classList.contains('nav-active')){
            nav.classList.remove('nav-active')
            burger.classList.remove('toggle')
        }
    })
})

document.addEventListener("mousemove", parallax);


const checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark')
})

const img = document.querySelector('#akash')
img.addEventListener('mouseover', ()=>{
    img.src = "./images1/img2.jpeg"
}) 
img.addEventListener('mouseout',()=>{
    img.src = "./images1/smile.jpeg"
})



burger.addEventListener('click',()=>{
    burger.classList.toggle('toggle')
    nav.classList.toggle('nav-active')
    links.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = ''
        }
        else{
            link.style.animation = `navLinkFade 0.2s forwards ${index/5 + 0.2}s`
        }
        console.log(index/7)
    })

})

function parallax(e){
    document.querySelectorAll('.layer').forEach(layer=>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.opacity=`0.7`
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}