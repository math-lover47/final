let carddata = [];

const state = {
  cardSet: carddata,
  page: 1,
  rows: 6,
};
// Initial build
$(document).ready(function () {
  // Fetch the JSON file
  
  fetch("../data/article.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      
      carddata = data; // Assign the loaded data to carddata
      state.cardSet = carddata;
      $("#categoryFilter, #readTimeFilter").on("change", filterCards);
      buildCards(); // Call a function to initialize the team section
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
});
function pagination(cardSet, page, rows) {
  const trimStart = (page - 1) * rows;
  const trimEnd = trimStart + rows;
  // Fixed: Changed querySet to cardSet
  const trimmedData = cardSet.slice(trimStart, trimEnd);
  const pages = Math.ceil(cardSet.length / rows);

  return {
    cardSet: trimmedData,
    pages: pages,
  };
}

function buildCards() {
  const cards = $("#cards");
  // Clear existing cards before adding new ones
  cards.empty();

  const data = pagination(state.cardSet, state.page, state.rows);
  const myList = data.cardSet; // Fixed: Use paginated data instead of full cardSet

  myList.forEach((obj) => {
    const card = `
            <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
                <div class="card" data-category="${obj.category}">
                    <img src="${obj.image}" class="card-img-top" alt="${obj.title}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${obj.category}</span>
                        <h5 class="card-title">${obj.title}</h5>
                        <div class="moretext">
                          <p class="card-text">${obj.description}</p>
                          <p class="card-text">
                          <small class="text-body-secondary">
                          <i class="bi bi-clock"></i> Read time ${obj.read_time} min
                          </small>
                          </p>
                        </div>
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

  // Add pagination buttons
  buildPagination(data.pages);
}

function buildPagination(pages) {
  const pagination = $("#pagination");
  pagination.empty();

  const paginationHtml = `
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item ${state.page === 1 ? "disabled" : ""}">
                    <a class="page-link" href="#" data-page="${
                      state.page - 1
                    }">Previous</a>
                </li>
                ${Array.from({ length: pages }, (_, i) => i + 1)
                  .map(
                    (pageNum) => `
                        <li class="page-item ${
                          state.page === pageNum ? "active" : ""
                        }">
                            <a class="page-link" href="#" data-page="${pageNum}">${pageNum}</a>
                        </li>
                    `
                  )
                  .join("")}
                <li class="page-item ${state.page === pages ? "disabled" : ""}">
                    <a class="page-link" href="#" data-page="${
                      state.page + 1
                    }">Next</a>
                </li>
            </ul>
        </nav>
    `;

  pagination.html(paginationHtml);

  // Add click handlers for pagination
  $(".page-link").on("click", function (e) {
    e.preventDefault();
    const newPage = $(this).data("page");
    if (newPage >= 1 && newPage <= pages) {
      state.page = newPage;
      buildCards();
    }
  });
}

// Store original card data
const originalCardData = [...carddata];

// Function to reset filters
function resetFilters() {
  $("#categoryFilter").val("all");
  $("#readTimeFilter").val("all");
  state.cardSet = [...originalCardData];
  state.page = 1;
  buildCards();
}

function filterCards() {
  const selectedCategory = $("#categoryFilter").val();
  const selectedReadTime = $("#readTimeFilter").val();

  let filteredCards = carddata;

  // Filter by category if not "all"
  if (selectedCategory !== "all") {
    filteredCards = filteredCards.filter(
      (card) => card.category === selectedCategory
    );
  }

  // Filter by read time if not "all"
  if (selectedReadTime !== "all") {
    filteredCards = filteredCards.filter((card) => {
      switch (selectedReadTime) {
        case "quick":
          return card.read_time <= 5;
        case "normal":
          return card.read_time > 5 && card.read_time <= 15;  
        case "long":
          return card.read_time > 15;
        default:
          return true;
      }
    });
  }

  // Update state with filtered cards and reset to first page
  state.cardSet = filteredCards;
  state.page = 1;
  buildCards();
}
