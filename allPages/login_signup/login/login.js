const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')

// console.log(supabaseApi);

const login = async (mail, pass) => {

    console.log(mail.value, pass.value);

    const { data, error } = await supabaseApi.auth.signInWithPassword({
        email: mail.value,
        password: pass.value,
    });

    // User auto confirmation query________________________________________________

    // const { data, error } = await supabaseApi.auth.admin.createUser({
    //     email: email.value,
    //     email_confirm: true
    // })

    // if (error) {
    //     console.log(error);
    //     Swal.fire({
    //         title: error.message,
    //         icon: "error"
    //     });
    //     return
    // }

    // Auto confirm user from suabase____________________________
    // const { data, error } = await supabaseApi.auth.admin.createUser({
    //     email: email.value,
    //     password: password.value,
    //     email_confirm: true // ✅ instantly confirmed
    // });

    // if (error) {
    //     console.log(error.message);
    //     return
    // }
    // else {
    //     console.log(data);
    //     return
    // }

    // User auto confirmation query________________________________________________


    // Show message to user for confirm it's email before login____________________________________
    // if (error && error.message.includes("Email not confirmed")) {
    //     Swal.fire({
    //         title: "Email Not Verified!",
    //         text: "Please check your inbox and verify your email before logging in.",
    //         icon: "warning"
    //     });
    //     return;
    // }

    if (error) {
        alert(error.message)
        console.log(error.message, error);
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
        setTimeout(() => {
            window.location.href = '../../../index.html';
        }, 1000);
    }
    else {
        // console.log(session);
        // console.log(error);
    }

}

isUserLoggedIn()

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



// Inputs shadow on focus block_____________________________________
{
    const inputs = document.querySelectorAll('label input');

    inputs.forEach(input => {

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