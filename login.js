function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPw = document.getElementById("loginPw").value;
    if (loginId == "hubor@admin.com" && loginPw == "admin123") {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'update-mypoemsDisplay.php?display=block');
        xhr.send();
        
        window.location.href = "https://kozmahubor.github.io/mypoems.html";
        /*let doc = document.getElementById("content")
        doc.style.display = "block"*/
    }else window.location.href = "https://media.tenor.com/B0FtTWe6TtUAAAAC/peppo-pepe.gif";
    
}

