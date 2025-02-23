$(document).ready(function () {
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

  // lines animation
  let banner = document.querySelector(".banner");
  let canvas = document.getElementById("dotsCanvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  let ctx = canvas.getContext("2d");
  let dots = [];
  let colors = ["#eee", "#ddd", "#ccc", "#bbb", "#aaa"];

  for (let index = 0; index < 50; index++) {
    dots.push({
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
      size: Math.random() * 3 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  const drawDots = () => {
    dots.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  drawDots();

  banner.addEventListener("mousemove", (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();

    let mouse = {
      x: event.pageX - banner.getBoundingClientRect().left,
      y: event.pageY - banner.getBoundingClientRect().top,
    };

    dots.forEach((dot) => {
      let dist = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
      if (dist < 200) {
        ctx.strokeStyle = dot.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  });
  banner.addEventListener("mouseout", (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
  });
});
