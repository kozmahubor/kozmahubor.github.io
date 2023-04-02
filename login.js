function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPw = document.getElementById("loginPw").value;
    if (loginId == "asd" && loginPw == "asd") {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'update-mypoemsDisplay.php?display=block');
        xhr.send();
        
        window.location.href = "file:///D:/KELL/Programming/Android/GitRepo/kozmahubor.github.io/mypoems.html";
        /*let doc = document.getElementById("content")
        doc.style.display = "block"*/
    }else window.location.href = "https://media.tenor.com/B0FtTWe6TtUAAAAC/peppo-pepe.gif";
    
}