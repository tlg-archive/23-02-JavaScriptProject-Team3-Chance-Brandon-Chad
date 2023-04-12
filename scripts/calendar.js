// Get the current date and format it as YY-MM-DD
const today = moment().format("YYYY-MM-DD");

// Add 10 days to the current date and format it as YY-MM-DD
const maxDate = moment().add(6, "days").format("YYYY-MM-DD");

// Add an eventListener to the HTML input element with #date_selection
document
  .getElementById("date_selection")
  .addEventListener("click", function () {
    // Set the minimun attribute of the input element to the current date
    document.getElementById("date_selection").setAttribute("min", today);
    // Set the maximun attribute of the input element to maxDate variabe
    document.getElementById("date_selection").setAttribute("max", maxDate);
  });
