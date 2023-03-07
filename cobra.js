
const SEC_UNTIL_RESULTS = 5.0;

function hide_element(elem) {
  elem.addClass("d-none");
}

function show_element(elem) {
  elem.removeClass("d-none");
}

function press_start() {
  // Show test modal
  $("#test_modal").modal("show");
  // Hide results button
  hide_element($("#results_button"));
  // Show results button in SEC_UNTIL_RESULTS
  setTimeout(() => {
    show_element($("#results_button"));
  }, SEC_UNTIL_RESULTS * 1000.0);
}

function press_results() {
  $("#results_modal").modal("show");
}