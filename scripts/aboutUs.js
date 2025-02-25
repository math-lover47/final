const teamData = [
  {
    id: 1,
    image: "../images/ourteam/photo-02m.jpg",
    name: "Dr. Azamat Nurlybekov",
    role: "Chief Sports Medicine Physician",
    category: "doctors",
    specialization: "Sports Injury Specialist",
  },
  {
    id: 2,
    image: "../images/ourteam/photo-01.jpg",
    name: "Dr. Dinara Kaliyeva",
    role: "Rehabilitation Specialist",
    category: "doctors",
    specialization: "Physical Therapy",
  },
  {
    id: 3,
    image: "../images/ourteam/photo-13m.jpg",
    name: "Yerlan Toktar",
    role: "Head Athletic Trainer",
    category: "trainers",
    specialization: "Strength & Conditioning",
  },
  {
    id: 4,
    image: "../images/ourteam/photo-01m.jpg",
    name: "Dr. Aigul Zhumagaliyeva",
    role: "Sports Nutritionist",
    category: "doctors",
    specialization: "Diet & Nutrition for Athletes",
  },
  {
    id: 5,
    image: "../images/ourteam/photo-14m.jpg",
    name: "Dr. Timur Sarsenov",
    role: "Orthopedic Surgeon",
    category: "doctors",
    specialization: "Joint Reconstruction",
  },
  {
    id: 6,
    image: "../images/ourteam/photo-03.jpg",
    name: "Dr. Aizhan Abilova",
    role: "Cardiologist",
    category: "doctors",
    specialization: "Cardiac Health in Athletes",
  },
  {
    id: 7,
    image: "../images/ourteam/photo-07m.jpg",
    name: "Dr. Askar Bolatov",
    role: "Neurologist",
    category: "doctors",
    specialization: "Concussion Management",
  },
  {
    id: 8,
    image: "../images/ourteam/photo-09.jpg",
    name: "Dr. Gulnara Iskakova",
    role: "Pediatric Sports Medicine Specialist",
    category: "doctors",
    specialization: "Youth Athlete Care",
  },
  {
    id: 9,
    image: "../images/ourteam/photo-0.jpg",
    name: "Dr. Marat Zhunussov",
    role: "Radiologist",
    category: "doctors",
    specialization: "Diagnostic Imaging",
  },
  {
    id: 10,
    image: "../images/ourteam/photo-10.jpg",
    name: "Dr. Aliya Kenzhebekova",
    role: "Physiotherapist",
    category: "doctors",
    specialization: "Post-Surgical Rehabilitation",
  },
  {
    id: 11,
    image: "../images/ourteam/photo-11.jpg",
    name: "Dr. Nurzhan Toleubayev",
    role: "Sports Psychologist",
    category: "doctors",
    specialization: "Mental Performance",
  },
  {
    id: 12,
    image: "../images/ourteam/photo-03.jpg",
    name: "Dr. Aigerim Omarova",
    role: "Endocrinologist",
    category: "doctors",
    specialization: "Hormonal Health in Athletes",
  },
  {
    id: 13,
    image: "../images/ourteam/photo-13m.jpg",
    name: "Dr. Bakytzhan Kadyrov",
    role: "Pulmonologist",
    category: "doctors",
    specialization: "Respiratory Health in Athletes",
  },
  {
    id: 14,
    image: "../images/ourteam/photo-06.jpg",
    name: "Dr. Zarina Mukhamedzhanova",
    role: "Dermatologist",
    category: "doctors",
    specialization: "Skin Health for Athletes",
  },
  {
    id: 15,
    image: "../images/ourteam/photo-01.jpg",
    name: "Dr. Rustem Karimov",
    role: "Chiropractor",
    category: "doctors",
    specialization: "Spinal Health",
  },
  {
    id: 16,
    image: "../images/ourteam/photo-11.jpg",
    name: "Amina Serikova",
    role: "Head Physiotherapist",
    category: "trainers",
    specialization: "Injury Prevention",
  },
  {
    id: 17,
    image: "../images/ourteam/photo-12m.jpg",
    name: "Daniyar Zhakupov",
    role: "Strength Coach",
    category: "trainers",
    specialization: "Powerlifting",
  },
  {
    id: 18,
    image: "../images/ourteam/photo-10.jpg",
    name: "Aizhan Bekmuratova",
    role: "Yoga Instructor",
    category: "trainers",
    specialization: "Flexibility & Recovery",
  },
  {
    id: 19,
    image: "../images/ourteam/photo-14m.jpg",
    name: "Arman Suleimenov",
    role: "Head Swimming Coach",
    category: "trainers",
    specialization: "Aquatic Therapy",
  },
  {
    id: 20,
    image: "../images/ourteam/photo-09.jpg",
    name: "Gulmira Tursunova",
    role: "Massage Therapist",
    category: "trainers",
    specialization: "Soft Tissue Therapy",
  },
  {
    id: 21,
    image: "../images/ourteam/photo-07.jpg",
    name: "Dr. Almas Tulegenov",
    role: "Podiatrist",
    category: "doctors",
    specialization: "Foot & Ankle Care",
  },
  {
    id: 22,
    image: "../images/ourteam/photo-08.jpg",
    name: "Dr. Aizhan Baimukhanova",
    role: "Osteopath",
    category: "doctors",
    specialization: "Musculoskeletal Health",
  },
  {
    id: 23,
    image: "../images/ourteam/photo-09.jpg",
    name: "Dr. Kairat Zhumagaliev",
    role: "Gastroenterologist",
    category: "doctors",
    specialization: "Digestive Health in Athletes",
  },
  {
    id: 24,
    image: "../images/ourteam/photo-10.jpg",
    name: "Dr. Aigerim Satybaldiyeva",
    role: "Dentist",
    category: "doctors",
    specialization: "Oral Health for Athletes",
  },
  {
    id: 25,
    image: "../images/ourteam/photo-11.jpg",
    name: "Dr. Bauyrzhan Nurgaliev",
    role: "Urologist",
    category: "doctors",
    specialization: "Urinary Health in Athletes",
  },
  {
    id: 26,
    image: "../images/ourteam/photo-12.jpg",
    name: "Dr. Madina Kenzhegaliyeva",
    role: "Allergist",
    category: "doctors",
    specialization: "Allergy Management",
  },
  {
    id: 27,
    image: "../images/ourteam/photo-13.jpg",
    name: "Dr. Aslanbek Kadyrov",
    role: "Rheumatologist",
    category: "doctors",
    specialization: "Joint Health",
  },
  {
    id: 28,
    image: "../images/ourteam/photo-14m.jpg",
    name: "Dr. Zhanar Tuleubayeva",
    role: "Oncologist",
    category: "doctors",
    specialization: "Cancer Prevention in Athletes",
  },
  {
    id: 29,
    image: "../images/ourteam/photo-01.jpg",
    name: "Dr. Erlan Zhunussov",
    role: "Infectious Disease Specialist",
    category: "doctors",
    specialization: "Infection Prevention",
  },
  {
    id: 30,
    image: "../images/ourteam/photo-02.jpg",
    name: "Dr. Aizhan Sarsenova",
    role: "Sleep Specialist",
    category: "doctors",
    specialization: "Sleep Optimization for Athletes",
  },

  // ... Add more team members following this pattern
];

