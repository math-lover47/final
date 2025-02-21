class Appointment {
  constructor(patient, doctor, date) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
  }
}

class Doctor {
  constructor(name, specialty) {
    this.name = name;
    this.specialty = specialty;
  }
}

// Initialize doctors
const doctors = [
  new Doctor("Dr. Smith", "Sports Injury"),
  // Add more doctors
];

// Populate doctor select
doctors.forEach((doctor) => {
  $("#specialistSelect").append(
    `<option value="${doctor.name}">${doctor.name} - ${doctor.specialty}</option>`
  );
});
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (name === "" || email === "") {
    alert("Please fill out all fields.");
    return false;
  }
  return true;
}
