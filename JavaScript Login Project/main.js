const registerEmail = 'zinminn34119@gmail.com';
const registerPw = 'hello123';

function login(e){
    e.preventDefault();

    let email = e.target[0].value;
    let pw = e.target[1].value;

    if(email && pw){
        if(email===registerEmail && pw===registerPw){
            document.querySelector('#success').innerHTML = "Login Successfuly!!";
            document.querySelector('.container').style.display = 'none';
        }
        else if(email===registerEmail && pw!==registerPw){
            document.querySelector('#error').innerHTML = "Wrong Password"
        }
        else if(email!==registerEmail && pw===registerPw){
            document.querySelector('#error').innerHTML = "Email Error"
        }
    }
    else{
        document.querySelector('#error').innerHTML = "Please Fill All Form"
    }
}