$(document).ready(function () {
  let currentDate = new Date(); // Track the current date
  let categoriesData = []; // Store fetched data
  let daysToShow = getDaysToShow(); // Number of days to show based on screen size

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Check screen size on resize and adjust layout
  $(window).resize(function () {
    const newDaysToShow = getDaysToShow();
    if (newDaysToShow !== daysToShow) {
      daysToShow = newDaysToShow;
      updateWeek();
    }
  });

  // Helper function to determine days to show based on screen width
  function getDaysToShow() {
    const width = $(window).width();
    if (width < 768) {
      // Small devices
      return 1;
    } else if (width < 992) {
      // Medium devices
      return 3;
    } else if (width < 1600) {
      // Medium devices
      return 4;
    } else {
      return 6;
    }
  }

  // Fetch data from JSON
  fetch("../data/appointment.json")
    .then((response) => response.json()) // Parse the JSON
    .then((data) => {
      categoriesData = data; // Store fetched data
      buildAppointment(); // Build the appointment page
    })
    .catch((error) => {
      console.error("Error loading appointment data:", error);
    });

  // Function to build the appointment page
  function buildAppointment() {
    createCalendarStructure(); // Create the main structure
    updateWeek(); // Update the week grid and content
  }

  // Function to create the calendar structure
  function createCalendarStructure() {
    const container = $("#appointment-container");

    // Clear existing content
    container.empty();

    // Create main table structure
    const calendarHTML = `
      <div class="calendar-wrapper">
        <!-- Current view indicator -->
        <div class="row mb-3">
          <div class="col-12 text-center">
            <h2 class="current-period" id="currentPeriodLabel"></h2>
          </div>
        </div>
      
        <!-- Date header row with navigation -->
        <div class="row date-header mb-4">
          <div class="col-1 text-center align-self-center">
            <i id="prevPeriod" class="fas fa-chevron-left fs-3 cursor-pointer"></i>
          </div>
          <div class="col-10">
            <div class="row" id="date-row"></div>
          </div>
          <div class="col-1 text-center align-self-center">
            <i id="nextPeriod" class="fas fa-chevron-right fs-3 cursor-pointer"></i>
          </div>
        </div>
        
        <!-- Morning section -->
        <div class="row time-section mb-4">
          <div class="col-12 text-center mb-3">
            <h3 class="section-title">Morning</h3>
          </div>
          <div class="col-12">
            <div class="row" id="morning-row"></div>
          </div>
        </div>
        
        <!-- Noon section -->
        <div class="row time-section mb-4">
          <div class="col-12 text-center mb-3">
            <h3 class="section-title">Noon</h3>
          </div>
          <div class="col-12">
            <div class="row" id="noon-row"></div>
          </div>
        </div>
        
        <!-- Afternoon section -->
        <div class="row time-section mb-4">
          <div class="col-12 text-center mb-3">
            <h3 class="section-title">Afternoon</h3>
          </div>
          <div class="col-12">
            <div class="row" id="afternoon-row"></div>
          </div>
        </div>
      </div>
      
      <!-- Appointment Modal -->
      <div class="modal fade" id="appointmentModal" tabindex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="appointmentModalLabel">Appointment Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p id="modalDate"></p>
              <p id="modalPerson"></p>
              <p id="modalLocation"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="bookNow">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    `;

    container.html(calendarHTML);

    // Add event listeners for navigation
    $("#prevPeriod").click(function () {
      if (!$(this).hasClass("disabled")) {
        currentDate.setDate(currentDate.getDate() - daysToShow);
        updateWeek();
      }
    });

    $("#nextPeriod").click(function () {
      currentDate.setDate(currentDate.getDate() + daysToShow);
      updateWeek();
    });

    // Add event listener for booking
    $(document).on(
      "click",
      ".appointment-card:not(.past-appointment)",
      function () {
        const title = $(this).find(".card-title").text();
        const time = $(this).find(".card-time").text();
        const person = $(this).find(".card-person").text();
        const dateText = $(this).closest(".day-column").data("date");

        $("#modalDate").text(`Date: ${dateText}, Time: ${time}`);
        $("#modalPerson").text(`Person: ${person}`);
        $("#modalLocation").text(
          "Location: Astana Sport Medicine Center, Block A101"
        );

        $("#appointmentModal").modal("show");
      }
    );

    // Event listener for "Book Now" button
    $("#bookNow").click(function () {
      alert("You have successfully booked the appointment!");
      $("#appointmentModal").modal("hide");
    });
  }

  // Function to update the displayed week/period
  function updateWeek() {
    const dateRow = $("#date-row");
    const morningRow = $("#morning-row");
    const noonRow = $("#noon-row");
    const afternoonRow = $("#afternoon-row");

    // Clear existing content
    dateRow.empty();
    morningRow.empty();
    noonRow.empty();
    afternoonRow.empty();

    // Calculate the start of the displayed period
    const startOfPeriod = new Date(currentDate);

    // Column width based on number of days shown
    const colWidth = Math.floor(12 / daysToShow);

    // Get today's date for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Update current period label
    updatePeriodLabel(startOfPeriod, daysToShow);

    // Generate columns for each day to show
    for (let i = 0; i < daysToShow; i++) {
      const day = new Date(startOfPeriod);
      day.setDate(startOfPeriod.getDate() + i);

      // Check if this day is in the past
      const isPastDay = day < today;
      const dayClass = isPastDay ? "past-day" : "";

      // Create date column header
      const dateCol = $(`
        <div class="col-${colWidth} day-header text-center ${dayClass}" data-day="${i}">
          <h3 class="fw-bold day-name">${daysOfWeek[day.getDay()]}</h3>
          <div class="date-details">
            <div class="date-number">${day.getDate()}</div>
            <div class="date-month">${months[day.getMonth()]}</div>
            <div class="date-year">${day.getFullYear()}</div>
          </div>
        </div>
      `);
      dateRow.append(dateCol);

      // Create columns for each time section
      const dayStr = day.toDateString();
      const columnClass = isPastDay ? "past-column" : "";
      const fullDate = `${
        months[day.getMonth()]
      } ${day.getDate()}, ${day.getFullYear()}`;

      morningRow.append(
        `<div class="col-${colWidth} day-column ${columnClass}" data-date="${fullDate}" data-past="${isPastDay}" id="morning-${i}"></div>`
      );
      noonRow.append(
        `<div class="col-${colWidth} day-column ${columnClass}" data-date="${fullDate}" data-past="${isPastDay}" id="noon-${i}"></div>`
      );
      afternoonRow.append(
        `<div class="col-${colWidth} day-column ${columnClass}" data-date="${fullDate}" data-past="${isPastDay}" id="afternoon-${i}"></div>`
      );
    }

    // Populate appointments for each day and time slot
    populateAppointments(startOfPeriod);

    // Disable "Previous Period" button if all days are in the past
    const startOfToday = new Date(today);
    const isPastPeriod =
      startOfPeriod < startOfToday &&
      new Date(startOfPeriod).setDate(
        startOfPeriod.getDate() + daysToShow - 1
      ) < today;
    $("#prevPeriod").toggleClass("disabled", isPastPeriod);
  }

  // Function to update the period label
  function updatePeriodLabel(startDate, numDays) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + numDays - 1);

    let labelText;
    if (numDays === 1) {
      labelText = `${
        months[startDate.getMonth()]
      } ${startDate.getDate()}, ${startDate.getFullYear()}`;
    } else {
      if (
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getFullYear() === endDate.getFullYear()
      ) {
        // Same month and year
        labelText = `${
          months[startDate.getMonth()]
        } ${startDate.getDate()} - ${endDate.getDate()}, ${startDate.getFullYear()}`;
      } else if (startDate.getFullYear() === endDate.getFullYear()) {
        // Different month, same year
        labelText = `${months[startDate.getMonth()]} ${startDate.getDate()} - ${
          months[endDate.getMonth()]
        } ${endDate.getDate()}, ${startDate.getFullYear()}`;
      } else {
        // Different month and year
        labelText = `${
          months[startDate.getMonth()]
        } ${startDate.getDate()}, ${startDate.getFullYear()} - ${
          months[endDate.getMonth()]
        } ${endDate.getDate()}, ${endDate.getFullYear()}`;
      }
    }

    $("#currentPeriodLabel").text(labelText);
  }

  // Function to populate appointments
  function populateAppointments(startDate) {
    // Get today's date for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // For each day in the period
    for (let i = 0; i < daysToShow; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);

      // Check if this day is in the past
      const isPastDay = day < today;

      // Filter data for this day
      const dayData = categoriesData.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate.toDateString() === day.toDateString();
      });

      // Sort by time
      dayData.sort((a, b) => {
        return a.time.localeCompare(b.time);
      });

      // Populate each time section
      dayData.forEach((item) => {
        const timeCategory = getTimeCategory(item.time);
        const categoryClass =
          item.type === "sport" ? "sport-category" : "medicine-category";
        const categoryCircle =
          item.type === "sport" ? "orange-circle" : "azure-circle";
        const pastClass = isPastDay ? "past-appointment" : "";

        // Create time range if not present
        let timeDisplay = item.time;
        if (!timeDisplay.includes("-")) {
          const timeParts = item.time.split(":");
          const startHour = parseInt(timeParts[0]);
          const endHour = startHour + 1;
          timeDisplay = `${item.time} - ${endHour
            .toString()
            .padStart(2, "0")}:${timeParts[1]}`;
        }

        const card = `
          <div class="appointment-card mb-3 p-3 border rounded position-relative ${categoryClass} ${pastClass}">
            <div class="${categoryCircle} position-absolute top-0 end-0 mt-2 me-2"></div>
            <h5 class="card-title mb-2">${item.title}</h5>
            <p class="card-time mb-1"><i class="far fa-clock me-1"></i>${timeDisplay}</p>
            <p class="card-person mb-0"><i class="far fa-user me-1"></i>${item.person}</p>
          </div>
        `;

        $(`#${timeCategory}-${i}`).append(card);
      });
    }
  }

  // Helper function to determine time category
  function getTimeCategory(timeStr) {
    const hour = parseInt(timeStr.split(":")[0]);

    if (hour < 12) {
      return "morning";
    } else if (hour < 17) {
      return "noon";
    } else {
      return "afternoon";
    }
  }
});
