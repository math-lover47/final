const carddata = [
  {
    id: 1,
    image: "../images/blogcards/photo-01.jpg",
    category: "Performance Optimization",
    read_time: 8,
    title: "Modern Methods of Athletic Performance Evaluation",
    description:
      "Learn about cutting-edge techniques used in Astana Sport Medicine for evaluating athlete performance and recovery.",
  },
  {
    id: 2,
    image: "../images/blogcards/photo-02.jpg",
    category: "Health & Recovery",
    read_time: 6,
    title: "Post-Injury Recovery Protocols",
    description:
      "Discover the latest rehabilitation protocols used by Kazakh national team athletes.",
  },
  {
    id: 3,
    image: "../images/blogcards/photo-03.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 10,
    title: "Nutrition Guidelines for Combat Sports",
    description:
      "Essential nutrition advice for wrestlers and boxers training in high-altitude conditions.",
  },
  {
    id: 4,
    image: "../images/blogcards/photo-04.jpg",
    category: "Performance Optimization",
    read_time: 7,
    title: "High-Altitude Training Benefits",
    description:
      "Research-based approaches to training in Kazakhstan's varying altitude conditions.",
  },
  {
    id: 5,
    image: "../images/blogcards/photo-05.jpg",
    category: "Performance Optimization",
    read_time: 5,
    title: "Mental Toughness in Elite Athletes",
    description:
      "Explore the psychological strategies used by top athletes to maintain peak performance.",
  },
  {
    id: 6,
    image: "../images/blogcards/photo-06.jpg",
    category: "Performance Optimization",
    read_time: 15,
    title: "Wearable Tech in Sports",
    description:
      "How wearable technology is revolutionizing athlete monitoring and performance analysis.",
  },
  {
    id: 7,
    image: "../images/blogcards/photo-07.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 5,
    title: "Developing Young Athletes",
    description:
      "Best practices for nurturing talent in young athletes without burnout.",
  },
  {
    id: 8,
    image: "../images/blogcards/photo-08.jpg",
    category: "Health & Recovery",
    read_time: 15,
    title: "Advanced Recovery Techniques",
    description:
      "Innovative recovery methods to enhance athlete performance and reduce injury risks.",
  },
  {
    id: 9,
    image: "../images/blogcards/photo-09.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 25,
    title: "Building a Winning Team Culture",
    description:
      "Strategies for fostering teamwork and collaboration in sports teams.",
  },
  {
    id: 10,
    image: "../images/blogcards/photo-10.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 25,
    title: "Preparing for the Olympics",
    description:
      "Insights into the rigorous training and preparation required for Olympic athletes.",
  },
  {
    id: 11,
    image: "../images/blogcards/photo-11.jpg",
    category: "Performance Optimization",
    read_time: 15,
    title: "Maximizing Endurance Performance",
    description:
      "Training and nutrition tips for endurance athletes to optimize performance.",
  },
  {
    id: 12,
    image: "../images/blogcards/photo-12.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 5,
    title: "Strength Training for Athletes",
    description:
      "Effective strength training routines tailored for different sports disciplines.",
  },
  {
    id: 13,
    image: "../images/blogcards/photo-13.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 5,
    title: "Improving Flexibility for Athletes",
    description:
      "The role of flexibility in injury prevention and performance enhancement.",
  },
  {
    id: 14,
    image: "../images/blogcards/photo-14.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 5,
    title: "Hydration Strategies for Athletes",
    description:
      "The importance of proper hydration and strategies to maintain it during training and competition.",
  },
  {
    id: 15,
    image: "../images/blogcards/photo-15.jpg",
    category: "Health & Recovery",
    read_time: 5,
    title: "The Role of Sleep in Athletic Performance",
    description:
      "How sleep impacts recovery and performance, and tips for optimizing sleep.",
  },
  {
    id: 16,
    image: "../images/blogcards/photo-16.jpg",
    category: "Health & Recovery",
    read_time: 15,
    title: "Mental Health in Sports",
    description:
      "Addressing mental health challenges faced by athletes and strategies for support.",
  },
  {
    id: 17,
    image: "../images/blogcards/photo-17.jpg",
    category: "Health & Recovery",
    read_time: 15,
    title: "Injury Prevention Techniques",
    description:
      "Proactive measures to reduce the risk of injuries in athletes.",
  },
  {
    id: 18,
    image: "../images/blogcards/photo-18.jpg",
    category: "Health & Recovery",
    read_time: 25,
    title: "Effective Coaching Strategies",
    description:
      "Key principles for coaches to inspire and develop their athletes.",
  },
  {
    id: 19,
    image: "../images/blogcards/photo-19.jpg",
    category: "Health & Recovery",
    read_time: 25,
    title: "The Future of Sports Technology",
    description:
      "Emerging technologies that are shaping the future of sports performance and analysis.",
  },
  {
    id: 20,
    image: "../images/blogcards/photo-20.jpg",
    category: "Nutrition & Lifestyle",
    read_time: 15,
    title: "Optimizing Nutrition for Team Sports",
    description:
      "Tailored nutrition plans for team sports to enhance performance and recovery.",
  },
  {
    id: 21,
    image: "../images/blogcards/photo-21.jpg",
    category: "Health & Recovery",
    read_time: 5,
    title: "The Science of Muscle Recovery",
    description:
      "Understanding the biological processes behind muscle recovery and how to optimize them.",
  },
  {
    id: 22,
    image: "../images/blogcards/photo-22.jpg",
    category: "Health & Recovery",
    read_time: 5,
    title: "Mindfulness for Athletes",
    description:
      "How mindfulness practices can improve focus and reduce stress in athletes.",
  },
  {
    id: 23,
    image: "../images/blogcards/photo-23.jpg",
    category: "Health & Recovery",
    read_time: 15,
    title: "Leadership in Team Sports",
    description:
      "The role of leadership in building successful and cohesive sports teams.",
  },
  {
    id: 24,
    image: "../images/blogcards/photo-24.jpg",
    category: "Health & Recovery",
    read_time: 25,
    title: "Ultra-Endurance Training Tips",
    description:
      "Training strategies for athletes preparing for ultra-endurance events.",
  },
  {
    id: 25,
    image: "../images/blogcards/photo-25.jpg",
    category: "Health & Recovery",
    read_time: 15,
    title: "Periodization in Strength Training",
    description:
      "How to structure strength training programs for optimal performance gains.",
  },
];

