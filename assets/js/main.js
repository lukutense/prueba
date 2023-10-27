        // Menú

        const navMenu=document.getElementById('nav-menu'),
        navToggle= document.getElementById('nav-toggle'),
        navClose= document.getElementById('nav-close')
  
          // Mostrar menú
  
  if(navToggle){
      navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
      })
  }
  
          // Ocultar menú
  
  if(navClose){
      navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
      })
  }

        // Click link/Quitar menú

const navLink= document.querySelectorAll('.nav__link')

const linkAction= () => {
    const navMenu= document.getElementById('nav-menu')
    // Al hacer click en cada nav__link removemos la clase show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

        // Cambiar Background Header

const bgHeader= () =>{
    const header=document.getElementById('header')
    // Cuando el scroll sea mayor a 50vh, agregar la clase bg-header al header tag
    this.scrollY >= 50 ? header.classList.add('bg-header'): header.classList.remove('bg-header') 
} 

window.addEventListener('scroll', bgHeader)

        // GSAP Animation

gsap.from('.home__shadow', 1.5, {opacity:0, y: -300, delay:.2})
gsap.from('.home__points', 1.5, {opacity:0, y: -300, delay:.4})
gsap.from('.home__grass', 1.5, {opacity:0, y: 300, delay:.2, ease:'elastic.out(1, .75)'})
gsap.from('.home__pumpkin', 1.5, {opacity:0, y: -300, delay:.6, ease:'bounce.out()'})
gsap.from('.home__stones', 1.5, {opacity:0, y: 300, delay:.8, ease:'elastic.out(1, .75)'})
gsap.from('.home__moon', 1.5, {opacity:0, y: 300, delay:1.5, ease:'elastic.out(1, .75)'})
gsap.from('.home__titles', 1.5, {opacity:0, y: -300, delay:.8, ease:'elastic.out(1, .75)'})
gsap.from('.home__trees', 1.5, {opacity:0, y: 300, delay:2, ease:'elastic.out(1, .75)'})
gsap.from('.home__data', 1.5, {opacity:0, y: 200, delay:.8, ease:'elastic.out(1, .75)'})