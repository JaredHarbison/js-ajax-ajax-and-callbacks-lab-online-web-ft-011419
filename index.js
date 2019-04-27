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
function displayRepositories(response) { 
    const repoList = response.items.map(r => {
        return `
            <div> 
                <h3><a href="${r.html_url}">${r.name}</a></h3>
                <img src="${r.owner.avatar_url}" alt="avatar">
                <p><a href="${r.owner.url}">${r.owner.login}</a></p>
                <p>${r.description}</p>
                <p><a href="#" data-repository="${r.name}" data-owner="${r.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
            </div>
            `
        }).join('');
        
        return repoList;
}