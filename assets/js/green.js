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
    var target = event.target;
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
    // var target = event.target;
    // const aaa = target.checkValidity();
    // const bbb = target.value;


    if (name == '' && email == '') {

        document.querySelector(".warning").classList.remove();
        document.querySelector(".warning").style.visibility = "visible";
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(function () {
            document.querySelector(".warning").style.visibility = "hidden";
        }, 3000)
    }
    if (name != null && email == '' || name == '' && email != null) {

        document.querySelector(".warning").classList.remove();
        document.querySelector(".warning").style.visibility = "visible";
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(function () {
            document.querySelector(".warning").style.visibility = "hidden";
        }, 3000)
    } else if (name !== null && email !== null) {
        //console.log(event.target.checkValidity);
        const formThank = document.querySelector("#form-thank");
        window.scroll({
            bottom: 0,
            behavior: "smooth"
        });
        form.classList.add("form-clean");
        formThank.classList.add("form-thank-ativo", "form-thank-anim");
    }

}