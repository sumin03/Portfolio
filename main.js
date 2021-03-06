'use strict'

//Make navbar transparent when it is on the top 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;



document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}` );
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})



// Handle scrolling when tapping on the navbar menu 
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
    console.log(event.target.dataset.link);
    const target = event.target; 
    const link = target.dataset.link ; 
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    selectNavItem(target);
})



//Navbar toggle button for small screen 
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn'); 
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})



//Contact me = > #contact 

const  homeContactBtn = document.querySelector(".home__contact"); 
homeContactBtn.addEventListener('click', ()=> {
   scrollIntoView('#contact');
})


//Make home slowly fade to transparent as the window scrolls down 
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height; 
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
})



//Show "arrow up" button when scrolling down 
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2){
        arrowUp.classList.add("visible"); 

    }else{
        arrowUp.classList.remove("visible"); 
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});


//Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project"); //원하는 프로젝트들을 다 받아오는 것! 
workBtnContainer.addEventListener('click', (e) =>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; 
    if(filter == null){
        return;
    }

    //Remove selection from the previous item and select the new one 
    const active = document.querySelector(".category__btn.selected");
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode; 
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');

    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project);
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
    
});













// 1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#contact',
  ];
  const sections = sectionIds.map(id => document.querySelector(id));
  const navItems = sectionIds.map(id =>
    document.querySelector(`[data-link="${id}"]`)
  );
  
  let selectedNavIndex = 0;
  let selectedNavItem = navItems[0];
  function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
  }
  
  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        // 스크롤링이 아래로 되어서 페이지가 올라옴
        if (entry.boundingClientRect.y < 0) {
          selectedNavIndex = index + 1;
        } else {
          selectedNavIndex = index - 1;
        }
      }
    });
  };
  
 const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

  
window.addEventListener('wheel', ()=> {
   if(window.scrollY ===0){
      selectedNavIndex = 0; 
  }else if (

   Math.round(window.scrollY + window.innerHeight) >=
    
   document.body.clientHeight
    
  ) {
    selectedNavIndex = navItems.length - 1; 
 }
  selectNavItem(navItems[selectedNavIndex]);
})
  const OPTS = {
    fill:           'none',
    radius:         25,
    strokeWidth:    { 50 : 0 },
    scale:          { 0: 1 },
    angle:          { 'rand(-35, -70)': 0 },
    duration:       500,
    left: 0,        top: 0,
    easing: 'cubic.out'
  };
  
  const circle1 = new mojs.Shape({
    ...OPTS,
    stroke:         'rebeccapurple',
  });
  
  const circle2 = new mojs.Shape({
    ...OPTS,
    radius:         { 0 : 15 },
    strokeWidth:    { 30: 0 },
    stroke:         'lavender',
    delay:          'rand(75, 150)'
  });
  
  document.addEventListener( 'click', function (e) {
    
     circle1
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    
    circle2
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    
  });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });