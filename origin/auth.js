function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  let role = "";
  if (user === "admin" && pass === "agustus2025") {
    role = "admin";
  } else if (user === "panitia" && pass === "panitia2025") {
    role = "panitia";
  } else {
    document.getElementById("error").innerText = "Login gagal!";
    return;
  }

  localStorage.setItem("userRole", role);
  window.location.href = "dashboard.html";
}