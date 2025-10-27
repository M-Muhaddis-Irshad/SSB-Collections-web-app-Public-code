const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')


// Initially check that user is already loggedin or not if logged In redirect user to home page______________________
const isUserLoggedIn = async () => {
    const { data: { session }, error } = await supabaseApi.auth.getSession()

    if (session !== null) {
        Swal.fire({
            title: "User already logged in",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
        // setTimeout(() => {
        //     window.location.href = '../../../index.html';
        // }, 1000);
    }
    
    console.log(session);
    

    const { data: { user } } = await supabaseApi.auth.getUser()
    
    console.log(user);

}

isUserLoggedIn()


// Login the user after checking all the possible errrors________________________
const login = async (mail, pass) => {

    const { data, error } = await supabaseApi.auth.signInWithPassword({
        email: mail.value,
        password: pass.value,
    });

    if (error) {
        Swal.fire({
            title: error.message,
            icon: "error",
            showConfirmButton: false,
            timer: 2000
        });
        return
    }

    Swal.fire({
        title: "Login Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    });

    setTimeout(() => {
        window.location.pathname = '../../../index.html';
    }, 1500);

}


function check() {

    // Inputs___________________________________
    const email = document.getElementById('emailInp');
    const password = document.getElementById('passwordInp');

    // Error messages___________________________________
    const mailErr = document.querySelector('.emailError');
    const passErr = document.querySelector('.passError');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email.value)) {
        email.focus()
        email.classList.add('eror');
        mailErr.classList.add('showErr');
        inputFlg = false;
        return
    }
    else {
        email.classList.remove('eror');
        mailErr.classList.remove('showErr');
    }

    if (password.value.length < 6) {
        password.focus()
        password.classList.add('eror');
        passErr.classList.add('showErr');
        inputFlg = false;
        return
    }
    else {
        password.classList.remove('eror');
        passErr.classList.remove('showErr');
    }

    login(email, password)

}



// Inputs shadow on focus block_____________________________________
{
    const inputs = document.querySelectorAll('label input');

    inputs.forEach(
        input => {

            input.addEventListener('keypress', (event) => {
                (event.key === 'Enter') ? check() : null
            })

            input.addEventListener('focus', () => {
                const shadow = input.parentElement.querySelector('.inputShadow');
                shadow.classList.add('active')
            })

            input.addEventListener('blur', () => {
                const shadow = input.parentElement.querySelector('.inputShadow');
                shadow.classList.remove('active')
            })

        }
    );
}

// let city = prompt('Enter City Name')
// let hello = 'myname';
// let nums = 324;
// const weather = async () => {
//     const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a097eb39ebf73787c3b509888e03d178&units=metric`);
//     const response = await weatherApi.json()
//     console.log(
//         `
//         Weather Api: ${weatherApi.constructor}     
        
//         String: ${hello.constructor}
        
//         Number: ${nums.constructor}
//         Response: ${response.constructor}
//         `
//     );

// }

// weather()