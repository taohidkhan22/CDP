document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav_link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (sectionId === 'contact') { 
                section.style.display = 'block'; 
                section.scrollIntoView({ behavior: 'smooth' }); n
            } else {
                
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}
function scrollToTop() {
 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}


