//FUNÇÃO SEND
// const send = document.querySelector("#send").addEventListener("click", function thankYou() {
//     // var email = document.getElementById("email").value;
//     // var name = document.getElementById("name").value;
//     // console.log(name)
//     // if (name == '' || email == '') {
//     //     alert("OI");
//     // } else {
//     const form = document.querySelector("#form")
//     form.classList.add("form-clean");
//     const formThank = document.querySelector("#form-thank")
//     formThank.classList.add("form-thank-ativo", "form-thank-anim");
//     send();
// });







//FORMULARIO
const formulario = document.querySelector("#form-one");

function handleKeyUp(event) {
    const target = event.target;
    const email = document.querySelector("#email");
    const labelEmail = document.querySelector(".email");

    console.log(email.value);

    if (!target.checkValidity()) {

        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
        target.setCustomValidity("! Please provide a valid e-mail.");

        email.style.color = "#F71D1D";
        labelEmail.style.color = "#F71D1D";
    }

    console.log(event.target.checkValidity());
    console.log(event.target.value);
}
formulario.addEventListener('change', handleKeyUp);






function send() {
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name_user").value;
    const form = document.querySelector("#form")

    if (name == '' && email == '') {
        alert("Por Favor preencher os campos acima!!!");
    }
    if (name != null && email == '') {
        alert("por favor corrigir o email");
    }
    if (name == null && email == null) {
        const formThank = document.querySelector("#form-thank")
        form.classList.add("form-clean");
        formThank.classList.add("form-thank-ativo", "form-thank-anim");
    } else {

    }

}