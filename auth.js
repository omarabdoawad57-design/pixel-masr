function login(){
localStorage.setItem("user",document.getElementById("user").value);
alert("تم تسجيل الدخول");
location.href="index.html";
}
