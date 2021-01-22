 #  ✨Sumin's Portfolio✨
 
> 📍Check my portofolio website <https://sumin03.github.io/Portfolio/>
<img width="1200" alt="screenshot" src="https://user-images.githubusercontent.com/77384682/105470092-79259a00-5cdc-11eb-9c04-93799586c01c.png">


## Table of Content 
* **[home](#home)**
* Skills 
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
I want to make this part much more interesting way. So I decided to give some animation on the text. 
> 📍 This is the website where I got the idea : <https://tobiasahlin.com/moving-letters/>

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

## Contact 

E-mail address : <breath.ing0210@gmail.com>
