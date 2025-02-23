$(document).ready(function () {
  $(".btn").click(function () {
    var newText = $(this).data("text");

    // Animate text change
    $("#display-text").fadeOut(200, function () {
      $(this).text(newText).fadeIn(200);
    });

    // Update active button
    $(".btn").removeClass("active");
    $(this).addClass("active");
  });
  $("#sportsMedicineCarousel").on("slide.bs.carousel", function (event) {
    const activeItem = $(event.relatedTarget);
    const text = activeItem.find("p").text();
    $("#display-text").text(text);
  });

  var multipleCardCarousel = document.querySelector("#carouselExampleControls");
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".testimonials .carousel-inner")[0].scrollWidth;
    var cardWidth = $(".testimonials .carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on(
      "click",
      function () {
        if (scrollPosition < carouselWidth - cardWidth) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            500
          );
        }
      }
    );
    $("#carouselExampleControls .carousel-control-prev").on(
      "click",
      function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            500
          );
        }
      }
    );
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

  // Play video on hover
  $(".card video").hover(
    function () {
      $(this).get(0).play();
    },
    function () {
      $(this).get(0).pause();
    }
  );
  //  lightbox
  const galleryItems = $(".gallery-item");
  const lightbox = $(".lightbox");
  const lightboxContent = $(".lightbox-content");
  let currentIndex = 0;

  function showLightbox(index) {
    const item = $(galleryItems[index]);
    const img = item.find("img").clone();
    img.addClass("lightbox-image");

    currentIndex = index;
    lightboxContent.empty().append(img);
    lightbox.addClass("active");
    updateNavigation();
  }

  function updateNavigation() {
    $(".lightbox-prev").toggle(currentIndex > 0);
    $(".lightbox-next").toggle(currentIndex < galleryItems.length - 1);
  }

  galleryItems.on("click", function (e) {
    e.preventDefault();
    showLightbox(galleryItems.index(this));
    $(".navbar").toggle();
  });

  $(".lightbox-close").on("click", function () {
    lightbox.removeClass("active");
    $(".navbar").toggle();
  });

  $(".lightbox-prev").on("click", function () {
    if (currentIndex > 0) {
      showLightbox(currentIndex - 1);
    }
  });

  $(".lightbox-next").on("click", function () {
    if (currentIndex < galleryItems.length - 1) {
      showLightbox(currentIndex + 1);
    }
  });

  $(document).on("keyup", function (e) {
    if (!lightbox.hasClass("active")) return;

    if (e.key === "Escape") {
      lightbox.removeClass("active");
      $(".navbar").toggle();
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
      showLightbox(currentIndex - 1);
    } else if (
      e.key === "ArrowRight" &&
      currentIndex < galleryItems.length - 1
    ) {
      showLightbox(currentIndex + 1);
    }
  });

  lightbox.on("click", function (e) {
    if ($(e.target).hasClass("lightbox")) {
      lightbox.removeClass("active");
      $(".navbar").toggle();
    }
  });
});
