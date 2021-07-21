const burger = document.querySelector('.burger')
const links = Array.from(document.querySelectorAll('.anchor'))
const nav = document.querySelector('nav')



const tabs = document.querySelectorAll('[data-target-tab]')
const tabContents = document.querySelectorAll('.content')

document.addEventListener('scroll', scrollAppear)
scrollAppear()
function scrollAppear() {
    var skillsUL = document.querySelector('.skill-container ul');
    const skillContent = document.querySelector('.skill-container .tab-content')
    var skillPosition = skillsUL.getBoundingClientRect().top;
    const cardContainer = document.querySelector('.card-container')
    const cardPosition = cardContainer.getBoundingClientRect().top;

    const education = document.querySelector('#education')
    const educationPosition = education.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2
    // console.log(skillPosition,screenPosition)

    if (skillPosition < screenPosition) {
        skillsUL.classList.add('animated')
        skillContent.classList.add('animated')
    }
    if (cardPosition < screenPosition) {
        cardContainer.classList.add('animated')
    }

    if (educationPosition < screenPosition) {
        education.classList.add('animated')
    }

}




tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.targetTab)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach(nlink => {
            nlink.parentElement.classList.remove('active')
        })
        link.parentElement.classList.add('active')
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active')
            burger.classList.remove('toggle')
        }
    })
})

document.addEventListener("mousemove", parallax);


const checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

const img = document.querySelector('#akash')
img.addEventListener('mouseover', () => {
    img.src = "./images/wink.jpeg"
})
img.addEventListener('mouseout', () => {
    img.src = "./images/smile.jpeg"
})



burger.addEventListener('click', () => {
    burger.classList.toggle('toggle')
    nav.classList.toggle('nav-active')
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }
        else {
            link.style.animation = `navLinkFade 0.2s forwards ${index / 5 + 0.2}s`
        }
        console.log(index / 7)
    })

})

function parallax(e) {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.opacity = `0.7`
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

console.log("%cBuilt With pure CSS AND vanilla Javascript By Akash Yadav ❤", "font-weight:bold; font-size:3rem; color:#f1c40f;")


const copyYear = document.querySelector('.copy-year')

const currentYear = new Date().getFullYear()

copyYear.textContent = currentYear
