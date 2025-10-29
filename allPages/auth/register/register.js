const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')

{// Initially check that user is logged in if yes so redirect the user to home page & disable login page________________
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

        }

    }

    initiallyCheckUser()
}

const createUser = async (name, email, password) => {
    const { data, error } = await supabaseApi.auth.signUp(
        {
            email: email.value,
            password: password.value,
            options: {
                data: {
                    first_name: name.value,
                    // age: 27,
                }
            }
        }
    );

    if (error) {
        Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error"
        });
        return
    }

    Swal.fire({
        title: "Account Created Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    });

    setTimeout(() => {
        window.location.href = '../../../index.html';
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
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        register();
        inputs.forEach(inputs => inputs.blur())
    });
}

// Inputs___________________________
const userName = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const password = document.getElementById('passwordInp');

// Checking inputs before creating user_______________________________
function register() {

    // Error messages___________________________
    const nameErr = document.querySelector('.nameErr');
    const mailErr = document.querySelector('.emailError');
    const passErr = document.querySelector('.passError');

    // All errors_______________________
    const errMsgs = document.querySelectorAll('.errorMsg');

    let inputArr = [userName, email, password];

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let inputFlg = true;
    for (let i = 0; i < inputArr.length; i++) {

        const inputs = inputArr[i];
        const value = inputs.value.trim();

        if (value === "") {
            inputs.focus()
            inputs.classList.add(`eror`);
            errMsgs[i].classList.add('showErr');
            inputFlg = false;
            break
        }
        else {
            inputs.classList.remove(`eror`);
            // nameErr.classList.remove('active');
            errMsgs[i].classList.remove('showErr');
        }

        // Check Email_____________________
        if (inputs === email && !emailRegex.test(email.value)) {
            email.focus()
            email.classList.add('eror');
            mailErr.classList.add('showErr');
            inputFlg = false;
            break
        }
        else {
            email.classList.remove('eror');
            mailErr.classList.remove('showErr');
        }

        // Check Password_____________________
        if (inputs === password && password.value.length < 8) {
            password.focus()
            password.classList.add('eror');
            passErr.classList.add('showErr');
            inputFlg = false;
            break
        }
        else {
            password.classList.remove('eror');
            passErr.classList.remove('showErr');
        }
    }

    if (!inputFlg) {
        return
    }

    createUser(...inputArr)


}

{// Inputs shadow on focus & execute Register function on Enter press_____________________________________
    inputs.forEach(

        input => {
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