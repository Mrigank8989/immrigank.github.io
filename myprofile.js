function changeaboutmetext() {
    const aboutMeTexts = ["Tech Enthusiast", "Full Stack Web Developer"];
    const typingspeed = 100;
    const erasespeed = 50;
    const pausetime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let TextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[TextIndex];
        /* Typing */
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingspeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasespeed);
        }
        /* Switching the deleting or Typing process */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                TextIndex = (TextIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pausetime);
        }
    }

    type();
}

// Call function to add stunning modification

document.addEventListener('DOMContentLoaded', function () {
    const darkmodetoggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkmodetoggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentmode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkmodetoggle.querySelector('i').classList.toggle('fa-sun');
        darkmodetoggle.querySelector('i').classList.toggle('fa-moon');
        darkmodetoggle.querySelector('i').classList.toggle('light-mode');
    });
});

changeaboutmetext();

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                
                progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
                progressBar.classList.add('animated'); // Add a class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});
