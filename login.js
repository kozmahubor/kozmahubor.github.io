function login() {
    const loginId = document.getElementById("loginId").value;
    const loginPw = document.getElementById("loginPw").value;
    if (loginId == "hubor@admin.com" && loginPw == "admin123") {
        window.location.href = "https://kozmahubor.github.io/mypoems.html";
    }else window.location.href = "https://media.tenor.com/B0FtTWe6TtUAAAAC/peppo-pepe.gif";
    
}
function private() {
    document.getElementById("loginPw").type = "password"
}