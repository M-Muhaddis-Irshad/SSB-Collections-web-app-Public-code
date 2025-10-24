// NavBar toggling__________________________________________
{
    const navContainer = document.getElementById('navContainer');
    const toggleBar = document.getElementById('toggleBar');
    const navLinks = document.getElementById('navLinks');
    const bars = document.querySelectorAll('.bar');

    // Check if scrollbar is on top of the window or not__________________
    {
        window.addEventListener("scroll", () => {
            const scroll = this.scrollY;
            (scroll === 0) ? navContainer.classList.remove('scrlStart') : navContainer.classList.add('scrlStart')
            // console.log(`${scroll}% Scroll`)
        });
    }
    // Add EventListener on ToggleBar__________________
    {
        toggleBar.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            toggleBar.classList.toggle('active');
            navLinks.classList.toggle('active');
            bars.forEach( obj => obj.classList.toggle('active'))
            document.body.classList.toggle('active')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }
}

// Hero section______________
const video = document.querySelector('.hero_video');
if (window.innerWidth < 600 && video) {
    video.style.display = 'none';
}


// NewsLetter_____________________________________________________________
{
    const emailRagex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const subscribeInput = document.getElementById('letterMail');

    subscribeInput.addEventListener('keypress', (event) => {
        (event.key === 'Enter') ? SubscribeToNewsLetter() : null;
    })

    function SubscribeToNewsLetter() {

        if (!subscribeInput.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Input can't be empty",
                text: "Enter your email address"
            });
        }
        else if (!emailRagex.test(subscribeInput.value)) {
            Swal.fire({
                icon: "error",
                title: "Email is not correct",
                text: "Check your email address"
            });
        }
        else {
            Swal.fire({
                icon: "success",
                title: "Subscription confirmed!",
                text: " You’ll now receive our latest news, tips, and updates straight to your email.",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,    // shows progress line at top
                allowOutsideClick: true,   // let user click outside to close
                allowEscapeKey: true,       // allow ESC key to close.
                didOpen: () => {
                    const progressBar = Swal.getTimerProgressBar();
                    if (progressBar) {
                        progressBar.style.background = "dodgerblue"; // 💙 color for progress bar
                        progressBar.style.height = "6px";            // slightly thicker line
                    }
                }
            });
            subscribeInput.value = "";
        }

    }
}

// CopyRight-Claim Date___________________________________

const d = new Date();

const year = document.getElementById('year').innerText = d.getFullYear();