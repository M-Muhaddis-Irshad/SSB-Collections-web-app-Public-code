// NavBar toggling__________________________________________

// const  body = document.getElementsByTagName("body");
const navContainer = document.getElementById('navContainer');
const toggleBar = document.getElementById('toggleBar');
const navLinks = document.getElementById('navLinks');

toggleBar.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    toggleBar.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('active')
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


// NewsLetter_____________________________________________________________

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
            timerProgressBar: true,
            allowOutsideClick: true,
            allowEscapeKey: true,
            didOpen: () => {
                const progressBar = Swal.getTimerProgressBar();
                if (progressBar) {
                    progressBar.style.background = "dodgerblue";
                    progressBar.style.height = "6px";
                }
            }
        });
        subscribeInput.value = "";
    }

}


// CopyRight-Claim Date___________________________________

const d = new Date();

const year = document.getElementById('year').innerText = d.getFullYear();