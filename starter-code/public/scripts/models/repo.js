'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
//The requestRepos method makes an ajax call using the 'github/user/repos' path
//then calls the .then() method to call an arrow function that populates the repos.all array
//with the returned repo objects. It's called in the aboutController and the callback that it's
// passed is repoView.index() which renders the repo page.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