const state = {
  cardSet: carddata,
  page: 1,
  rows: 6,
};

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
                        <p class="card-text">${obj.description}</p>
                        <p class="card-text">
                            <small class="text-body-secondary">
                                <i class="bi bi-clock"></i> Read time ${obj.read_time} min
                            </small>
                        </p>
                        <a href="#" class="btn btn-link">
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

//filtering and only then building

// Add event listeners for filters
$("#categoryFilter, #readTimeFilter").on("change", filterCards);

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

// Add some CSS to make the select boxes look better
$("select").addClass("form-select mb-3");
// Initial build
buildCards();


// filtering function

// Add these filter functions at the top of your JavaScript file
function filterCards() {
    const selectedCategory = $("#categoryFilter").val();
    const selectedReadTime = $("#readTimeFilter").val();
    
    let filteredCards = carddata;
    
    // Filter by category if not "all"
    if (selectedCategory !== "all") {
        filteredCards = filteredCards.filter(card => card.category === selectedCategory);
    }
    
    // Filter by read time if not "all"
    if (selectedReadTime !== "all") {
        filteredCards = filteredCards.filter(card => {
            switch(selectedReadTime) {
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

// Add this HTML above your cards div
const filterHTML = `
<div class="row mb-4">
    <div class="col-md-6">
        <select id="categoryFilter" class="form-select">
            <option value="all">All Categories</option>
            <option value="Performance Optimization">Performance Optimization</option>
            <option value="Health & Recovery">Health & Recovery</option>
            <option value="Nutrition & Lifestyle">Nutrition & Lifestyle</option>
        </select>
    </div>
    <div class="col-md-6">
        <select id="readTimeFilter" class="form-select">
            <option value="all">All Read Times</option>
            <option value="quick">Quick Read (5 min)</option>
            <option value="normal">Normal Read (6-15 min)</option>
            <option value="long">Long Read (>15 min)</option>
        </select>
    </div>
</div>
`;

// Modify your existing HTML to include the filters