const burger = document.querySelector('.burger')
const links = Array.from(document.querySelectorAll('.anchor'))
const nav = document.querySelector('nav')


// document.addEventListener('scroll', ()=>{
//     var scroll_position = window.scrollY;
//     if(scroll_position > 120){
//         if(document.body.classList.contains("dark")){
//             nav.style.backgroundColor = '#22303C';
//         }
//         else{
//             nav.style.backgroundColor = "#fff"
//         }
//     }else{
//         nav.style.backgroundColor = 'transparent';
//     }
// });


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