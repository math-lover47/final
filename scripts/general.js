$(document).ready(function () {
  // Load the footer
  fetch("general/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  // Sections appearing animation
  // IntersectionObserver: A browser API that detects when an element enters or leaves the viewport.
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
  // observer.observe(el): Starts observing each .hidden element for visibility changes.
  hiddenElements.forEach((el) => observer.observe(el));

  // Load the navbar
  fetch("general/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
      initializeFormHandlers();
    });

  // Event Delegation for "Read More" Buttons
  $(document).on("click", ".readmorebtn", function () {
    const moreText = $(this).prev(".moretext"); // Find the associated .moretext

    moreText.toggle(); // Toggle visibility of the more text

    if (moreText.css("display") === "none") {
      $(this).html(`Read More <i class="fa-solid fa-arrow-right"></i>`);
    } else {
      $(this).html(`Read Less <i class="fa-solid fa-arrow-left"></i>`);
    }
  });
});

// User class for authentication
class User {
  constructor() {
    this.users = [];
    this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.nameRegex = /\d/; // Contains digits
  }

  // Add a new user
  register(name, email, password) {
    // Check if email already exists
    if (this.getUserByEmail(email)) {
      return {
        success: false,
        message: "This email address is already registered",
      };
    }

    // Create and store the new user
    this.users.push({ name, email, password });

    return {
      success: true,
      message: "Registration successful",
    };
  }

  // Authenticate a user
  login(email, password) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      return {
        success: true,
        message: "Login successful",
        user: user,
      };
    } else {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
  }

  // Find a user by email
  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  // Validate a name
  validateName(name) {
    if (name.length < 2) {
      return {
        valid: false,
        message: "Name must be at least 2 characters long",
      };
    } else if (name.length > 25) {
      return {
        valid: false,
        message: "Name can contain a maximum of 25 characters",
      };
    } else if (this.nameRegex.test(name)) {
      return {
        valid: false,
        message: "Name can't contain numbers",
      };
    }
    return { valid: true };
  }

  // Validate an email
  validateEmail(email) {
    if (!this.emailRegex.test(email)) {
      return {
        valid: false,
        message: "Please enter a valid email address",
      };
    }
    return { valid: true };
  }

  // Validate a password
  validatePassword(password) {
    if (password.length < 8) {
      return {
        valid: false,
        message: "Password must contain at least 8 characters",
      };
    } else if (password.length > 25) {
      return {
        valid: false,
        message: "Password must contain a maximum of 25 characters",
      };
    }
    return { valid: true };
  }
}

// Create a single instance of User class
const userAuth = new User();

function initializeFormHandlers() {
  // Sign Up Form Submission
  $("#signupForm").on("submit", function (e) {
    e.preventDefault();
    $(".signupError").hide();
    let isValid = true;

    // Validate name
    const name = $("#signupName").val();
    const nameValidation = userAuth.validateName(name);
    if (!nameValidation.valid) {
      $("#signupNameError").text(nameValidation.message).show();
      isValid = false;
    }

    // Validate email
    const email = $("#signupEmail").val();
    const emailValidation = userAuth.validateEmail(email);
    if (!emailValidation.valid) {
      $("#signupEmailError").text(emailValidation.message).show();
      isValid = false;
    } else if (userAuth.getUserByEmail(email)) {
      $("#signupEmailError")
        .text("This email address is already registered")
        .show();
      isValid = false;
    }

    // Validate password
    const password = $("#signupPassword").val();
    const passwordValidation = userAuth.validatePassword(password);
    if (!passwordValidation.valid) {
      $("#signupPasswordError").text(passwordValidation.message).show();
      isValid = false;
    }

    // If all validations pass, register the user
    if (isValid) {
      const result = userAuth.register(name, email, password);
      alert(result.message);
      if (result.success) {
        $("#signupModal").modal("hide");
      }
    }
  });

  // Login Form Submission
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    $(".loginError").hide();
    let isValid = true;

    // Validate email
    const email = $("#loginEmail").val();
    const emailValidation = userAuth.validateEmail(email);
    if (!emailValidation.valid) {
      $("#loginEmailError").text(emailValidation.message).show();
      isValid = false;
    }

    // Validate password
    const password = $("#loginPassword").val();
    const passwordValidation = userAuth.validatePassword(password);
    if (!passwordValidation.valid) {
      $("#loginPasswordError").text(passwordValidation.message).show();
      isValid = false;
    }

    // If all validations pass, attempt login
    if (isValid) {
      const result = userAuth.login(email, password);
      alert(result.message);
      if (result.success) {
        $("#loginModal").modal("hide");
        // You could store the logged in user in localStorage or sessionStorage here
        // localStorage.setItem('currentUser', JSON.stringify(result.user));
      }
    }
  });
}
