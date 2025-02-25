let teamData = []; // Initialize an empty array
const state = {
  teamSet: teamData,
  visibleItems: 8, // Show 2 rows initially (4 cards per row)
  itemsPerLoad: 8, // Load 2 more rows when clicking "Load More"
};

// Fetch the JSON file
$(document).ready(function () {
  fetch("../data/team.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      teamData = data; // Assign the loaded data to teamData
      state.teamSet = teamData
      // Add filter change handler
      $("#categoryFilter").on("change", filterTeam);
      buildTeamCards(); // Call a function to initialize the team section
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
});

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
                          <p class="card-text mb-1 text-white">${member.role}</p>
                          <p class="card-text text-white"><small>${member.specialization}</small></p>
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
