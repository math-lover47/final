let teamData = []; // Initialize an empty array
const state = {
  // is an object that keeps track of the current state of the application:
  teamSet: teamData,
  visibleItems: 8, // Show 8 rows initially (4 cards per row)
  itemsPerLoad: 8, // Load 8 more rows when clicking "Load More"
};

// Fetch the JSON file
$(document).ready(function () {
  // fetch - make network requests, typically to retrieve resources from a server.

  // It returns a promise that resolves to the Response object representing the response to the request.

  // You can chain .then() to handle the response and .catch() to handle any errors.

  // "Producing code" is code that can take some time
  fetch("../data/team.json")
    .then((response) => response.json()) // Parse the JSON, "Consuming code" is code that must wait for the result
    .then((data) => {
      teamData = data; // Assign the loaded data to teamData
      state.teamSet = teamData;
      // Add filter change handler
      $("#categoryFilter").on("change", filterTeam);
      buildTeamCards(); // Call a function to initialize the team section
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
});

// This function filters the team members based on the selected category.
function filterTeam() {
  const selectedCategory = $("#categoryFilter").val();
  let filteredTeam = teamData;

  // If the selected category is not "all", it filters teamData to include only members of the selected category.
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
