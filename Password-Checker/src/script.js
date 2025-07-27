const input = document.querySelector("#input input");
const msg = document.getElementById("message");
const button = document.getElementById("button");


const password = "secret123";

function checkPassword () {
     
    const inPass = input.value.trim();
    
    if (inPass === "") {
        msg.innerText = "Please enter password!";
        return;
    }

    if(inPass === password) {
        input.value = '';
        msg.innerText = "✅Access Granted!";
    } else {
        input.value = '';
        msg.innerText = "❌Wrong Password!";
    }
}

button.addEventListener("click", checkPassword);
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});