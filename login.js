function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPw = document.getElementById("loginPw").value;
    if (loginId == "hubor@admin.com" && loginPw == "admin123") {
        window.location.href = "https://kozmahubor.github.io/mypoems.html";
        document.getElementById("content").style.display = "block"
    }else window.location.href = "https://media.tenor.com/B0FtTWe6TtUAAAAC/peppo-pepe.gif";
    
}