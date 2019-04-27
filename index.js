$(document).ready(function (){
});


function displayError() {
  $('#errors').html(`I'm sorry, there's been an error. Please try again.`);
}

function searchRepositories() {
  const searchTerm = $('#searchTerms').value();
  $.get(`https://api.github.com/search/repositories? q=${searchTerm}`, response => {
    $("#results").html(displayRepositories(response));
    }).fail(displayError());
}