const state = {
  teamSet: teamData,
  visibleItems: 8, // Show 2 rows initially (4 cards per row)
  itemsPerLoad: 8, // Load 2 more rows when clicking "Load More"
};

function filterTeam() {
  const selectedCategory = $("#categoryFilter").val();
  let filteredTeam = teamData;

  if (selectedCategory !== "all") {
    filteredTeam = teamData.filter(
      (member) => member.category === selectedCategory
    );
  }

  state.teamSet = filteredTeam;
  state.visibleItems = 8; // Reset to initial view
  buildTeamCards();
}

function buildTeamCards() {
  const teamContainer = $("#teamCards");
  teamContainer.empty();

  const visibleTeam = state.teamSet.slice(0, state.visibleItems);

  visibleTeam.forEach((member) => {
    const card = `
          <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
              <div class="card team-card h-100">
                  <div class="card-img-overlay-wrapper">
                      <img src="${member.image}" class="card-img h-100" alt="">
                      <div class="card-img-overlay bg-dark bg-opacity-50 d-flex flex-column justify-content-end text-white">
                          <h5 class="card-title">${member.name}</h5>
                          <p class="card-text mb-1">${member.role}</p>
                          <p class="card-text"><small>${member.specialization}</small></p>
                      </div>
                  </div>
              </div>
          </div>
      `;
    teamContainer.append(card);
  });

  // Show/hide load more button
  const loadMoreBtn = $("#loadMoreBtn");
  if (state.visibleItems >= state.teamSet.length) {
    loadMoreBtn.hide();
  } else {
    loadMoreBtn.show();
  }
}

function loadMore() {
  state.visibleItems += state.itemsPerLoad;
  buildTeamCards();
}

// Add necessary CSS
const styles = `
<style>
  .team-card {
      border: none;
      border-radius: 8px;
      overflow: hidden;
  }
  
  .card-img-overlay-wrapper {
      position: relative;
      height: 300px;
  }
  
  .card-img {
      object-fit: cover;
      height: 100%;
  }
  
  .card-img-overlay {
      transition: all 0.3s ease;
  }
  
  .team-card:hover .card-img-overlay {
      background-color: rgba(0, 0, 0, 0.7) !important;
  }
</style>
`;

// Add event listeners
$(document).ready(function () {
  $($("#readmorebtn")).on("click", () => {
    $("#moretext").toggle();
    if ($("#moretext").css("display") === "none") {
      $("#readmorebtn").text("Read More"); // Use .text() method to set text
    } else {
      $("#readmorebtn").text("Read Less"); // Use .text() method to set text
    }
  });

  // Add styles to document
  $("head").append(styles);

  // Add filter change handler
  $("#categoryFilter").on("change", filterTeam);

  // Initial build
  buildTeamCards();
});
