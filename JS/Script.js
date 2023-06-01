ScrollReveal().reveal('.top-half');
ScrollReveal().reveal('.phone-container');
ScrollReveal().reveal('.conjunction-container');
ScrollReveal().reveal('.conjunction-container2');
ScrollReveal().reveal('.wholebg');
ScrollReveal().reveal('.dashboard-whole');
ScrollReveal().reveal('.roadmap');
ScrollReveal().reveal('.signup-container');

VanillaTilt.init(document.querySelectorAll(".glass-card"), {
  max: 25,
  speed: 400
});

const accordion = document.getElementsByClassName('contentBx');

        for (i = 0; i<accordion.length; i++ ){
            accordion[i].addEventListener('click', function(){
                this.classList.toggle('active')
            })
        }

        document.getElementById("signup-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
        
          document.getElementById("signup").hidden = true;
          document.getElementById("post-signup").hidden = false;
          document.getElementById("post-signup").childNodes[1].innerText = `Welcome ${name}!`
          document.getElementById("post-signup").childNodes[5].innerText = `Check your email ${email} for a link to complete your registration.`
        
        });

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});






