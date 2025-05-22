// Controle de idiomas
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and content
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.bio-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.querySelector(`.bio-content.${this.dataset.lang}`).classList.add('active');
    });
});

// Permitir ativar/desativar áudio ao clicar no vídeo
const mainVideo = document.getElementById('background-video');
if(mainVideo) {
    mainVideo.addEventListener('click', function() {
        if (mainVideo.muted) {
            mainVideo.muted = false;
        } else {
            mainVideo.muted = true;
        }
    });
}
const videoMobile = document.getElementById('background-video-mobile');
if(videoMobile) {
    videoMobile.addEventListener('click', function() {
        if (videoMobile.muted) {
            videoMobile.muted = false;
        } else {
            videoMobile.muted = true;
        }
    });
}

// Rolagem suave para os links do menu
const smoothLinks = document.querySelectorAll('a.smooth-scroll');
smoothLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 40,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const carouselBio = document.querySelector('#carouselbio')

const carousel = new bootstrap.Carousel(carouselBio, {
  interval: 3000,
  touch: false
})