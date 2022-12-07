const body = document.body
const slider = document.querySelectorAll('.slide')
const leftBTN = document.getElementById('left')
const rightBTN = document.getElementById('right')

let activeSlide = 0

rightBTN.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slider.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBTN.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slider.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slider[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slider.forEach(slide => slide.classList.remove('active'))

    slider[activeSlide].classList.add('active')
}