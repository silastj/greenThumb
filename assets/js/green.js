// //FORMULARIO
// const formulario = document.querySelector("#form-one");

// function handleKeyUp(event) {
//     var target = event.target;
//     const email = document.querySelector("#email");
//     const labelEmail = document.querySelector(".email");

//     //console.log(email.value);

//     if (!target.checkValidity()) {
//         target.classList.add('invalido');
//         target.nextElementSibling.innerText = target.validationMessage;
//         target.setCustomValidity("! Please provide a valid e-mail.");
//         email.style.color = "#F71D1D";
//         labelEmail.style.color = "#F71D1D";
//     } else {

//         email.style.color = "#e6e6e6";
//         labelEmail.style.color = "#e6e6e6";
//     }

//     console.log(event.target.checkValidity());
//     console.log(event.target.value);
// }

// //formulario.addEventListener('change', handleKeyUp);

// function send() {
//     const email = document.querySelector("#email").value;
//     const name = document.querySelector("#name_user").value;
//     const form = document.querySelector("#form")

//     if (name == '' && email == '') {

//         document.querySelector(".warning").classList.remove();
//         document.querySelector(".warning").style.visibility = "visible";
//         window.scroll({
//             top: 0,
//             behavior: "smooth"
//         });
//         setTimeout(function () {
//             document.querySelector(".warning").style.visibility = "hidden";
//         }, 3000)
//     }
//     if (name != null && email == '' || name == '' && email != null) {

//         document.querySelector(".warning").classList.remove();
//         document.querySelector(".warning").style.visibility = "visible";
//         window.scroll({
//             top: 0,
//             behavior: "smooth"
//         });
//         setTimeout(function () {
//             document.querySelector(".warning").style.visibility = "hidden";
//         }, 3000)
//     } else if (name !== null && email !== null) {
//         //console.log(event.target.checkValidity);
//         const formThank = document.querySelector("#form-thank");

//         form.classList.add("form-clean");
//         formThank.classList.add("form-thank-ativo", "form-thank-anim");
//     }

// }