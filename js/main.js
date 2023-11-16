new Swiper('.case-studies__swiper',{
    // slidesPerView: 2.3,
    loop: true,
    spaceBetween: 48,
    breakpoints: {
        0:{
          slidesPerView:1.3,
          spaceBetween: 32,
        },
        680:{
            slidesPerView: 2,
            spaceBetween: 48,
        },
        830:{
            slidesPerView: 2.3,
        }
    }
})

const videoWrapper = document.querySelector('.video')
const videoPreview = document.querySelector('.video__picture')
const videoFile = document.querySelector('#video-file')


const playBtn = document.querySelector('.video__btn')

playBtn.addEventListener('click', (e) => {
  videoPreview.classList.add('none')
  e.stopPropagation()
  
  hideOverlay()

  videoFile.play()
})

videoWrapper.addEventListener('click', () => {
    if(!videoFile.paused){
        showOverlay()
        videoFile.pause()
    }
})

function showOverlay(){
    videoWrapper.classList.add('video-overlay')
    playBtn.classList.remove('none')
}

function hideOverlay(){
    videoWrapper.classList.remove('video-overlay')
    playBtn.classList.add('none')
}

//////////////////////////////////////////////////////////////

const openMobileBtn = document.querySelector('#openMobileNav')
const closeMobileBtn = document.querySelector('#closeMobileNav')

const mobileNav = document.querySelector('.mobile-nav')
const appWrapper = document.querySelector('.app')

openMobileBtn.addEventListener('click', () => {
    mobileNav.classList.add('open')
    const mobileNavHeight = mobileNav.scrollHeight
    
    appWrapper.style.maxHeight = mobileNavHeight + 'px'
    appWrapper.classList.add('no-scroll')
})
closeMobileBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    
    appWrapper.style.maxHeight = 'unset'
    appWrapper.classList.remove('no-scroll')
})