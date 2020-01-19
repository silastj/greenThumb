//FUNÇÃO SEND
const send = document.querySelector("#send").addEventListener("click", function thankYou() {
    // var email = document.getElementById("email").value;
    // var name = document.getElementById("name").value;
    // console.log(name)
    // if (name == '' || email == '') {
    //     alert("OI");
    // } else {
    const form = document.querySelector("#form")
    form.classList.add("form-clean");
    const formThank = document.querySelector("#form-thank")
    formThank.classList.add("form-thank-ativo", "form-thank-anim");
    send();
});







//FORMULARIO
const formulario = document.querySelector("#form-one");
// console.log(formulario.elements.name.value);
// console.log(document.forms[0]);
function handleKeyUp(event) {
    const target = event.target;
    const email = document.querySelector("#email");
    // console.log(email.value);

    if (!target.checkValidity()) {

        target.classList.add('invalido');
        target.setCustomValidity("! Please provide a valid e-mail.");
        target.nextElementSibling.innerText = target.validationMessage;
        email.style.color = "#F71D1D";

    }
    console.log(event.target.checkValidity());
    console.log(event.target.value);
}
formulario.addEventListener('change', handleKeyUp);






// function send() {
//     var email = document.getElementById("email").value;
//     var name = document.getElementById("name").value;
//     // console.log(name, email);
//     if (this.email == '' || this.name == '') {
//         alert("Por Favor preencher os campos acima!!!");
//     } else {
//         // console.log(name);
//         alert("Obrigado!!!");

//     }

// }
// send();

// alert("oi");