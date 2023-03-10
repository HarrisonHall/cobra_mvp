
const SEC_UNTIL_RESULTS = 5.0;

var show_results_timer = 0;
var submitted = false;

function hide_element(elem) {
  elem.addClass("d-none");
}

function show_element(elem) {
  elem.removeClass("d-none");
}

function submit_form() {
  hide_element($("#form_card"));
  show_element($("#start_button"));
  $("#google_form").submit();
}

function press_start() {
  if (!submitted) {
    submitted = true;
    // TODO - check if form is filled
    submit_form();
  }
  // Show test modal
  $("#test_modal").modal("show");
  // Hide results button
  clearTimeout(show_results_timer);
  hide_element($("#results_button"));
  // Show results button in SEC_UNTIL_RESULTS
  show_results_timer = setTimeout(() => {
    show_element($("#results_button"));
  }, SEC_UNTIL_RESULTS * 1000.0);
}

function press_results() {
  $("#results_modal").modal("show");
}