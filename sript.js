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
