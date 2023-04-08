import { isCorrect } from './logic.js';
const btn = document.getElementById('loginButton').addEventListener('click', login)
function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPw = document.getElementById("loginPw").value;
    if (isCorrect(loggedIn, loginPw)) {

        var loggedIn = 'loggedIn';
        var valueOfLoggedIn = 'true'
        var expires = "";
        document.cookie = "";
        var date = new Date();
        date.setTime(date.getTime() + (10 * 1000));
        expires = "; expires=" + date.toUTCString();

        document.cookie = loggedIn + "=" + (valueOfLoggedIn || "")  + expires + "; path=/";

        window.location.href = "./mypoems.html";
        /*const xhr = new XMLHttpRequest();
        xhr.open('GET', 'updatemypoemsDisplay.php?display=block');
        xhr.send();
        
        
        let doc = document.getElementById("content")
        doc.style.display = "block"*/
    }
    else if (isCorrect(loggedIn, loginPw)) {
        window.location.href = "https://media.tenor.com/9Q8MMZUD1nQAAAAC/you-suck-suck.gif";
        
    }else window.location.href = "https://media.tenor.com/B0FtTWe6TtUAAAAC/peppo-pepe.gif";
    
}

