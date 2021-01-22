 #  ✨Sumin's Portfolio✨
 
> 📍Check my portofolio website <https://sumin03.github.io/Portfolio/>
<img width="1200" alt="screenshot" src="https://user-images.githubusercontent.com/77384682/105470092-79259a00-5cdc-11eb-9c04-93799586c01c.png">


## Table of Content 
* **[home](#home)**
* **[About](#about)**
* **[Skills](#skills)**
* Work 
* Contact 

## Features 
* Responsive 
* Javascript
* html 
* css
* Animation 
* Vibrant 
* Purple💜 

## Problems 
It was the first time I made website with Pure vanilla Javascript, so I had lots of problems at making structure, But I could fix the problems by google and watching tutorials. 

## Goals 
_1.Making responsive webpage <br>_
_2.Trying to not to use Jquery <br>_
_3.Studying Javascript and using it as much as I can do <br>_
_4.Using purple color to show my character <br>_



## Home

#### First, 
I want to make this part much more interesting way. So I decided to give some animation on the text. 
> 📍 This is the website where I got the idea : <https://tobiasahlin.com/moving-letters/>


![hello](https://user-images.githubusercontent.com/77384682/105478933-32896d00-5ce7-11eb-84fe-d418ee66cf3a.gif)

Add those code on your code. 


```html 
<h1 class="ml2">Sunny mornings</h1>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

```
```css

.ml2 {
  font-weight: 900;
  font-size: 3.5em;
}

.ml2 .letter {
  display: inline-block;
  line-height: 1em;
}


```

```javascript 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

```

<img width="648" alt="스크린샷 2021-01-22 오후 7 24 45" src="https://user-images.githubusercontent.com/77384682/105479415-c52a0c00-5ce7-11eb-846c-1aee25b14040.png">
This is my html code

<hr>

#### Second, 
I made navbar part transparent when It is on the top, but when it is scrolled down It has lavender color and Home part also slightly invisible.

![home](https://user-images.githubusercontent.com/77384682/105480165-bf80f600-5ce8-11eb-861d-9d5bd73dabb8.gif)


Here is my code! 

```css
  /*navbar*/

  #navbar{
      position:fixed;
      display:flex; 
      width:100%;
      justify-content: space-between;
      background-color: transparent;
      align-items:center; 
      padding: 16px; 
      transition:all var(--animation-duration) ease-in-out;
      z-index:1;
  }

  #navbar.navbar--dark{
      background-color:var(--color-background);
      padding:8px;
  }
```

```javascript
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
    
    //Make home slowly fade to transparent as the window scrolls down 
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height; 
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
})
})

```

## About

This is the part to introduce about me . 
I tried to highlight my skills by giving css effetcs 
![skills](https://user-images.githubusercontent.com/77384682/105481745-d1639880-5cea-11eb-88c4-ead6c52e9705.gif)

```css
 .major__icon{
      width:170px; 
      height: 170px; 
      font-size:70px;
      line-height:170px;
      margin:auto;
      border:1px solid var(--color-icon);
      border-radius: 50%;
      margin-bottom:16px;
      color:var(--color-icon);
  }
  
    .major__icon i{
      transition:all var(--animation-duration)  ease;
  }

  .major__icon:hover i {
      color:var(--color-pink);
      transform:rotate(-30deg) scale(1.1);
      
  }
```



## Contact 

E-mail address : <breath.ing0210@gmail.com>
