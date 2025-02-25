// Services Data
let servicesData = [];
// FAQ Data
let faqData = [];
// Fetch the JSON file
$(document).ready(function () {
  fetch("../data/services.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      servicesData = data
      buildServices();
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
  fetch("../data/faq.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      faqData = data
      buildFaq();
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
});

// Function to Build Services Cards
function buildServices() {
  const cards = $("#servicesCards");
  cards.empty(); // Clear existing cards

  servicesData.forEach((service) => {
    const card = `
      <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
          <div class="card">
              <img src="${service.image}" class="card-img-top" alt="${service.title}">
              <div class="card-body">
                  <h5 class="card-title">${service.title}</h5>
                  <p class="moretext">${service.description}</p>
                  
                  <a class="btn btn-link readmorebtn">
                      Read more 
                      <i class="fa-solid fa-arrow-right"></i>
                  </a>
              </div>
          </div>
      </div>
    `;
    cards.append(card);
  });
}
// Function to Build FAQ Section
function buildFaq() {
  const faqContainer = $("#faqContainer");
  faqContainer.empty(); // Clear existing content

  faqData.forEach((faq, index) => {
    const faqItem = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="faqHeading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${index}" aria-expanded="false" aria-controls="faqCollapse${index}">
            ${faq.question}
          </button>
        </h2>
        <div id="faqCollapse${index}" class="accordion-collapse collapse" aria-labelledby="faqHeading${index}" data-bs-parent="#faqContainer">
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `;
    faqContainer.append(faqItem);
  });
}
