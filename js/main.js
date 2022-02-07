document.querySelector("#form").addEventListener("submit", validarFormulario);


function validarFormulario(e) {
    e.preventDefault();

    const email = document.querySelector("#email")
    const fullEmail = email.value.trim();
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (fullEmail == "")
    {
        emptyEmail();
        return;
    };
    
    if (!emailRegex.test(fullEmail)){
        invalidEmail();
        return;
    }
    this.submit();
};

emptyEmail = () => 
{
    document.querySelector("#error").innerHTML = '"Whoops! It looks like you forgot to add your email"';
    document.querySelector("#error").classList.add("error");
    document.querySelector("input").classList.add("error2");
    
    setTimeout(() => {
        document.querySelector("#error").innerHTML = '';
        document.querySelector("#error").classList.remove("error");
        document.querySelector("input").classList.remove("error2");

    }, 3500);
}

invalidEmail = () =>
{
    document.querySelector("#error").innerHTML = '"Please provide a valid email address"';
    document.querySelector("#error").classList.add("error");
    document.querySelector("input").classList.add("error2");

    setTimeout(() => {
        document.querySelector("#error").innerHTML = '';
        document.querySelector("#error").classList.remove("error");
        document.querySelector("input").classList.remove("error2");
    }, 3500);
}