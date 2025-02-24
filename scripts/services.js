$(document).ready(function () {
  class Service {
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  }

  // Example service filtering
  const services = [
    new Service("Injury Rehabilitation", "Custom recovery plans..."),
    // Add more services
  ];

  function filterServices(query) {
    return services.filter((service) =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Accordion interactivity
  $(".accordion-button").click(function () {
    $(this).toggleClass("active-service");
  });
});
