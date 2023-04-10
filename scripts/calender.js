export function handleDateSelection() {
  jQuery(function () {
    // Get today's date
    let today = new Date();

    // Calculate the minimum and maximum date (today to 10 days from today)
    let minDate = today;
    let maxDate = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000);

    // Initialize the datepicker with minDate and maxDate options
    jQuery("#date_selection").datepicker({
      minDate: minDate,
      maxDate: maxDate,
    });
  });
}
