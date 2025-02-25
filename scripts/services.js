// Services Data
const servicesData = [
  {
    id: 1,
    image: "../images/services/photo-01.jpeg",
    title: "Injury Assessment and Evaluation",
    description:
      "Our sports rehab specialists conduct thorough assessments to understand the nature of your injury and its impact on your performance. We utilize state-of-the-art diagnostic tools and techniques to create an accurate picture of your condition.",
  },
  {
    id: 2,
    image: "../images/services/photo-02.jpeg",
    title: "Personalized Rehabilitation Plans",
    description:
      "Based on the evaluation, our team develops a personalized rehabilitation plan that includes a combination of exercises, therapies, and modalities designed to expedite healing and restore function. We emphasize evidence-based practices to ensure the most effective treatment.",
  },
  {
    id: 3,
    image: "../images/services/photo-03.jpeg",
    title: "Sport-Specific Training",
    description:
      "We offer specialized training programs tailored to your specific sport, focusing on enhancing strength, flexibility, and endurance. Our goal is to optimize your performance while minimizing the risk of re-injury.",
  },
  {
    id: 4,
    image: "../images/services/photo-04.jpeg",
    title: "Advanced Therapy Techniques",
    description:
      "Our sports rehabilitation program includes access to cutting-edge therapy techniques, such as manual therapy, therapeutic exercise, aquatic therapy, and modalities like ultrasound and electrical stimulation to support healing and pain management.",
  },
  {
    id: 5,
    image: "../images/services/photo-05.png",
    title: "Return-to-Play Assessments",
    description:
      "Before returning to your sport, we conduct thorough assessments to ensure you’re ready to perform safely and effectively. Our return-to-play protocols are designed to give you confidence in your recovery and readiness.",
  },
];

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

// Initial Build on Page Load
$(document).ready(function () {
  buildServices();
});
