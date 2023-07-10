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
