/* ----- NAVIGATION BAR FUNCTION ----- */

function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.card',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

// Initialize EmailJS with your User ID


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the submit button
  const submitButton = this.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  
  // Show loading state
  submitButton.innerHTML = '<i class="uil uil-spinner-alt"></i> Sending...';
  submitButton.disabled = true;

  emailjs.init("sXGbFgspniN330TZw"); // Replace with your actual EmailJS User ID
  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = "The Email is :" + email + "        The content is : " + document.getElementById("message").value;

  // Send the email
  emailjs.send("service_xfr771gg", "template_uqs7l4o", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    // Reset button state
    submitButton.innerHTML = originalButtonText;
    submitButton.disabled = false;
    
    // Show success message with SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent successfully!',
      confirmButtonColor: '#3085d6'
    });
    
    // Clear form
    document.getElementById("contactForm").reset();
    
    console.log("Success:", response.status, response.text);
  }, function(error) {
    // Reset button state
    submitButton.innerHTML = originalButtonText;
    submitButton.disabled = false;
    
    // Show error message with SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong! Please try again.',
      confirmButtonColor: '#3085d6'
    });
    
    console.error("Error:", error);
  });
});
const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    downloadCV: "Download CV ",
    introduction: "I'm ",
    intro: "Skilled full stack developer with a passion for creating seamless, scalable web applications from front to back.",
    introText: ["Front-End Developer", "Back-End Developer"],
    aboutMe: "About Me",
    myIntroduction: "My introduction",
    scrollDown:"scroll down",
    getInTouch:"Get in touch",
    findMe:"Find Me ",
    send:"Send ",
    contactDesc:"Do you have a project in your mind, contact me here.",
    aboutText: "I am well-versed in HTML, CSS, PHP, Python and JavaScript, and other cutting edge frameworks and libraries, which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress.",
    project1Title: "FastDelivery",
    project1Desc: "FastDelivery is a cloud-native microservices application that manages e-commerce deliveries. This system replaces a monolithic architecture with four independent microservices that communicate via REST APIs and share authentication via JWT tokens.",
    project2Title: "FITMAS Club",
    project2Desc: "FITMAS club app / club sportif management website",
    project3Title: "SRDT Finance",
    project3Desc: "SRDT finance management website",
    project4Title: "DRMS Dashboard",
    project4Desc: "DRMS tableau de bord (still on going)",
    project5Title: "Job Scraping",
    project5Desc: "Web scraping jobs using selenium and pandas from indeed.com",
    viewProject: "View Project",
    // Add other translations as needed
  },
  de: {
    home: "Startseite",
    about: "Über mich",
    projects: "Projekte",
    contact: "Kontakt",
    downloadCV: "Lebenslauf herunterladen ",
    introduction: "Ich bin ",
    intro:"Erfahrener Full-Stack-Entwickler mit einer Leidenschaft für die Erstellung nahtloser, skalierbarer Webanwendungen von vorne bis hinten.",
    introText: ["Frontend-Entwickler", "Backend-Entwickler"],
    aboutMe: "Über mich",
    myIntroduction: "Meine Vorstellung",
    scrollDown:"Nach unten scrollen",
    getInTouch:"Kontaktieren Sie mich",
    findMe:"Finden Sie mich ",
    send:"Senden ",
    contactDesc:"Haben Sie ein Projekt im Sinn? Kontaktieren Sie mich hier.",
    aboutText: "Ich bin versiert in HTML, CSS, PHP, Python und JavaScript sowie in anderen modernen Frameworks und Bibliotheken, was es mir ermöglicht, interaktive Funktionen zu implementieren. Zusätzlich habe ich Erfahrung mit Content-Management-Systemen (CMS) wie WordPress.",
    project1Title: "FastDelivery",
    project1Desc: "FastDelivery ist eine Cloud-native Microservices-Anwendung zur Verwaltung von E-Commerce-Lieferungen. Dieses System ersetzt eine monolithische Architektur durch vier unabhängige Microservices, die über REST-APIs kommunizieren und die Authentifizierung über JWT-Tokens teilen.",
    project2Title: "FITMAS Club",
    project2Desc: "FITMAS Club App / Sportclub-Management-Website",
    project3Title: "SRDT Finance",
    project3Desc: "SRDT Finanzmanagement-Website",
    project4Title: "DRMS Dashboard",
    project4Desc: "DRMS Dashboard (in Bearbeitung)",
    project5Title: "Job Scraping",
    project5Desc: "Web-Scraping von Jobs mit Selenium und Pandas von indeed.com",
    viewProject: "Projekt ansehen",
    // Add other translations as needed
  }
};

let currentLanguage = 'en';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
  updateLanguage();
  document.getElementById('languageBtn').textContent = currentLanguage === 'en' ? 'DE' : 'EN';
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (key && translations[currentLanguage][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[currentLanguage][key];
      } else {
        el.textContent = translations[currentLanguage][key];
      }
    }
  });
  
  // Update typed text effect with translated strings
  initializeTypingEffect();
}

/* ----- TYPING EFFECT ----- */
let typed; // Declare typed globally so it can be destroyed and re-initialized

function initializeTypingEffect() {
  if (typed) {
    typed.destroy(); // Destroy the previous instance if it exists
  }
  typed = new Typed(".typedText", {
    strings: translations[currentLanguage].introText,
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
}

// Add click event listener to language button
document.getElementById('languageBtn').addEventListener('click', toggleLanguage);

// Initialize language and typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage();
  initializeTypingEffect();
});
