let testimonialData = [];
const state = {
  testimonialSet: testimonialData,
};
function buildTestimonials() {
  const cards = $("#testimonialCards");
  cards.empty();

  state.testimonialSet.forEach((cardInfo, index) => {
    const card = `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="card">
          <video muted loop class="testimonialVideo">
            <source src="${cardInfo.video}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="card-img-overlay">
            <h5 class="card-title">${cardInfo.name}</h5>
            <p class="card-text text-white">${cardInfo.disease}</p>
            <a href="#" class="btn btn-primary watch-video-btn" data-video="${
              cardInfo.video
            }">
              Hear their story
            </a>
          </div>
        </div>
      </div>
    `;
    cards.append(card);
  });
}
$(document).ready(function () {
  fetch("../data/testinomial.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      testimonialData = data; // Assign the loaded data to carddata
      state.testimonialSet = testimonialData;
      buildTestimonials();

      // Event binding for watch video buttons
      $(document).on("click", ".watch-video-btn", function (e) {
        e.preventDefault();
        const videoSrc = $(this).data("video"); // Get video source from data attribute

        // Set the video source in the modal
        $("#modalVideo source").attr("src", videoSrc);
        $("#modalVideo")[0].load(); // Load the new source
        $("#modalVideo")[0].play(); // Start playing automatically

        // Show the modal
        $("#videoModal").css("display", "block");
      });

      // Close modal when the close button is clicked
      $(".close").click(function () {
        $("#modalVideo")[0].pause(); // Pause the video
        $("#videoModal").css("display", "none"); // Hide the modal
      });

      // Close modal when clicking outside the modal
      $(window).click(function (e) {
        if (e.target.id === "videoModal") {
          $("#modalVideo")[0].pause(); // Pause the video
          $("#videoModal").css("display", "none"); // Hide the modal
        }
      });
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

      var multipleCardCarousel = document.querySelector(
        "#carouselExampleControls"
      );
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
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
});
