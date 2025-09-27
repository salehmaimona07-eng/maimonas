// ننتظر لما الصفحة تفتح بالكامل
document.addEventListener("DOMContentLoaded", function () {
  // نمسك كل النماذج اللي عندها class = form-container
  const forms = document.querySelectorAll(".form-container");

  // نعمل نفس الحركات لكل نموذج
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // نمنع إعادة تحميل الصفحة

      let username = form.querySelector('input[name="username"]');
      let password = form.querySelector('input[name="password"]');

      // حركة 1: التحقق من أن الحقول مش فاضية
      if (username.value.trim() === "" || password.value.trim() === "") {
        alert(" Please enter both username and password");
        form.classList.add("shake"); // حركة 2: الاهتزاز
        setTimeout(() => form.classList.remove("shake"), 500);
        return;
      }

      // حركة 3: لو كلمة المرور أقل من 6 حروف
      if (password.value.length < 6) {
        alert(" Password must be at least 6 characters long!");
        password.focus();
        return;
      }

      // حركة 4: تغيير لون الخلفية مؤقتاً عند نجاح الإدخال
      form.style.backgroundColor = "#d4edda"; // أخضر فاتح
      setTimeout(() => {
        form.style.backgroundColor = "";
      }, 1000);

      // حركة 5: رسالة ترحيب
      alert(` Welcome ${username.value}, login successful!`);
    });
  });
});
// app.js
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
