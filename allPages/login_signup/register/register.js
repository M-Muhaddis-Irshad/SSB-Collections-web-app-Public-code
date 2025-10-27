const supabaseApi = supabase.createClient('https://xyowgkiynvypiblztdjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5b3dna2l5bnZ5cGlibHp0ZGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NDAyNDEsImV4cCI6MjA3NjAxNjI0MX0.pYmvrg0D6DSrLqI-A4IALR3Eoh_lex3vdwJ26wjsbnk')


// console.log(supabaseApi);

const createUser = async (name, email, password) => {
    {
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
    }

    Swal.fire({
        title: "Account Created Successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    });

    setTimeout(() => {
        window.location.href = '../../../index.html';
    }, 1500);
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
        if (inputs === password && password.value.length < 6) {
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

// Inputs shadow on focus_____________________________________
{
    const inputs = document.querySelectorAll('input');

    inputs.forEach(

        input => {

            input.addEventListener('keypress' , (event) => {
                (event.key === 'Enter') ? register() : null
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