const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')


// Initially check that user is already loggedin or not if logged In redirect user to home page______________________
const initiallyCheckUser = async () => {
    const { data: { session }, error } = await supabaseApi.auth.getSession()

    if (session !== null) {
        Swal.fire({
            title: "User already logged in",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000
        });
        setTimeout(() => {
            window.location.href = '../../../index.html';
        }, 1000);

        const { user: { user_metadata: { email, first_name } } } = session

        localStorage.setItem('userName', first_name);
        localStorage.setItem('userEmail', email);
        return
    }

}

initiallyCheckUser()


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
            text: `If don't have an account please register`,
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
    }, 1000);

    {//After login save the user data in local storage
        const { data: { session }, error } = await supabaseApi.auth.getSession()
        const { user: { user_metadata: { email, first_name } } } = session
        localStorage.setItem('userName', first_name);
        localStorage.setItem('userEmail', email);
    }

}


// All Inputs______________________________________
const inputs = document.querySelectorAll('input');

{// Stop the default behavior of <form>____________________________________

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        check()
        inputs.forEach(inputs => inputs.blur())
    })
}


// Inputs___________________________________
const email = document.getElementById('emailInp');
const password = document.getElementById('passwordInp');

function check() {

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

    if (password.value.length < 8) {
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



{// Inputs shadow on focus block_____________________________________
    inputs.forEach((input) => {

        input.addEventListener('focus', () => {
            const shadow = input.parentElement.querySelector('.inputShadow');
            shadow.classList.add('active')
        })

        input.addEventListener('blur', () => {
            const shadow = input.parentElement.querySelector('.inputShadow');
            shadow.classList.remove('active')
        })

    });
}
