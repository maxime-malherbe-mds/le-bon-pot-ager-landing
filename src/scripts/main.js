gsap.registerPlugin(ScrollTrigger)


// execute script when the page is loaded
window.onload = function () {


// Get the os if the user is using android or ios, else, show the android button by default
const ua = navigator.userAgent.toLowerCase()
const isAndroid = ua.indexOf('android') > -1
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

if (isIOS) {
  document.getElementById('btn-android').style.display = 'none'
  document.getElementById('btn-ios').style.display = 'initial'
} else {
  document.getElementById('btn-android').style.display = 'initial'
  document.getElementById('btn-ios').style.display = 'none'
}

// for every android-btn and ios-btn class, do the same as above

const androidBtns = document.getElementsByClassName('android-btn')
for (let i = 0; i < androidBtns.length; i++) {
  if (isIOS) {
    androidBtns[i].style.display = 'none'
  } else if (isAndroid) {
    androidBtns[i].style.display = 'flex'
  } else {
    androidBtns[i].style.display = 'flex'
  }
}

const iosBtns = document.getElementsByClassName('ios-btn')
for (let i = 0; i < iosBtns.length; i++) {
  if (isIOS) {
    iosBtns[i].style.display = 'flex'
  } else if (isAndroid) {
    iosBtns[i].style.display = 'none'
  } else {
    iosBtns[i].style.display = 'flex'
  }
}

// gsap infinite floating animation for the phone class
gsap.to('.phone', {
  y: '-=1rem',
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut',
})

// gsap fade in left animation for the .fade-in-left class on scroll
gsap.utils.toArray('.fade-in-left').forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  })
})

// gsap fade in right animation for the .fade-in-right class on scroll
gsap.utils.toArray('.fade-in-right').forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  })
})

// gsap fade in animation for the .fade-in class on scroll
gsap.utils.toArray('.fade-in').forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
  })
})

// gsap create new timeline for bottom section, then fade the .vert-gradient class in and then the title class, then fade in left ios-btn and android-btn classes
const bottomSection = gsap.timeline({
  scrollTrigger: {
    trigger: '.bottom-section',
    start: 'top 80%',
  },
})

bottomSection
  .from('.vert-gradient', {
    height: 0,
    duration: .8,
    ease: 'power1.inOut',
  })
  .from(
    '.title',
    {
      opacity: 0,
      duration: .8,
      ease: 'power1.inOut',
    },
    '+=0.1',
  )
  .from(
    '#store-btn-anim',
    {
      y: 10,
      opacity: 0,
      duration: .8,
      ease: 'power1.inOut',
    },
    0.9,
  )
//   .from('#ios-btn-anim', {
//     x: 10,
//     opacity: 0,
//     duration: 1,
//     ease: 'power1.inOut',
//   } , '+=0.5')
//   .from('#android-btn-anim', {
//     x: -10,
//     opacity: 0,
//     duration: 1,
//     ease: 'power1.inOut',
//   } , '+=0')


// make rotation on phone class on mouse hover and make the rotation follow the mouse
// const phone = document.querySelector('#phone-img-container')

// phone.addEventListener('mousemove', (e) => {
//     const x = e.clientX / window.innerWidth
//     const y = e.clientY / window.innerHeight
//     phone.style.transform = `rotateX(${y * 20 - 10}deg) rotateY(${x * 20 - 10}deg)`
//     }
// )
// // same as above butdo not interfere with the gsap animation
// phone.addEventListener('mouseleave', (e) => {
//     phone.style.transform = `rotateX(0deg) rotateY(0deg)`
//     }
// )

}

const cards = document.querySelectorAll(".phone");
for(let i=0; i<cards.length; i++){
	cards[i].addEventListener('mousemove', rotate);
	cards[i].addEventListener('mouseleave', clearRotate);
}

function rotate(e){
	const cardItem = this.querySelector("#phone-img-container");
	const force = 10;
	const offsetY = -(e.offsetY - cardItem.offsetHeight/2.5)/force;
	const offsetX = (e.offsetX - cardItem.offsetWidth/2)/force;
	cardItem.style.transform = 'rotateX(' + offsetY + 'deg) rotateY(' + offsetX + 'deg)';
}

function clearRotate(e){
	if(e.target.classList.contains("phone")){
		const cardItem = this.querySelector("#phone-img-container");
		cardItem.style.transform = 'rotateX(0) rotateY(0)';
	}
}