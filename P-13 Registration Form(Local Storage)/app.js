  
// Registration Form
const registrationForm = document.getElementById("inputContainer");
let userDataArray = [];
const reset = document.getElementById("reset");


if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const yname = document.getElementById("yname").value;
        const lname = document.getElementById("lname").value;
        const uname = document.getElementById("uname").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
        const pnumber = document.getElementById("pnumber").value;

        const userData = {
            name: yname,
             lastName: lname,
            username: uname,
             email: email,
            password: pass,
             phoneNumber: pnumber,
        };

        userDataArray.push(userData);

        localStorage.setItem("userData", JSON.stringify(userDataArray));
        window.location.reload();
        // console.log(userData);
    });
}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginEmail = document.getElementById("log_in").value;
        const loginPass = document.getElementById("passwordd").value;

        const storedUserData = JSON.parse(localStorage.getItem("userData"));

        if (storedUserData) {
            const foundUser = storedUserData.find((user) => {
               return user.email === loginEmail && user.password === loginPass
            });

            if (foundUser) {     
                let h3 = document.querySelector("h3")
                h3.innerText = "   User found Login sucessfully"  
                // alert("Login successful");
            } else {          
                alert("Login Failed!....Try Again");
            }
        } else {
            alert("No data Found");
        }
    });
}


// Reset condition


if (reset) {
    reset.addEventListener("click", function (e) {
        e.preventDefault(); 
        document.getElementById("yname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("uname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("pnumber").value = "";
    });
}





