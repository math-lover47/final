$(document).ready(function () {
  // Load the navbar into the container
  fetch("general/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    });
  // Load the navbar into the container
  fetch("general/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  // sections appearing animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  // Array to store user data
  let users = [];

  // Login Form Submission
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const email = $("#loginEmail").val();
    const password = $("#loginPassword").val();

    // Check if user exists
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert("Login successful!");
      $("#loginModal").modal("hide");
    } else {
      alert("Invalid email or password.");
    }
  });

  // Sign Up Form Submission
  $("#signupForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#signupName").val();
    const email = $("#signupEmail").val();
    const password = $("#signupPassword").val();

    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      alert("Email already registered.");
    } else {
      // Save user data
      users.push({ name, email, password });
      alert("Sign up successful!");
      $("#signupModal").modal("hide");
    }
  });
});
