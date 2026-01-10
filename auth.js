// =============================
// نظام تسجيل ودخول بسيط
// =============================

// تسجيل حساب جديد
function register() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("❌ اكتب اسم المستخدم وكلمة السر");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("✅ تم إنشاء الحساب بنجاح");
  location.href = "login.html";
}

// تسجيل الدخول
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("logged", user);
    location.href = "index.html";
  } else {
    alert("❌ بيانات الدخول غير صحيحة");
  }
}

// حماية الصفحات (لو مش مسجل يرجع تسجيل)
function checkLogin() {
  if (!localStorage.getItem("logged")) {
    location.href = "login.html";
  }
}

// تسجيل خروج
function logout() {
  localStorage.removeItem("logged");
  location.href = "login.html";
}
