function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPw = document.getElementById("loginPw").value;
    if (loginId == "asd" && loginPw == "asd") {
        window.location.href = "https://kozmahubor.github.io/mypoems.html";
        let doc = document.getElementById("content")
        doc.style.display = "block"
    }else window.location.href = "https://media.tenor.com/B0FtTWe6TtUAAAAC/peppo-pepe.gif";
    
}