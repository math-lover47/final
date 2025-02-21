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
});
