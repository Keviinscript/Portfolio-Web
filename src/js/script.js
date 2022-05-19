window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 10);
};

// scroll behaviour
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});


// identifying variables
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const home = document.getElementById('home')
const about = document.getElementById('about')
const skills = document.getElementById('skills')
const projects = document.getElementById('projects')

// clicking menubtn on mobile screens
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  img.classList.toggle('invisible')
  // img.classList.toggle('visible')
  nae.classList.toggle('invisible')
})

// clicking home on mobile screens
home.addEventListener('click', () => {
  // document.getElementById('projectspart').scrollIntoView({behavior:'smooth'})
  btn.classList.remove('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  img.classList.toggle('invisible')
  // img.classList.toggle('visible')
  nae.classList.toggle('invisible')
})

// clicking about on mobile screens
about.addEventListener('click', () => {
  document.getElementById('aboutpart').scrollIntoView({
    behavior: 'smooth'
  })
  btn.classList.remove('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  img.classList.toggle('invisible')
  // img.classList.toggle('visible')
  nae.classList.toggle('invisible')

})

//clicking skills on mobile screens
skills.addEventListener('click', () => {
  document.getElementById('skillpart').scrollIntoView({
    behavior: 'smooth'
  })
  btn.classList.remove('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  img.classList.toggle('invisible')
  // img.classList.toggle('visible')
  nae.classList.toggle('invisible')

})

//clicking projects on mobile screens
projects.addEventListener('click', () => {
  document.getElementById('projectspart').scrollIntoView({
    behavior: 'smooth'
  })
  btn.classList.remove('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  img.classList.toggle('invisible')
  // img.classList.toggle('visible')
  nae.classList.toggle('invisible')

})

//the typing animation
var typed = new Typed(".typing",{
  strings:["","Front-end Web Developer","Software Engineer","Creative","Webbased Business Promoter"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true

})

var typed = new Typed(".typing2",{
  strings:["","Front-end Web Developer","Software Engineer","Creative","Webbased Business Promoter"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true

})