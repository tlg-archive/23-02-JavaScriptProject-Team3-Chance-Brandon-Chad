window.onload = function () {
  // Get the current date and format it as YYYY-MM-DD
  const today = moment().format("YYYY-MM-DD");
  // Add 6 days to the current date and format it as YYYY-MM-DD
  const maxDate = moment().add(6, "days").format("YYYY-MM-DD");
  // Set the minimum attribute of the input element to the current date
  document.getElementById("date_selection").setAttribute("min", today);
  // Set the maximum attribute of the input element to maxDate variable
  document.getElementById("date_selection").setAttribute("max", maxDate);
};
