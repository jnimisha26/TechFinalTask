/*sign in to sign up n viceversa */

const signup = document.getElementById('SUp');
const signin = document.getElementById('sign');
const registeration = document.getElementById('register');
const login = document.getElementById('SIn')

signup.addEventListener('click' , () =>{
    if (registeration.style.display === 'none' || registeration.style.display === ''){
        registeration.style.display = 'flex';
        registeration.style.height = 'max-content';
        signin.style.display = 'none';
    }
});

login.addEventListener('click' , () =>{
    if (signin.style.display === 'none' || signin.style.display === ''){
        signin.style.display = 'flex';
        registeration.style.display = 'none';
    }
});

/*password*/

const show = document.getElementById('eye-icon');
const pd = document.getElementById('pass');

show.addEventListener('click' , () =>{
    if (pd.type === 'password'){
        pd.type = "text";
    }
    else {
        pd.type = "password";
    }
})
