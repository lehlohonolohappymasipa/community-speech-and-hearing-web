// script.js

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.2
});

fadeElements.forEach((element)=>{
  observer.observe(element);
});

// subtle parallax effect

window.addEventListener("scroll", ()=>{

  const scrollY = window.scrollY;

  document.querySelector(".hero").style.backgroundPositionY =
  `${scrollY * 0.4}px`;

});